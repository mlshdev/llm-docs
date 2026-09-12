> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/set-bootstrap-token](https://developer.apple.com/documentation/devicemanagement/set-bootstrap-token)

# Set Bootstrap Token

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.15+ · visionOS 26.0+

Sends the bootstrap token to the server.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm-checkin`

Type: `SetBootstrapTokenRequest`

The request object the system sends for the `SetBootstrapToken` request.

## Response Codes

- `200` OK:

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)
- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

A server that supports this request needs to include a `com.apple.mdm.bootstraptoken` value in the `ServerCapabilities` key of the MDM profile payload to enroll the device.

This request changes or clears a device’s bootstrap token data that the server stores.

Requires a device enrolled using Automated Device Enrollment.

<a id="Check-in-availability"></a>

### Check-in availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, visionOS |
| User channel | N/A |
| Requires supervision | iOS, macOS, visionOS |
| Allowed in user enrollment | N/A |

## Topics

### Requests

- [SetBootstrapTokenRequest](setbootstraptokenrequest.md): The set bootstrap token request details.

## See Also

### Commands

- [Authenticate](authenticate.md): Authenticates a user during MDM payload installation.
- [User Authenticate](user-authenticate.md): Authenticates a user with a two-step authentication protocol.
- [Check Out](check-out.md): Responds to the removal of the MDM enrollment profile from a device.
- [Get Token](get-token.md): Gets a token from the server.
- [Token Update](token-update.md): Updates the token for a device on the server.
- [Get Bootstrap Token](get-bootstrap-token.md): Gets the bootstrap token from the server.
- [Return To Service](return-to-service.md): Gets the return-to-service configuration from the server.
