> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betatesterinvitations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betatesterinvitations)

# Send an invitation to a beta tester

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Send or resend an invitation to a beta tester to test a specified app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaTesterInvitations
```

## HTTP Body

Content type: `application/json`

Type: `BetaTesterInvitationCreateRequest`

## Response Codes

- `201` Created — `BetaTesterInvitationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
