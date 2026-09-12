> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/check-out](https://developer.apple.com/documentation/devicemanagement/check-out)

# Check Out

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

Responds to the removal of the MDM enrollment profile from a device.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm-checkin`

Type: `CheckOutRequest`

The request object the system sends for the `CheckOut` request.

## Response Codes

- `200` OK:

## Mentioned In

- [Migrating managed devices](migrating-managed-devices.md)

<a id="Discussion"></a>

## Discussion

The system sends this message on a best-effort basis. If the system can’t send the message while removing the MDM profile, it removes the profile and doesn’t resend the message.

On success, the server needs to respond with a `200 OK` status.

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

- [CheckOutRequest](checkoutrequest.md): The check out request details.

## See Also

### Commands

- [Authenticate](authenticate.md): Authenticates a user during MDM payload installation.
- [User Authenticate](user-authenticate.md): Authenticates a user with a two-step authentication protocol.
- [Get Token](get-token.md): Gets a token from the server.
- [Token Update](token-update.md): Updates the token for a device on the server.
- [Get Bootstrap Token](get-bootstrap-token.md): Gets the bootstrap token from the server.
- [Set Bootstrap Token](set-bootstrap-token.md): Sends the bootstrap token to the server.
- [Return To Service](return-to-service.md): Gets the return-to-service configuration from the server.
