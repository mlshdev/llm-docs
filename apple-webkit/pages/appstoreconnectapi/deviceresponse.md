> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/deviceresponse](https://developer.apple.com/documentation/appstoreconnectapi/deviceresponse)

# DeviceResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

The response body for endpoints that create, read, or modify a single registered device.

## Declaration

```
object DeviceResponse
```

## Properties

- `data` — `Device` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Related Documentation

- [Register a new device](post-v1-devices.md): Register a new device for app development.

### Objects

- [Device](device.md): A physical Apple device registered in your developer account for testing, identified by its UDID and device type.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md): A response containing a list of registered devices, without related resources.
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.
