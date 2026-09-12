> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuspasscodecompliance](https://developer.apple.com/documentation/devicemanagement/statuspasscodecompliance)

# StatusPasscodeCompliance

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports the device’s passcode compliance.

## Declaration

```
object StatusPasscodeCompliance
```

## Properties

- `passcode.is-compliant` — `boolean` (required): If `true`, the passcode is in compliance with all passcode policies set on the device. If `false`, the passcode isn’t in compliance with one or more passcode policies set on the device. When there are no passcode policies on the device, this value `true`.

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
        "is-compliant": true
    }
}
```

## See Also

### Passcode and security items

- [StatusPasscodeIsPresent](statuspasscodeispresent.md): The status item that reports whether the device has a passcode.
- [StatusDiskManagementFileVaultEnabled](statusdiskmanagementfilevaultenabled.md): The status item that reports whether FileVault is enabled.
- [StatusSecurityCertificateList](statussecuritycertificatelist.md): The status item that lists the device’s managed certificates.
- [StatusSecurityLockdownMode](statussecuritylockdownmode.md): The status item that reports the device’s Lockdown Mode state.
