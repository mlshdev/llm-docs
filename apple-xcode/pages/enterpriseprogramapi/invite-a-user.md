> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/invite-a-user](https://developer.apple.com/documentation/enterpriseprogramapi/invite-a-user)

# Invite a User

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Invite a user with assigned user roles to join your team.

## URL

```http
POST https://api.enterprise.developer.apple.com/v1/userInvitations
```

## HTTP Body

Content type: `application/json`

Type: `UserInvitationCreateRequest`

## Response Codes

- `201` Created — `UserInvitationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- HTTPBody

## See Also

### Sending and Canceling Invitations

- [Cancel a User Invitation](cancel-a-user-invitation.md): Cancel a pending invitation for a user to join your team.
