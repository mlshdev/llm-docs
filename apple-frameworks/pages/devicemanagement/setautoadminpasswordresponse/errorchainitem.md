> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setautoadminpasswordresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/setautoadminpasswordresponse/errorchainitem)

# SetAutoAdminPasswordResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+

A dictionary that describes an error chain item.

## Declaration

```
object SetAutoAdminPasswordResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.
