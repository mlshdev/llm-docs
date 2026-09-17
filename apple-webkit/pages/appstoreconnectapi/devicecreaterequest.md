> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/devicecreaterequest

# DeviceCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The request body you use to create a Device.

## Declaration

```
object DeviceCreateRequest
```

## Properties

- `data` — `DeviceCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [DeviceCreateRequest.Data](devicecreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [Device](device.md): A physical Apple device registered in your developer account for testing, identified by its UDID and device type.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md): A response containing a list of registered devices, without related resources.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): The response body for endpoints that create, read, or modify a single registered device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.
