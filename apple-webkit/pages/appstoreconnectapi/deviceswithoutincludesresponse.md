> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/deviceswithoutincludesresponse](https://developer.apple.com/documentation/appstoreconnectapi/deviceswithoutincludesresponse)

# DevicesWithoutIncludesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.0+

A response containing a list of registered devices, without related resources.

## Declaration

```
object DevicesWithoutIncludesResponse
```

## Properties

- `data` — `[Device]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [Device](device.md): A physical Apple device registered in your developer account for testing, identified by its UDID and device type.
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): The response body for endpoints that create, read, or modify a single registered device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.
