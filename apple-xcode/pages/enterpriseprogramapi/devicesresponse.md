> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/devicesresponse](https://developer.apple.com/documentation/enterpriseprogramapi/devicesresponse)

# DevicesResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of Devices resources.

## Declaration

```
object DevicesResponse
```

## Properties

- `data` — `[Device]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Objects

- [Device](device.md): The data structure that represents a Devices resource.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md)
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): A response that contains a single Devices resource.
