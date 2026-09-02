> Commit-pinned source for Docker main: [content/reference/api/registry/latest.md](https://github.com/docker/docs/blob/ff96ad1711065cf2e9c3f1d701dad04775834f70/content/reference/api/registry/latest.md)

# Supported registry API for Docker Hub

## API specification

- Base URL: `https://registry-1.docker.io`

Docker Hub is an OCI-compliant registry, which means it adheres to the open
standards defined by the Open Container Initiative (OCI) for distributing
container images. This ensures compatibility with a wide range of tools and
platforms in the container ecosystem.

This reference documents the Docker Hub-supported subset of the Registry HTTP API V2.
It focuses on pulling, pushing, and deleting images. It does not cover the full OCI Distribution Specification.

For the complete OCI specification, see [OCI Distribution Specification](https://github.com/opencontainers/distribution-spec).

## Endpoints

### `GET /v2/{name}/manifests/{reference}`

**Get image manifest**

Fetch the manifest identified by `name` and `reference`, where `reference` can be a tag (e.g., `latest`) or a digest (e.g., `sha256:...`).

The manifest contains metadata about the image, including configuration and layer digests. It is required for pulling images from the registry.

This endpoint requires authentication. Use the `Authorization: Bearer <token>` header.

**Parameters**

- `name` (path, required): Name of the target repository
- `reference` (path, required): Tag or digest of the target manifest
- `Authorization` (header, required): RFC7235-compliant authorization header (e.g., `Bearer <token>`).
- `Accept` (header): Media type(s) the client supports for the manifest. The registry supports the following media types: - application/vnd.docker.distribution.manifest.v2+json - application/vnd.docker.distribution.manifest.list.v2+json - application/vnd.oci.image.manifest.v1+json - application/vnd.oci.image.index.v1+json

**Responses**

- `200`: Manifest fetched successfully.
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

- `name` (path, required): Name of the target Repository
- `reference` (path, required): Tag or digest to associate with the uploaded Manifest
- `Authorization` (header, required): RFC7235-compliant authorization header (e.g., `Bearer <token>`).
- `Content-Type` (header, required): Media type of the manifest being uploaded.

**Request body**

**Responses**

- `201`: Manifest created successfully.
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

- `name` (path, required): Name of the repository
- `reference` (path, required): Digest of the manifest to delete (e.g., `sha256:...`)
- `Authorization` (header, required): Bearer token with `delete` access

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

- `name` (path, required): Name of the Repository
- `reference` (path, required): Tag or digest to check
- `Authorization` (header, required): Bearer token for authentication
- `Accept` (header): Media type of the manifest to check. The response will match one of the accepted types.

**Responses**

- `200`: Manifest exists.
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

- `name` (path, required): Name of the target repository
- `mount` (query): Digest of the blob to mount from another repository
- `from` (query): Source repository to mount the blob from
- `Authorization` (header, required): Bearer token for authentication with `push` scope

**Responses**

- `201`: Blob successfully mounted from another repository.
- `202`: Upload initiated successfully (fallback if mount fails).
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

- `name` (path, required): Repository Name
- `digest` (path, required): Digest of the Blob
- `Authorization` (header, required): Bearer token with pull scope

**Responses**

- `200`: Blob content returned directly
- `307`: Temporary redirect to blob location
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

- `name` (path, required): Name of the Repository
- `digest` (path, required): Digest of the blob
- `Authorization` (header, required): Bearer token with pull or push scope

**Responses**

- `200`: Blob exists
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

- `name` (path, required): Repository Name
- `uuid` (path, required): Upload session UUID
- `Authorization` (header, required)

**Responses**

- `204`: Upload in progress. No body is returned.
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

- `name` (path, required): Repository name
- `uuid` (path, required): Upload session UUID returned from the POST request
- `digest` (query, required): Digest of the uploaded blob
- `Authorization` (header, required)

**Request body**

**Responses**

- `201`: Upload completed successfully
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

- `name` (path, required): Repository name
- `uuid` (path, required): Upload session UUID
- `Authorization` (header, required)
- `Content-Range` (header): Optional. Byte range of the chunk being sent

**Request body**

**Responses**

- `202`: Chunk accepted and stored
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

- `name` (path, required): Name of the repository
- `uuid` (path, required): Upload session UUID
- `Authorization` (header, required)

**Responses**

- `204`: Upload session cancelled successfully. No body is returned.
- `401`: Authentication required
- `403`: Access denied
- `404`: Upload session not found
- `429`: Too many requests
