> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/returntoserviceresponse](https://developer.apple.com/documentation/devicemanagement/returntoserviceresponse)

# ReturnToServiceResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The return-to-service response details.

## Declaration

```
object ReturnToServiceResponse
```

## Properties

- `PreserveDataPlan` — `boolean`: If `true`, the device preserves the data plan on an iPhone or iPad with eSIM functionality, if one exists.

  Available: iOS 26.4+ | iPadOS 26.4+  
  **Default:** `false`
- `ReturnToService` — `ReturnToServiceResponse.ReturnToService` (required): A dictionary containing the configuration for return to service.

## Mentioned In

- [Returning a managed device to service](returning-a-managed-device-to-service.md)

## Topics

### Objects

- [ReturnToServiceResponse.ReturnToService](returntoserviceresponse/returntoservice-data.dictionary.md): A dictionary containing the configuration for return to service.

## See Also

### Requests and responses

- [ReturnToServiceRequest](returntoservicerequest.md): The return-to-service request details.
