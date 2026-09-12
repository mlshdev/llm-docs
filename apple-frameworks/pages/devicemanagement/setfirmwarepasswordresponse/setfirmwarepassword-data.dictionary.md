> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setfirmwarepasswordresponse/setfirmwarepassword-data.dictionary](https://developer.apple.com/documentation/devicemanagement/setfirmwarepasswordresponse/setfirmwarepassword-data.dictionary)

# SetFirmwarePasswordResponse.SetFirmwarePassword

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that describes the result of a command to change the firmware password.

## Declaration

```
object SetFirmwarePasswordResponse.SetFirmwarePassword
```

## Properties

- `PasswordChanged` — `boolean` (required): If `true`, the password change succeeded.

## See Also

### Objects

- [SetFirmwarePasswordResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
