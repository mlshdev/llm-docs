> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-userinvitations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-userinvitations)

# Invite a user

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Invite a user with assigned user roles to join your team.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/userInvitations
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
- `429` — `ErrorResponse`:

## See Also

### Sending and Canceling Invitations

- [Cancel a user invitation](delete-v1-userinvitations-_id_.md): Cancel a pending invitation for a user to join your team.
