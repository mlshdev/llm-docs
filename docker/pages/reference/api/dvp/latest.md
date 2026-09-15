> Pinned source for Docker main: [content/reference/api/dvp/latest.md](https://github.com/docker/docs/blob/2465b5136acea8373d5c6a27e4672f4acf26c935/content/reference/api/dvp/latest.md)

# Docker Verified Publisher API reference

## API specification

**DVP Data API**

- Version: `1.0.0`

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

- Base URL: `https://hub.docker.com/api/publisher/analytics/v1`

## Authentication

### `HubAuth` (https, bearer): JWT Bearer Authentication is required to access the Docker DVP Data API. This authentication documentation is duplicated from the [Hub API Authentication docs](https://docs.docker.com/reference/api/hub/latest/#tag/authentication)

## Endpoints

### `POST /v2/users/login`

**Create an authentication token**

Creates and returns a bearer token in JWT format that you can use to
authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Authentication:** none

**Request body** (required): Login details.

- Media type: `application/json`
  - Schema (object): User login details
    - `username` (required; string): The username of the Docker Hub account to authenticate with.
      - Example: `myusername`
    - `password` (required; string): The password or personal access token (PAT) of the Docker Hub account to authenticate with.
      - Example: `hunter2`

**Responses**

- `200`: Authentication successful
  - Media type: `application/json`
    - Schema (object): successful user login response
      - `token` (string): Created authentication token. This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
- `401`: Authentication failed or second factor required
  - Media type: `application/json`
    - Schema (object): failed user login response or second factor required
      - `detail` (required; string): Description of the error.
        - Example: `Incorrect authentication credentials`
      - `login_2fa_token` (string; nullable): Short-lived token to be used on `/v2/users/2fa-login` to complete the authentication. This field is present only if 2FA is enabled.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

### `POST /v2/users/2fa-login`

**Second factor authentication**

When a user has 2FA enabled, this is the second call to perform after
`/v2/users/login` call.

Creates and returns a bearer token in JWT format that you can use to authenticate with Docker Hub APIs.

The returned token is used in the HTTP Authorization header like `Authorization: Bearer {TOKEN}`.

Most Docker Hub APIs require this token either to consume or to get detailed information. For example, to list images in a private repository.

**Authentication:** none

**Request body** (required): Login details.

- Media type: `application/json`
  - Schema (object): Second factor user login details
    - `login_2fa_token` (required; string): The intermediate 2FA token returned from `/v2/users/login` API.
      - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
    - `code` (required; string): The Time-based One-Time Password of the Docker Hub account to authenticate with.
      - Example: `123456`

**Responses**

- `200`: Authentication successful
  - Media type: `application/json`
    - Schema (object): successful user login response
      - `token` (string): Created authentication token. This token can be used in the HTTP Authorization header as a JWT to authenticate with the Docker Hub APIs.
        - Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
- `401`: Authentication failed or second factor required
  - Media type: `application/json`
    - Schema (object): failed second factor login response.
      - `detail` (string): Description of the error.
        - Example: `Incorrect authentication credentials`

### `GET /`

**Get namespaces and repos**

Gets a list of your namespaces and repos which have data available.

**Authentication:** `HubAuth`

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `namespaces` (array)
        - `items` (string)

### `GET /namespaces`

**Get user's namespaces**

Get metadata associated with the namespaces the user has access to, including extra repos associated with the namespaces.

**Authentication:** `HubAuth`

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (array)
      - `items` (object)
        - `namespace` (string)
        - `extraRepos` (array)
          - `items` (string)
        - `datasets` (array)
          - `items` (object)
            - `name` (string; enum: `pulls`)
            - `views` (array)
              - `items` (string; enum: `raw`, `summary`, `repo-summary`, `namespace-summary`)
            - `timespans` (array)
              - `items` (string; enum: `months`, `weeks`)
- `401`: Authentication failed or second factor required

### `GET /namespaces/{namespace}`

**Get namespace**

Gets metadata associated with specified namespace, including extra repos associated with the namespace.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `namespace` (string)
      - `extraRepos` (array)
        - `items` (string)
      - `datasets` (array)
        - `items` (object)
          - `name` (string; enum: `pulls`)
          - `views` (array)
            - `items` (string; enum: `raw`, `summary`, `repo-summary`, `namespace-summary`)
          - `timespans` (array)
            - `items` (string; enum: `months`, `weeks`)

### `GET /namespaces/{namespace}/pulls`

**Get pull data**

Gets pulls for the given namespace.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for
- `timespan` (query; string; enum: `months`, `weeks`): Timespan type for fetching data
- `period` (query; string; enum: `last-2-months`, `last-3-months`, `last-6-months`, `last-12-months`): Relative period of the period to fetch data
- `group` (query; string; enum: `repo`, `namespace`): Field to group the data by

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `pulls` (array)
        - `items` (object)
          - `start` (string)
          - `end` (string)
          - `repo` (string)
          - `namespace` (string)
          - `pullCount` (integer)
          - `ipCount` (integer)
          - `country` (string)
- `404`: Not found - namespace doesn't exist or user does not have permission to access it

### `GET /namespaces/{namespace}/repos/{repo}/pulls`

**Get pull data**

Gets pulls for the given repo.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for
- `repo` (path; required; string): Repository to fetch data for
- `timespan` (query; string; enum: `months`, `weeks`): Timespan type for fetching data
- `period` (query; string; enum: `last-2-months`, `last-3-months`, `last-6-months`, `last-12-months`): Relative period of the period to fetch data
- `group` (query; string; enum: `repo`, `namespace`): Field to group the data by

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `pulls` (array)
        - `items` (object)
          - `start` (string)
          - `end` (string)
          - `repo` (string)
          - `namespace` (string)
          - `pullCount` (integer)
          - `ipCount` (integer)
          - `country` (string)
- `404`: Not found - repo doesn't exist or user does not have permission to access it

### `GET /namespaces/{namespace}/pulls/exports/years`

**Get years with data**

Gets a list of years that have data for the given namespace.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `years` (array)
        - `items` (object)
          - `year` (integer)

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}`

**Get timespans with data**

Gets a list of timespans of the given type that have data for the given namespace and year.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for
- `year` (path; required; integer): Year to fetch data for
- `timespantype` (path; required; string; enum: `months`, `weeks`): Type of timespan to fetch data for

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `months` (array)
            - `items` (object)
              - `month` (integer)
        - `variant 2` (object)
          - `weeks` (array)
            - `items` (object)
              - `week` (integer)

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}`

