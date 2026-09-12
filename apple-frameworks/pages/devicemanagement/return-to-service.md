> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/return-to-service](https://developer.apple.com/documentation/devicemanagement/return-to-service)

# Return To Service

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Gets the return-to-service configuration from the server.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm-checkin`

Type: `ReturnToServiceRequest`

The request object the system sends for the `ReturnToService` request.

## Response Codes

- `200` OK — `ReturnToServiceResponse`: The response object the server returns for the `ReturnToService` request.

## Mentioned In

- [Returning a managed device to service](returning-a-managed-device-to-service.md)

<a id="Discussion"></a>

## Discussion

The device sends the `ReturnToService` message when the user triggers a return to service, or when the device’s idle timeout expires. The device only sends this message when it’s in the return-to-service mode that its Automated Device Enrollment profile sets.

<a id="Check-in-availability"></a>

### Check-in availability

|  |  |
| --- | --- |
| Device channel | iOS, visionOS |
| User channel | N/A |
| Requires supervision | iOS, visionOS |
| Allowed in user enrollment | N/A |

## Topics

### Requests and responses

- [ReturnToServiceRequest](returntoservicerequest.md): The return-to-service request details.
- [ReturnToServiceResponse](returntoserviceresponse.md): The return-to-service response details.

## See Also

### Commands

- [Authenticate](authenticate.md): Authenticates a user during MDM payload installation.
- [User Authenticate](user-authenticate.md): Authenticates a user with a two-step authentication protocol.
- [Check Out](check-out.md): Responds to the removal of the MDM enrollment profile from a device.
- [Get Token](get-token.md): Gets a token from the server.
- [Token Update](token-update.md): Updates the token for a device on the server.
- [Get Bootstrap Token](get-bootstrap-token.md): Gets the bootstrap token from the server.
- [Set Bootstrap Token](set-bootstrap-token.md): Sends the bootstrap token to the server.
