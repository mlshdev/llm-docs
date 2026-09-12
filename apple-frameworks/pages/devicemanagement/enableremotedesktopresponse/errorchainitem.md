> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enableremotedesktopresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/enableremotedesktopresponse/errorchainitem)

# EnableRemoteDesktopResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.14.4+

A dictionary that describes an error chain item.

## Declaration

```
object EnableRemoteDesktopResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.
