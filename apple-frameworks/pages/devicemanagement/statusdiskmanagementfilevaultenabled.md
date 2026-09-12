> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdiskmanagementfilevaultenabled](https://developer.apple.com/documentation/devicemanagement/statusdiskmanagementfilevaultenabled)

# StatusDiskManagementFileVaultEnabled

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

The status item that reports whether FileVault is enabled.

## Declaration

```
object StatusDiskManagementFileVaultEnabled
```

## Properties

- `diskmanagement.filevault.enabled` — `boolean` (required): A Boolean value that specifies the File Vault enabled status on the device.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | macOS |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "diskmanagement": {
        "filevault": {
            "enabled": true
        }
    }
}
```

## See Also

### Passcode and security items

- [StatusPasscodeCompliance](statuspasscodecompliance.md): The status item that reports the device’s passcode compliance.
- [StatusPasscodeIsPresent](statuspasscodeispresent.md): The status item that reports whether the device has a passcode.
- [StatusSecurityCertificateList](statussecuritycertificatelist.md): The status item that lists the device’s managed certificates.
- [StatusSecurityLockdownMode](statussecuritylockdownmode.md): The status item that reports the device’s Lockdown Mode state.
