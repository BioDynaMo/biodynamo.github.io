# Website CI

`website-ci.yml` builds BioDynaMo and its Gatsby website on Ubuntu 22.04, then
publishes the generated files to this repository's `master` branch. GitHub Pages
serves them at https://biodynamo.github.io/. Several Google Sites pages on
www.biodynamo.org embed this content.

## Ubuntu 22.04 changes

- Use the main BioDynaMo repository's `ubuntu-22.04/prerequisites.sh all` script.
  It installs system build dependencies before building shared Python 3.9.1,
  and installs the notebook tools, Doxygen, and Graphviz.
- Keep Python 3.9.1: BioDynaMo's CMake configuration requires that exact version
  on Linux. Avoid a second Python installation step before its dependencies exist.
- Correct the prerequisite script's CMake 3.19.3 installer filename in the CI
  checkout: the release asset uses `Linux-x86_64`, not `linux-x86_64`.
  Remove this workaround when the upstream script is fixed. Run prerequisites
  with `bash -e` so installation failures stop the job.
- Use `actions/checkout@v6`, `actions/cache@v5`, and
  `peaceiris/actions-gh-pages@v4`. These versions use Node 24 for the actions
  themselves; they do not change the Gatsby application's Node version.
- Separate caches by runner OS/architecture, Python prerequisite inputs, and
  third-party checksums. Restore caches after checking out their key inputs.
- Initialize `PYENV_ROOT` explicitly for the build and install `lxml_html_clean`
  into the selected Python environment.

## Validate and publish

1. Merge the website source changes into `BioDynaMo/website` and documentation
   changes into `BioDynaMo/biodynamo` as appropriate. This workflow builds their
   `master` branches. In particular, the locally prepared fix for Gatsby hanging
   at `createPages` must reach the website repository if the selected content has
   no matching news entries. It is not part of this deployment repository change.
2. Merge this workflow update through review. The workflow was disabled due to
   inactivity at the time of the audit; a maintainer must enable it in Actions.
3. Run **Website CI** manually with **publish unchecked** for a full build test.
   Manual runs default to build-only. A run from a non-master branch cannot deploy.
4. Once the build succeeds, run on `master` with **publish checked**. Confirm
   `ACTIONS_DEPLOY_KEY` is configured and has write access to this repository.
5. Check the deploy step and the subsequent GitHub Pages build, then inspect the
   direct GitHub Pages URLs and their embeds on www.biodynamo.org.

Scheduled runs remain daily at 03:00 UTC and publish automatically from `master`
when enabled. There is no direct trigger on merges in the website source repo.
The workflow preserves `.github` in the generated output so publishing does not
delete this workflow or its documentation.

## Validation limits

The change was checked locally with actionlint, YAML parsing, shell syntax checks,
and verification of the CMake filename workaround against the upstream installer
and release assets. A full Ubuntu 22.04 hosted build and deployment have not yet
been run. The legacy website Docker image and unpinned notebook dependencies may
reveal further compatibility issues during that first run; a successful static
workflow check does not prove the full site builds.
