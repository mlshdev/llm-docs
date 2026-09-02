> Commit-pinned source for Docker main: [content/reference/api/dvp/latest.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/reference/api/dvp/latest.md)

# Docker Verified Publisher API reference

## API specification

- Version: `1.0.0`

- Base URL: `https://hub.docker.com/api/publisher/analytics/v1`

The Docker DVP Data API allows [Docker Verified Publishers](https://docs.docker.com/docker-hub/publish/) to view image pull analytics data for their namespaces. Analytics data can be retrieved in a CSV as raw data, or in a summary format.

#### Summary data

In your summary data CSV, you will have access to the data points listed below. You can request summary data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month).

There are two levels of summary data:

- Repository-level, a summary of every namespace and repository
- Tag- or digest-level, a summary of every namespace, repository, and reference
  (tag or digest)

The summary data formats contain the following data points:

- Unique IP address count
- Pulls by tag count
- Pulls by digest count
- Version check count

#### Raw data

In your raw data CSV you will have access to the data points listed below. You can request raw data for a complete week (Monday through Sunday) or for a complete month (available on the first day of the following month). **Note:** each action is represented as a single row.

- Type (industry)
- Host (cloud provider)
- Country (geolocation)
- Timestamp
- Namespace
- Repository
- Reference (digest is always included, tag is provided when available)
- HTTP request method
- Action, one of the following:
  - Pull by tag
  - Pull by digest
  - Version check
- User-Agent

## Authentication

### `HubAuth` (https, bearer)

JWT Bearer Authentication is required to access the Docker DVP Data API.

This authentication documentation is duplicated from the [Hub API Authentication docs](https://docs.docker.com/reference/api/hub/latest/#tag/authentication)

## Endpoints

### `POST /v2/users/login`

**Create an authentication token**

Creates and returns a bearer token in JWT format that you can use to
authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Request body**: Login details.

**Responses**

- `200`: Authentication successful
- `401`: Authentication failed or second factor required

### `POST /v2/users/2fa-login`

**Second factor authentication**

When a user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Request body**: Login details.

**Responses**

- `200`: Authentication successful
- `401`: Authentication failed or second factor required

### `GET /`

**Get namespaces and repos**

Gets a list of your namespaces and repos which have data available.

**Responses**

- `200`: Success

### `GET /namespaces`

**Get user's namespaces**

Get metadata associated with the namespaces the user has access to, including extra repos associated with the namespaces.

**Responses**

- `200`: Success
- `401`: Authentication failed or second factor required

### `GET /namespaces/{namespace}`

**Get namespace**

Gets metadata associated with specified namespace, including extra repos associated with the namespace.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for

**Responses**

- `200`: Success

### `GET /namespaces/{namespace}/pulls`

**Get pull data**

Gets pulls for the given namespace.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for
- `timespan` (query): Timespan type for fetching data
- `period` (query): Relative period of the period to fetch data
- `group` (query): Field to group the data by

**Responses**

- `200`: Success
- `404`: Not found - namespace doesn't exist or user does not have permission to access it

### `GET /namespaces/{namespace}/repos/{repo}/pulls`

**Get pull data**

Gets pulls for the given repo.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for
- `repo` (path, required): Repository to fetch data for
- `timespan` (query): Timespan type for fetching data
- `period` (query): Relative period of the period to fetch data
- `group` (query): Field to group the data by

**Responses**

- `200`: Success
- `404`: Not found - repo doesn't exist or user does not have permission to access it

### `GET /namespaces/{namespace}/pulls/exports/years`

**Get years with data**

Gets a list of years that have data for the given namespace.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for

**Responses**

- `200`: Success

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}`

**Get timespans with data**

Gets a list of timespans of the given type that have data for the given namespace and year.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for
- `year` (path, required): Year to fetch data for
- `timespantype` (path, required): Type of timespan to fetch data for

**Responses**

- `200`: Success

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}`

**Get namespace metadata for timespan**

Gets info about data for the given namespace and timespan.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for
- `year` (path, required): Year to fetch data for
- `timespantype` (path, required): Type of timespan to fetch data for
- `timespan` (path, required): Timespan to fetch data for

**Responses**

- `200`: Success
- `404`: Not Found

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}/{dataview}`

**Get namespace data for timespan**

Gets a list of URLs that can be used to download the pull data for the given namespace and timespan.

**Parameters**

- `namespace` (path, required): Namespace to fetch data for
- `year` (path, required): Year to fetch data for
- `timespantype` (path, required): Type of timespan to fetch data for
- `timespan` (path, required): Timespan to fetch data for
- `dataview` (path, required): Type of data to fetch

**Responses**

- `200`: Success

### `GET /repos/pulls`

**Get pull data for multiple repos**

Gets pull for the given repos.

**Parameters**

- `repos` (query, required): Repositories to fetch data for (maximum of 50 repositories per request).
- `timespan` (query): Timespan type for fetching data
- `period` (query): Relative period of the period to fetch data
- `group` (query): Field to group the data by

**Responses**

- `200`: Success
