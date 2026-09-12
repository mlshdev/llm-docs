> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/returntoservicerequest](https://developer.apple.com/documentation/devicemanagement/returntoservicerequest)

# ReturnToServiceRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The return-to-service request details.

## Declaration

```
object ReturnToServiceRequest
```

## Properties

- `MessageType` — `string` (required): The message type, which requires a value of `ReturnToService`.
  **Allowed values:** `ReturnToService`
- `UDID` — `string` (required): The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.

## See Also

### Requests and responses

- [ReturnToServiceResponse](returntoserviceresponse.md): The return-to-service response details.
