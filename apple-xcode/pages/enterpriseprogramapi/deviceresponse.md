> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/deviceresponse](https://developer.apple.com/documentation/enterpriseprogramapi/deviceresponse)

# DeviceResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a single Devices resource.

## Declaration

```
object DeviceResponse
```

## Properties

- `data` — `Device` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [Device](device.md): The data structure that represents a Devices resource.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md)
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DevicesResponse](devicesresponse.md): A response that contains a list of Devices resources.
