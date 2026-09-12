> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/device](https://developer.apple.com/documentation/appstoreconnectapi/device)

# Device

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.1+

A physical Apple device registered in your developer account for testing, identified by its UDID and device type.

## Declaration

```
object Device
```

## Properties

- `attributes` — `Device.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `devices`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [Device.Attributes](device/attributes-data.dictionary.md): Attributes that describe a Devices resource.

## See Also

### Objects

- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md): A response containing a list of registered devices, without related resources.
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): The response body for endpoints that create, read, or modify a single registered device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.
