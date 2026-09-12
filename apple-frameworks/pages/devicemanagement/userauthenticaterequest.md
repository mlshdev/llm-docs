> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/userauthenticaterequest](https://developer.apple.com/documentation/devicemanagement/userauthenticaterequest)

# UserAuthenticateRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.7+

The user authenticate request details.

## Declaration

```
object UserAuthenticateRequest
```

## Properties

- `DigestResponse` — `string` (required): A string that the client provides in the second [User Authenticate](user-authenticate.md) request after receiving `DigestChallenge` from the server on the first [User Authenticate](user-authenticate.md) request.
- `MessageType` — `string` (required): The message type, which requires a value of `UserAuthenticate`.
  **Allowed values:** `UserAuthenticate`
- `UDID` — `string` (required): The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.
- `UserID` — `string` (required): The local mobile user’s GUID or the network user’s GUID from an Open Directory record.
