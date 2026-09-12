> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setfirmwarepasswordresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/setfirmwarepasswordresponse/errorchainitem)

# SetFirmwarePasswordResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that describes an error chain item.

## Declaration

```
object SetFirmwarePasswordResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [SetFirmwarePasswordResponse.SetFirmwarePassword](setfirmwarepassword-data.dictionary.md): A dictionary that describes the result of a command to change the firmware password.
