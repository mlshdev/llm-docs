> Pinned source for Docker main: [data/cli/dhi/docker_dhi_customization_prepare.yaml](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/data/cli/dhi/docker_dhi_customization_prepare.yaml)

# docker dhi customization prepare

Prepare a new customization YAML file from a DHI base image tag

**Usage:** `docker dhi customization prepare <dhi-repository> <tag>`

## Description

Prepare a new single or bulk customization YAML file by fetching tag details from Docker Hardened Images.
This creates a scaffold YAML file that can be used with the create command.

Single customization — provide the DHI source repository and tag as positional arguments:
docker dhi customization prepare golang 1.24-dev --destination myorg/dhi-golang

Bulk customization — pipe a JSON array of {destination, tag-definition-id} objects via stdin:
echo '\[{"destination":"myorg/dhi-golang","tag-definition-id":"golang/alpine-3.23/1.24-dev"}]' \
\| docker dhi customization prepare --name my-custo

Values the customization inherits from the tag definition (environment variables, entrypoint, cmd,
accounts and working directory) are listed commented out. Fields left out or commented out are inherited;
uncommenting a field overrides the inherited value:

- environment, labels and annotations override per key; keys you leave out are still inherited.
- entrypoint and cmd are replaced entirely by the list you provide.
- accounts override per sub-key; a users or groups list replaces the whole inherited list.
  A bulk customization inherits the same way, with each target merged with its own tag definition.

For a Helm chart, every reference of the chart is listed under variable\_mappings, pointing at dhi.io.
To point a reference elsewhere, uncomment its repository and either tag\_definition\_id (another tag
definition of a mirrored image) or customization\_id (a customization). Sub-charts can only point at a
customization or dhi.io. Do not change the variable names.

The scaffold is written to stdout; redirect to a file if needed:
docker dhi customization prepare golang 1.24-dev > customization.yaml

Run 'docker dhi customization list' to see available source repositories,
or use shell completion to discover repository names and tags.

## Options

| Option                | Default | Description                                    |
| --------------------- | ------- | ---------------------------------------------- |
| `-d`, `--destination` |         | Destination repository (e.g. myorg/dhi-golang) |
| `-n`, `--name`        |         | Name for the customization                     |

## Global options

| Option  | Default | Description                                |
| ------- | ------- | ------------------------------------------ |
| `--org` |         | Docker Hub organization (overrides config) |
