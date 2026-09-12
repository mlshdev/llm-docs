> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/deviceupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/deviceupdaterequest)

# DeviceUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The request body you use to update a Device.

## Declaration

```
object DeviceUpdateRequest
```

## Properties

- `data` — `DeviceUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [DeviceUpdateRequest.Data](deviceupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [Device](device.md): A physical Apple device registered in your developer account for testing, identified by its UDID and device type.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md): A response containing a list of registered devices, without related resources.
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceResponse](deviceresponse.md): The response body for endpoints that create, read, or modify a single registered device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.
