> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussecuritylockdownmode](https://developer.apple.com/documentation/devicemanagement/statussecuritylockdownmode)

# StatusSecurityLockdownMode

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · watchOS 27.0+

The status item that reports the device’s Lockdown Mode state.

## Declaration

```
object StatusSecurityLockdownMode
```

## Properties

- `security.lockdown-mode` — `boolean` (required): If `true`, indicates that Lockdown Mode is enabled.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, watchOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, watchOS |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "security": {
        "lockdown-mode": false
    }
}
```

## See Also

### Passcode and security items

- [StatusPasscodeCompliance](statuspasscodecompliance.md): The status item that reports the device’s passcode compliance.
- [StatusPasscodeIsPresent](statuspasscodeispresent.md): The status item that reports whether the device has a passcode.
- [StatusDiskManagementFileVaultEnabled](statusdiskmanagementfilevaultenabled.md): The status item that reports whether FileVault is enabled.
- [StatusSecurityCertificateList](statussecuritycertificatelist.md): The status item that lists the device’s managed certificates.
