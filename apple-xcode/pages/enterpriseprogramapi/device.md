> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/device](https://developer.apple.com/documentation/enterpriseprogramapi/device)

# Device

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a Devices resource.

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

- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md)
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): A response that contains a single Devices resource.
- [DevicesResponse](devicesresponse.md): A response that contains a list of Devices resources.
