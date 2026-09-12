> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verifyfirmwarepasswordresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/verifyfirmwarepasswordresponse/errorchainitem)

# VerifyFirmwarePasswordResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that describes an error chain item.

## Declaration

```
object VerifyFirmwarePasswordResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [VerifyFirmwarePasswordResponse.VerifyFirmwarePassword](verifyfirmwarepassword-data.dictionary.md): A dictionary containing the results of the command.
