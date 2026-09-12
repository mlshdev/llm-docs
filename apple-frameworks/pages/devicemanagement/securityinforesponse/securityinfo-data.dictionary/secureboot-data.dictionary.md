> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/secureboot-data.dictionary](https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/secureboot-data.dictionary)

# SecurityInfoResponse.SecurityInfo.SecureBoot

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15+

The response object for the secure boot settings.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.SecureBoot
```

## Properties

- `ExternalBootLevel` — `string`: The device’s external boot level, which indicates whether it allows booting from an external device, disallows it, or doesn’t support it.
  **Allowed values:** `allowed`, `disallowed`, `not supported`
- `ReducedSecurity` — `[SecurityInfoResponse.SecurityInfo.SecureBoot.ReducedSecurity]`: Reports which security features the user disables in `recoveryOS`. This property is only present for a Mac with Apple silicon when `SecureBootLevel` is `medium`.

  Available: macOS 11+
- `SecureBootLevel` — `string`: The security level for the bootable operating system versions.
  **Allowed values:** `off`, `medium`, `full`, `not supported`

## Topics

### Objects

- [SecurityInfoResponse.SecurityInfo.SecureBoot.ReducedSecurity](secureboot-data.dictionary/reducedsecurity-data.dictionary.md): Reports which security features the user disables in `recoveryOS`. This property is only present for a Mac with Apple silicon when `SecureBootLevel` is `medium`.

## See Also

### Objects

- [SecurityInfoResponse.SecurityInfo.FirewallSettings](firewallsettings-data.dictionary.md): A dictionary that contains the firewall settings.
- [SecurityInfoResponse.SecurityInfo.FirmwarePasswordStatus](firmwarepasswordstatus-data.dictionary.md): A dictionary that contains the status of the EFI firmware password.
- [SecurityInfoResponse.SecurityInfo.ManagementStatus](managementstatus-data.dictionary.md): A dictionary that contains the status of the device’s MDM enrollment.