**Get namespace metadata for timespan**

Gets info about data for the given namespace and timespan.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for
- `year` (path; required; integer): Year to fetch data for
- `timespantype` (path; required; string; enum: `months`, `weeks`): Type of timespan to fetch data for
- `timespan` (path; required; integer): Timespan to fetch data for

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema
      - oneOf:
        - `variant 1` (object)
          - `month` (integer)
        - `variant 2` (object)
          - `week` (integer)
- `404`: Not Found

### `GET /namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}/{dataview}`

**Get namespace data for timespan**

Gets a list of URLs that can be used to download the pull data for the given namespace and timespan.

**Authentication:** `HubAuth`

**Parameters**

- `namespace` (path; required; string): Namespace to fetch data for
- `year` (path; required; integer): Year to fetch data for
- `timespantype` (path; required; string; enum: `months`, `weeks`): Type of timespan to fetch data for
- `timespan` (path; required; integer): Timespan to fetch data for
- `dataview` (path; required; string; enum: `raw`, `summary`, `repo-summary`, `namespace-summary`): Type of data to fetch

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `data` (array): List of urls to download the data. When the data is large, the data will be split into multiple files.
        - `items` (object)
          - `url` (string)
          - `size` (integer; format: int64)

### `GET /repos/pulls`

**Get pull data for multiple repos**

Gets pull for the given repos.

**Authentication:** `HubAuth`

**Parameters**

- `repos` (query; required; array): Repositories to fetch data for (maximum of 50 repositories per request).
- `timespan` (query; string; enum: `months`, `weeks`): Timespan type for fetching data
- `period` (query; string; enum: `last-2-months`, `last-3-months`, `last-6-months`, `last-12-months`): Relative period of the period to fetch data
- `group` (query; string; enum: `repo`, `namespace`): Field to group the data by

**Responses**

- `200`: Success
  - Media type: `application/json`
    - Schema (object)
      - `repos` (object)
        - `additional properties` (object)
          - `pulls` (array)
            - `items` (object)
              - `start` (string)
              - `end` (string)
              - `repo` (string)
              - `namespace` (string)
              - `pullCount` (integer)
              - `ipCount` (integer)
              - `country` (string)
