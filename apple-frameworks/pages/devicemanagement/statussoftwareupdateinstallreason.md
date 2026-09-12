> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussoftwareupdateinstallreason](https://developer.apple.com/documentation/devicemanagement/statussoftwareupdateinstallreason)

# StatusSoftwareUpdateInstallReason

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 26.0+

The status item that reports the device’s pending software update reason.

## Declaration

```
object StatusSoftwareUpdateInstallReason
```

## Properties

- `softwareupdate.install-reason` — `StatusSoftwareUpdateInstallReasonDictionaryObject` (required): Details about the reason for a pending software update.

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "softwareupdate": {
        "install-reason": {
            "reason": [
                "declaration"
            ],
            "declaration-id": "com.example.softwareupdate-config"
        }
    }
}
```

## Topics

### Objects

- [StatusSoftwareUpdateInstallReasonDictionaryObject](statussoftwareupdateinstallreasondictionaryobject.md): Details about the reason for a pending software update.

## See Also

### Software update items

- [StatusSoftwareUpdateBetaEnrollment](statussoftwareupdatebetaenrollment.md): The status item that reports the device’s enrolled beta program.
- [StatusSoftwareUpdateDeviceID](statussoftwareupdatedeviceid.md): The status item that reports the device’s software update device ID.
- [StatusSoftwareUpdateFailureReason](statussoftwareupdatefailurereason.md): The status item that reports the device’s software update failure reason.
- [StatusSoftwareUpdateInstallState](statussoftwareupdateinstallstate.md): The status item that reports the device’s software update install state.
- [StatusSoftwareUpdatePendingVersion](statussoftwareupdatependingversion.md): The status item that reports the device’s pending software update version.
