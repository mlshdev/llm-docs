> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuspasscodeispresent](https://developer.apple.com/documentation/devicemanagement/statuspasscodeispresent)

# StatusPasscodeIsPresent

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports whether the device has a passcode.

## Declaration

```
object StatusPasscodeIsPresent
```

## Properties

- `passcode.is-present` — `boolean` (required): If `true`, a passcode is present on the device. If `false`, a passcode isn’t present on the device. When a passcode is present, the specific attributes of the passcode, such as length or number of complex characters, aren’t reported. Instead, use the `passcode.is-compliant` status item to verify that the passcode complies with all passcode policies set on the device.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, Shared iPad, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, visionOS |
| Allowed in user enrollment | iOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, Shared iPad, visionOS, watchOS |
| Allowed in system scope | iOS, Shared iPad, visionOS, watchOS |
| Allowed in user scope | Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "passcode": {
        "is-present": true
    }
}
```

## See Also

### Passcode and security items

- [StatusPasscodeCompliance](statuspasscodecompliance.md): The status item that reports the device’s passcode compliance.
- [StatusDiskManagementFileVaultEnabled](statusdiskmanagementfilevaultenabled.md): The status item that reports whether FileVault is enabled.
- [StatusSecurityCertificateList](statussecuritycertificatelist.md): The status item that lists the device’s managed certificates.
- [StatusSecurityLockdownMode](statussecuritylockdownmode.md): The status item that reports the device’s Lockdown Mode state.
