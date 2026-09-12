> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/modify-a-user-account](https://developer.apple.com/documentation/enterpriseprogramapi/modify-a-user-account)

# Modify a User Account

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Change a user’s role, app visibility information, or other account details.

## URL

```http
PATCH https://api.enterprise.developer.apple.com/v1/users/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `UserUpdateRequest`

## Response Codes

- `200` OK — `UserResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- HTTPBody

## See Also

### Modifying and Removing User Accounts

- [Delete a User Account](delete-a-user-account.md): Remove a user from your team.
