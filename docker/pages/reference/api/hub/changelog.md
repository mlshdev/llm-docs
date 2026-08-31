> Commit-pinned source for Docker main: [content/reference/api/hub/changelog.md](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/content/reference/api/hub/changelog.md)

# Docker Hub API changelog

Here you can learn about the latest changes, new features, bug fixes, and known
issues for Docker Service APIs.

***

## 2026-08-27

### Updates

- Document organization access token (OAT) support for
  [repository management](https://docs.docker.com/reference/api/hub/latest/#tag/repositories)
  endpoints, the scope-dependent behavior of
  [List repositories](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/listNamespaceRepositories),
  and legacy paths that are OAT unsupported.

***

## 2025-11-21

### Updates

- Add missing `expires_at` fields on [PAT management](https://docs.docker.com/reference/api/hub/latest/#tag/access-tokens) endpoints.

## 2025-09-25

### Updates

- Fix [Assign repository group](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/CreateRepositoryGroup) endpoints request/response

***

## 2025-09-19

### New

- Add [Create repository](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/CreateRepository) endpoints for a given `namespace`.
- Add [Get repository](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/GetRepository) endpoints for a given `namespace`.
- Add [Check repository](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/CheckRepository) endpoints for a given `namespace`.

### Deprecations

- [Deprecate POST /v2/repositories](https://docs.docker.com/reference/api/hub/deprecated/#deprecate-legacy-createrepository)
- [Deprecate POST /v2/repositories/{namespace}](https://docs.docker.com/reference/api/hub/deprecated/#deprecate-legacy-createrepository)
- [Deprecate GET /v2/repositories/{namespace}/{repository}](https://docs.docker.com/reference/api/hub/deprecated/#deprecate-legacy-getrepository)
- [Deprecate HEAD /v2/repositories/{namespace}/{repository}](https://docs.docker.com/reference/api/hub/deprecated/#deprecate-legacy-getrepository)

***

## 2025-07-29

### New

- Add [Update repository immutable tags settings](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/UpdateRepositoryImmutableTags) endpoints for a given `namespace` and `repository`.
- Add [Verify repository immutable tags](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/VerifyRepositoryImmutableTags) endpoints for a given `namespace` and `repository`.

***

## 2025-06-27

### New

- Add [List repositories](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/listNamespaceRepositories) endpoints for a given `namespace`.

### Deprecations

- [Deprecate /v2/repositories/{namespace}](https://docs.docker.com/reference/api/hub/deprecated/#deprecate-legacy-listnamespacerepositories)

***

## 2025-03-25

### New

- Add [APIs](https://docs.docker.com/reference/api/hub/latest/#tag/org-access-tokens) for organization access token (OATs) management.

***

## 2025-03-18

### New

- Add access to [audit logs](https://docs.docker.com/reference/api/hub/latest/#tag/audit-logs) for org
  access tokens.
