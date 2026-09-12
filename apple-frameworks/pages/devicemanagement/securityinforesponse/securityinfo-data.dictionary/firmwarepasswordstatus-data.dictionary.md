> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/firmwarepasswordstatus-data.dictionary](https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/firmwarepasswordstatus-data.dictionary)

# SecurityInfoResponse.SecurityInfo.FirmwarePasswordStatus

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that contains the status of the EFI firmware password.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.FirmwarePasswordStatus
```

## Properties

- `AllowOroms` — `boolean`: If `true`, enable ROMs.
- `ChangePending` — `boolean`: If `true`, a firmware password change is pending. A device restart is necessary for this change to take effect. Until then, additional attempts to change the password fail.

  > **Note**

  >  If `true`, the other values show the current state of the device, not the state after a restart.
- `PasswordExists` — `boolean`: If `true`, the device has an EFI firmware password.

## See Also

### Objects

- [SecurityInfoResponse.SecurityInfo.FirewallSettings](firewallsettings-data.dictionary.md): A dictionary that contains the firewall settings.
- [SecurityInfoResponse.SecurityInfo.ManagementStatus](managementstatus-data.dictionary.md): A dictionary that contains the status of the device’s MDM enrollment.
- [SecurityInfoResponse.SecurityInfo.SecureBoot](secureboot-data.dictionary.md): The response object for the secure boot settings.
