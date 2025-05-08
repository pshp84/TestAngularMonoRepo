# AngularMonorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ This workspace is build with  [Nx workspace](https://nx.dev) aims multi-angular applications and libraries ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) 

-To install nx workspace globally
rum `npm install -g nx`


## Nx workspace overview
-Creating Workspace 
run `npx create-nx-workspace@latest angular-monorepo --preset=angular --strict`
    --strict flag is used to enforce strict type checking
    --this will require Integrated repo or standalone project one application name, bundler, stylesheet format, server side renderting, unit test runner and CI provider

-Add essential Nx plugins (e.g., @nx/angular, @nx/linter, @nx/storybook, etc.).
run `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser`
 
run `npm install --save-dev @nx/angular @nx/linter @nx/storybook`


## Guidelines on creating new apps/libs.
- To Create new angular app
run `nx g @nx/angular:application apps/app-name`

- To Create new angular lib
run `nx g @nx/angular:library libs/directory-name/lib-name --standalone --buildable`
    --buildable used to create builds

or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Naming Conventions
- Libraries: `domain/type-name` (e.g., `feature/auth`)
- Apps: Simple lowercase names (e.g., `app-one`, `app-two`)
- Types:
  - `ui`: Presentational components
  - `feature`: Smart components or pages
  - `data-access`: Services, state management
  - `shared`: Pure functions or helpers



## Developer Commands

To run the dev server for your app, use:

```sh
-To Serve App

run `npx nx serve app-name`
npx nx serve app-one
```

To create a production bundle:

```sh
run `npx nx build app-name`
run `npx nx build lib-name`
npx nx build app-one
npx nx build auth
```


-To Lint App or Lib
run `npx nx lint app-name`
run `npx nx lint lib-name`

 
To see all available targets to run for a project, run:

```sh
npx nx show project app-one
```

To run affected project
```sh
npx nx affected -t build test lint
```

## Architectural boundaries documentation
This repo enforces strict boundaries using Nx’s `enforce-module-boundaries` rule.

- Each domain has its own folder in `libs/`
- Code in `feature` libs may use `data-access` or `ui` from the same domain
- Cross-domain access is restricted unless explicitly allowed in `nx.json`

> See `nx.json` > `projects` and `dependenciesConstrains` for allowed dependencies



These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
