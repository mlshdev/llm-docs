> Pinned source for Docker main: [content/reference/api/registry/latest.md](https://github.com/docker/docs/blob/2465b5136acea8373d5c6a27e4672f4acf26c935/content/reference/api/registry/latest.md)

# Supported registry API for Docker Hub

## API specification

**Supported registry API for Docker Hub**

Docker Hub is an OCI-compliant registry, which means it adheres to the open
standards defined by the Open Container Initiative (OCI) for distributing
container images. This ensures compatibility with a wide range of tools and
platforms in the container ecosystem.

This reference documents the Docker Hub-supported subset of the Registry HTTP API V2.
It focuses on pulling, pushing, and deleting images. It does not cover the full OCI Distribution Specification.

For the complete OCI specification, see [OCI Distribution Specification](https://github.com/opencontainers/distribution-spec).

- Base URL: `https://registry-1.docker.io`

## Endpoints

### `GET /v2/{name}/manifests/{reference}`

**Get image manifest**

Fetch the manifest identified by `name` and `reference`, where `reference` can be a tag (e.g., `latest`) or a digest (e.g., `sha256:...`).

The manifest contains metadata about the image, including configuration and layer digests. It is required for pulling images from the registry.

This endpoint requires authentication. Use the `Authorization: Bearer <token>` header.

**Parameters**

- `name` (path; required; string): Name of the target repository
  - Example: `library/ubuntu`
- `reference` (path; required; string): Tag or digest of the target manifest
  - Example `by-tag`: `latest`
  - Example `by-digest`: `sha256:abc123def456...`
- `Authorization` (header; required; string): RFC7235-compliant authorization header (e.g., `Bearer <token>`).
- `Accept` (header; string): Media type(s) the client supports for the manifest. The registry supports the following media types: - application/vnd.docker.distribution.manifest.v2+json - application/vnd.docker.distribution.manifest.list.v2+json - application/vnd.oci.image.manifest.v1+json - application/vnd.oci.image.index.v1+json

**Responses**

- `200`: Manifest fetched successfully.
  - Header `Docker-Content-Digest` (string): Digest of the returned manifest content.
  - Header `Content-Type` (string): Media type of the returned manifest.
  - Media type: `application/vnd.docker.distribution.manifest.v2+json`
    - Schema (object)
      - `schemaVersion` (required; integer)
        - Example: `2`
      - `mediaType` (required; string)
        - Example: `application/vnd.docker.distribution.manifest.v2+json`
      - `config` (required; object)
        - `mediaType` (string)
          - Example: `application/vnd.docker.container.image.v1+json`
        - `size` (integer)
          - Example: `7023`
        - `digest` (string)
          - Example: `sha256:a3f3e...c1234`
      - `layers` (required; array)
        - `items` (object)
          - `mediaType` (string)
            - Example: `application/vnd.docker.image.rootfs.diff.tar.gzip`
          - `size` (integer)
            - Example: `32654`
          - `digest` (string)
            - Example: `sha256:bcf2...78901`
    - Example `docker-manifest`: `{"schemaVersion":2,"mediaType":"application/vnd.docker.distribution.manifest.v2+json","config":{"mediaType":"application/vnd.docker.container.image.v1+json","size":7023,"digest":"sha256:123456abcdef..."},"layers":[{"mediaType":"application/vnd.docker.image.rootfs.diff.tar.gzip","size":32654,"digest":"sha256:abcdef123456..."},{"mediaType":"application/vnd.docker.image.rootfs.diff.tar.gzip","size":16724,"digest":"sha256:7890abcdef12..."}]}`
- `400`: Invalid name or reference.
- `401`: Authentication required.
- `403`: Access denied.
- `404`: Repository or manifest not found.
- `429`: Too many requests.

### `PUT /v2/{name}/manifests/{reference}`

**Put image manifest**

Upload an image manifest for a given tag or digest. This operation registers a manifest in a repository, allowing it to be pulled using the specified reference.

This endpoint is typically used after all layer and config blobs have been uploaded to the registry.

The manifest must conform to the expected schema and media type. For Docker image manifest schema version 2, use:
`application/vnd.docker.distribution.manifest.v2+json`

Requires authentication via a bearer token with `push` scope for the target repository.

**Parameters**

- `name` (path; required; string): Name of the target Repository
  - Example: `library/ubuntu`
- `reference` (path; required; string): Tag or digest to associate with the uploaded Manifest
  - Example `by-tag`: `latest`
  - Example `by-digest`: `sha256:abc123def456...`
- `Authorization` (header; required; string): RFC7235-compliant authorization header (e.g., `Bearer <token>`).
- `Content-Type` (header; required; string): Media type of the manifest being uploaded.

**Request body** (required)

- Media type: `application/vnd.docker.distribution.manifest.v2+json`
  - Schema (object)
    - `schemaVersion` (required; integer)
      - Example: `2`
    - `mediaType` (required; string)
      - Example: `application/vnd.docker.distribution.manifest.v2+json`
    - `config` (required; object)
      - `mediaType` (required; string)
        - Example: `application/vnd.docker.container.image.v1+json`
      - `size` (required; integer)
        - Example: `7023`
      - `digest` (required; string)
        - Example: `sha256:123456abcdef...`
    - `layers` (required; array)
      - `items` (object)
        - `mediaType` (required; string)
          - Example: `application/vnd.docker.image.rootfs.diff.tar.gzip`
        - `size` (required; integer)
          - Example: `32654`
        - `digest` (required; string)
          - Example: `sha256:abcdef123456...`
  - Example `sample-manifest`: `{"schemaVersion":2,"mediaType":"application/vnd.docker.distribution.manifest.v2+json","config":{"mediaType":"application/vnd.docker.container.image.v1+json","size":7023,"digest":"sha256:123456abcdef..."},"layers":[{"mediaType":"application/vnd.docker.image.rootfs.diff.tar.gzip","size":32654,"digest":"sha256:abcdef123456..."}]}`

**Responses**

- `201`: Manifest created successfully.
  - Header `Docker-Content-Digest` (string): Digest of the stored manifest.
  - Header `Location` (string): Canonical location of the uploaded manifest.
  - Header `Content-Length` (integer): Always zero.
- `400`: Invalid name, reference, or manifest.
- `401`: Authentication required.
- `403`: Access denied.
- `404`: Repository not found.
- `405`: Operation not allowed.
- `429`: Too many requests.

### `DELETE /v2/{name}/manifests/{reference}`

**Delete image manifest**

Delete an image manifest from a repository by digest.

Only untagged or unreferenced manifests can be deleted. If the manifest is still referenced by a tag or another image, the registry will return `403 Forbidden`.

This operation requires `delete` access to the repository.

> **Note**
>
> Manifest deletion operations may take some time and could return a `500 Internal Server Error`. The system automatically retries the deletion in the background. Manual intervention is not required.

**Parameters**

- `name` (path; required; string): Name of the repository
  - Example: `yourusername/helloworld`
- `reference` (path; required; string): Digest of the manifest to delete (e.g., `sha256:...`)
  - Example: `sha256:abc123def456...`
- `Authorization` (header; required; string): Bearer token with `delete` access

**Responses**

- `202`: Manifest deleted successfully. No content returned.
- `401`: Authentication required.
- `403`: Access denied. The manifest may still be referenced.
- `404`: Manifest or repository not found.
- `405`: Only digest-based deletion is allowed.
- `429`: Too many requests.

### `HEAD /v2/{name}/manifests/{reference}`

**Check if manifest exists**

Use this endpoint to verify whether a manifest exists by tag or digest.

This is a lightweight operation that returns only headers (no body). It is useful for:

- Checking for the existence of a specific image version
- Determining the digest or size of a manifest before downloading or deleting

This endpoint requires authentication with pull scope.

**Parameters**

- `name` (path; required; string): Name of the Repository
  - Example: `library/ubuntu`
- `reference` (path; required; string): Tag or digest to check
  - Example `by-tag`: `latest`
  - Example `by-digest`: `sha256:abc123def456...`
- `Authorization` (header; required; string): Bearer token for authentication
- `Accept` (header; string): Media type of the manifest to check. The response will match one of the accepted types.

**Responses**

- `200`: Manifest exists.
  - Header `Content-Length` (integer): Size of the manifest in bytes
  - Header `Docker-Content-Digest` (string): Digest of the manifest
  - Header `Content-Type` (string): Media type of the manifest
- `401`: Authentication required.
- `403`: Access denied.
- `404`: Manifest not found.
- `429`: Too many requests.

### `POST /v2/{name}/blobs/uploads/`

**Initiate blob upload or attempt cross-repository blob mount**

Initiate an upload session for a blob (layer or config) in a repository.

This is the first step in uploading a blob. It returns a `Location` URL where the blob can be uploaded using `PATCH` (chunked) or `PUT` (monolithic).

Instead of uploading a blob, a client may attempt to mount a blob from another repository (if it has read access) by including the `mount` and `from` query parameters.

If successful, the registry responds with `201 Created` and the blob is reused without re-upload.

If the mount fails, the upload proceeds as usual and returns a `202 Accepted`.

You must authenticate with `push` access to the target repository.

**Parameters**

- `name` (path; required; string): Name of the target repository
  - Example: `library/ubuntu`
- `mount` (query; string): Digest of the blob to mount from another repository
  - Example: `sha256:abc123def456...`
- `from` (query; string): Source repository to mount the blob from
  - Example: `library/busybox`
- `Authorization` (header; required; string): Bearer token for authentication with `push` scope

**Responses**

- `201`: Blob successfully mounted from another repository.
  - Header `Location` (string): URL where the mounted blob is accessible
  - Header `Docker-Content-Digest` (string): Canonical digest of the mounted blob
  - Header `Content-Length` (integer): Always zero
- `202`: Upload initiated successfully (fallback if mount fails).
  - Header `Location` (string): Upload location URL for `PATCH` or `PUT` requests
  - Header `Docker-Upload-UUID` (string): Server-generated UUID for the upload session
  - Header `Range` (string): Current upload byte range (typically `0-0` at init)
  - Header `Content-Length` (integer): Always zero
- `401`: Authentication required.
- `403`: Access denied.
- `404`: Repository not found.
- `429`: Too many requests.

### `GET /v2/{name}/blobs/{digest}`

**Retrieve blob**

Download the blob identified by digest from the registry.

Blobs include image layers and configuration objects. Clients must use the digest from the manifest to retrieve a blob.

This endpoint may return a `307 Temporary Redirect` to a CDN or storage location. Clients must follow the redirect to obtain the actual blob content.

The blob content is typically a gzipped tarball (for layers) or JSON (for configs). The MIME type is usually `application/octet-stream`.

**Parameters**

- `name` (path; required; string): Repository Name
  - Example: `library/ubuntu`
- `digest` (path; required; string): Digest of the Blob
  - Example: `sha256:abc123def456...`
- `Authorization` (header; required; string): Bearer token with pull scope
  - Example: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6...`

**Responses**

- `200`: Blob content returned directly
  - Header `Content-Length` (integer): Size of the blob in bytes
  - Header `Content-Type` (string): MIME type of the blob
  - Header `Docker-Content-Digest` (string): Digest of the returned blob
  - Media type: `application/octet-stream`
    - Schema (string; format: binary)
    - Example `small-layer`: `<binary data not shown>`
- `307`: Temporary redirect to blob location
  - Header `Location` (string): Redirect URL for blob download (e.g., S3 or CDN)
- `401`: Authentication required
- `403`: Access denied
- `404`: Blob not found
- `429`: Too many requests

### `HEAD /v2/{name}/blobs/{digest}`

**Check existence of blob**

Check whether a blob (layer or config) exists in the registry.

This is useful before uploading a blob to avoid duplicates.

If the blob is present, the registry returns a `200 OK` response with headers like `Content-Length` and `Docker-Content-Digest`.

If the blob does not exist, the response will be `404 Not Found`.

**Parameters**

- `name` (path; required; string): Name of the Repository
  - Example: `library/ubuntu`
- `digest` (path; required; string): Digest of the blob
  - Example: `sha256:abc123def4567890...`
- `Authorization` (header; required; string): Bearer token with pull or push scope
  - Example: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6...`

**Responses**

- `200`: Blob exists
  - Header `Content-Length` (integer): Size of the blob in bytes
  - Header `Docker-Content-Digest` (string): Digest of the blob
  - Header `Content-Type` (string): MIME type of the blob content
  - Media type: `application/json`
    - Example `blob-check-request`: `{"method":"HEAD","url":"/v2/library/ubuntu/blobs/sha256:abc123def4567890...","headers":{"Authorization":"Bearer <token>","Accept":"*/*"}}`
    - Example `blob-check-response`: `{"status":"200 OK","headers":{"Docker-Content-Digest":"sha256:abc123def4567890...","Content-Length":32654,"Content-Type":"application/octet-stream"}}`
- `401`: Authentication required
- `403`: Access denied
- `404`: Blob not found
- `429`: Too many requests

### `GET /v2/{name}/blobs/uploads/{uuid}`

**Get blob upload status**

Retrieve the current status of an in-progress blob upload.

This is useful for:

- Resuming an interrupted upload
- Determining how many bytes have been accepted so far
- Retrying from the correct offset in chunked uploads

The response includes the `Range` header indicating the byte range received so far, and a `Docker-Upload-UUID` for identifying the session.

**Parameters**

- `name` (path; required; string): Repository Name
  - Example: `library/ubuntu`
- `uuid` (path; required; string): Upload session UUID
  - Example: `abc123`
- `Authorization` (header; required; string)
  - Example: `Bearer eyJhbGciOi...`

**Responses**

- `204`: Upload in progress. No body is returned.
  - Header `Range` (string): Current byte range uploaded (inclusive)
  - Header `Docker-Upload-UUID` (string): UUID of the upload session
  - Header `Location` (string): URL to continue or complete the upload
- `401`: Authentication required
- `403`: Access denied
- `404`: Upload session not found
- `429`: Too many requests

### `PUT /v2/{name}/blobs/uploads/{uuid}`

**Complete blob upload**

Complete the upload of a blob by finalizing an upload session.

This request must include the `digest` query parameter and optionally the last chunk of data. When the registry receives this request, it verifies the digest and stores the blob.

This endpoint supports:

- Monolithic uploads (upload entire blob in this request)
- Finalizing chunked uploads (last chunk plus `digest`)

**Parameters**

- `name` (path; required; string): Repository name
  - Example: `library/ubuntu`
- `uuid` (path; required; string): Upload session UUID returned from the POST request
  - Example: `abc123`
- `digest` (query; required; string): Digest of the uploaded blob
  - Example: `sha256:abcd1234...`
- `Authorization` (header; required; string)
  - Example: `Bearer eyJhbGciOi...`

**Request body**

- Media type: `application/octet-stream`
  - Schema (string; format: binary)
  - Example `layer-upload`: `<binary data not shown>`

**Responses**

- `201`: Upload completed successfully
  - Header `Docker-Content-Digest` (string): Canonical digest of the stored blob
  - Header `Location` (string): URL where the blob is now accessible
  - Header `Content-Length` (integer): Always zero for completed uploads
- `400`: Invalid digest or missing parameters
- `401`: Authentication required
- `403`: Access denied
- `404`: Upload session not found
- `416`: Requested range not satisfiable (if used in chunked mode)
- `429`: Too many requests

### `PATCH /v2/{name}/blobs/uploads/{uuid}`

**Upload blob chunk**

Upload a chunk of a blob to an active upload session.

Use this method for **chunked uploads**, especially for large blobs or when resuming interrupted uploads.

The client sends binary data using `PATCH`, optionally including a `Content-Range` header.

After each chunk is accepted, the registry returns a `202 Accepted` response with:

- `Range`: current byte range stored
- `Docker-Upload-UUID`: identifier for the upload session
- `Location`: URL to continue the upload or finalize with `PUT`

**Parameters**

- `name` (path; required; string): Repository name
  - Example: `library/ubuntu`
- `uuid` (path; required; string): Upload session UUID
  - Example: `abc123`
- `Authorization` (header; required; string)
  - Example: `Bearer eyJhbGciOi...`
- `Content-Range` (header; string): Optional. Byte range of the chunk being sent
  - Example: `bytes 0-65535`

**Request body** (required)

- Media type: `application/octet-stream`
  - Schema (string; format: binary)
  - Example `chunk-0`: `<binary data not shown>`

**Responses**

- `202`: Chunk accepted and stored
  - Header `Location` (string): URL to continue or finalize the upload
  - Header `Range` (string): Byte range uploaded so far (inclusive)
  - Header `Docker-Upload-UUID` (string): Upload session UUID
- `400`: Malformed content or range
- `401`: Authentication required
- `403`: Access denied
- `404`: Upload session not found
- `416`: Range error (e.g., chunk out of order)
- `429`: Too many requests

### `DELETE /v2/{name}/blobs/uploads/{uuid}`

**Cancel blob upload**

Cancel an in-progress blob upload session.

This operation discards any data that has been uploaded and invalidates the upload session.

Use this when:

- An upload fails or is aborted mid-process
- The client wants to clean up unused upload sessions

After cancellation, the UUID is no longer valid and a new `POST` must be issued to restart the upload.

**Parameters**

- `name` (path; required; string): Name of the repository
  - Example: `library/ubuntu`
- `uuid` (path; required; string): Upload session UUID
  - Example: `abc123`
- `Authorization` (header; required; string)
  - Example: `Bearer eyJhbGciOi...`

**Responses**

- `204`: Upload session cancelled successfully. No body is returned.
  - Header `Content-Length` (integer): Always zero
- `401`: Authentication required
- `403`: Access denied
- `404`: Upload session not found
- `429`: Too many requests
