> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verifyfirmwarepasswordresponse/verifyfirmwarepassword-data.dictionary](https://developer.apple.com/documentation/devicemanagement/verifyfirmwarepasswordresponse/verifyfirmwarepassword-data.dictionary)

# VerifyFirmwarePasswordResponse.VerifyFirmwarePassword

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary containing the results of the command.

## Declaration

```
object VerifyFirmwarePasswordResponse.VerifyFirmwarePassword
```

## Properties

- `PasswordVerified` — `boolean` (required): If ‘true’, the provided password matched the firmware password set for the device.

## See Also

### Objects

- [VerifyFirmwarePasswordResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
