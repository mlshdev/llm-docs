> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/authenticate](https://developer.apple.com/documentation/devicemanagement/authenticate)

# Authenticate

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

Authenticates a user during MDM payload installation.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm-checkin`

Type: `AuthenticateRequest`

The request object the system sends for the `Authenticate` request.

## Response Codes

- `200` OK:

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)
- [Implementing the simple authentication account-driven enrollment flow](implementing-the-simple-authentication-account-driven-enrollment-flow.md)

<a id="Discussion"></a>

## Discussion

On success, the server needs to respond with a `200 OK` status. Don’t assume that the device has installed the MDM payload at this time because other payloads in the profile may still fail to install. When the device successfully installs the MDM payload, it sends a [Token Update](token-update.md) message.

<a id="Check-in-availability"></a>

### Check-in availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| User channel | N/A |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, macOS, visionOS |

## Topics

### Requests

- [AuthenticateRequest](authenticaterequest.md): The authenticate request details.

## See Also

### Commands

- [User Authenticate](user-authenticate.md): Authenticates a user with a two-step authentication protocol.
- [Check Out](check-out.md): Responds to the removal of the MDM enrollment profile from a device.
- [Get Token](get-token.md): Gets a token from the server.
- [Token Update](token-update.md): Updates the token for a device on the server.
- [Get Bootstrap Token](get-bootstrap-token.md): Gets the bootstrap token from the server.
- [Set Bootstrap Token](set-bootstrap-token.md): Sends the bootstrap token to the server.
- [Return To Service](return-to-service.md): Gets the return-to-service configuration from the server.
