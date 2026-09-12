> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussecuritycertificatelist](https://developer.apple.com/documentation/devicemanagement/statussecuritycertificatelist)

# StatusSecurityCertificateList

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that lists the device’s managed certificates.

## Declaration

```
object StatusSecurityCertificateList
```

## Properties

- `security.certificate.list` — `[StatusSecurityCertificateListCertificateObject]` (required): A list of the device’s managed certificates.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

**New or updated certificate**

Reports a new or updated certificate.

```json
{
    "security": {
        "certificate": {
            "list": [
                {
                    "identifier": "F6A7B8C9-D0E1-2345-FABC-345678901234",
                    "declaration-identifier": "com.example.certificate",
                    "subject-summary": "Example Corp Root CA",
                    "is-identity": false,
                    "data": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
                }
            ]
        }
    }
}
```

**Removed certificate**

Reports a removed certificate.

```json
{
    "security": {
        "certificate": {
            "list": [
                {
                    "identifier": "F6A7B8C9-D0E1-2345-FABC-345678901234",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusSecurityCertificateListCertificateObject](statussecuritycertificatelistcertificateobject.md): A security certificate.

## See Also

### Passcode and security items

- [StatusPasscodeCompliance](statuspasscodecompliance.md): The status item that reports the device’s passcode compliance.
- [StatusPasscodeIsPresent](statuspasscodeispresent.md): The status item that reports whether the device has a passcode.
- [StatusDiskManagementFileVaultEnabled](statusdiskmanagementfilevaultenabled.md): The status item that reports whether FileVault is enabled.
- [StatusSecurityLockdownMode](statussecuritylockdownmode.md): The status item that reports the device’s Lockdown Mode state.
