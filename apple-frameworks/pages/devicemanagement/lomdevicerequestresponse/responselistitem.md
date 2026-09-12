> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lomdevicerequestresponse/responselistitem](https://developer.apple.com/documentation/devicemanagement/lomdevicerequestresponse/responselistitem)

# LOMDeviceRequestResponse.ResponseListItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

A dictionary that describes a response list item.

## Declaration

```
object LOMDeviceRequestResponse.ResponseListItem
```

## Properties

- `DeviceRequestReturnError` — `string`: If present, a description of the error for a failed request.
- `DeviceRequestSuccess` — `boolean` (required): If `true`, the request was successful.
- `DeviceRequestUUID` — `string` (required): The unique identifier of the request for this response list item.

## See Also

### Objects

- [LOMDeviceRequestResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
