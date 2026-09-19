> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/lomdevicerequestresponse/errorchainitem

# LOMDeviceRequestResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

A dictionary that describes an error chain item.

## Declaration

```
object LOMDeviceRequestResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [LOMDeviceRequestResponse.ResponseListItem](responselistitem.md): A dictionary that describes a response list item.
