> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussoftwareupdateinstallstate](https://developer.apple.com/documentation/devicemanagement/statussoftwareupdateinstallstate)

# StatusSoftwareUpdateInstallState

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 26.0+

The status item that reports the device’s software update install state.

## Declaration

```
object StatusSoftwareUpdateInstallState
```

## Properties

- `softwareupdate.install-state` — `string` (required): The software update install status, which has the following values:

  - `none`: There’s no software update pending, and any previous software update succeeded.
  - `downloading`: The system is downloading data for a software update.
  - `prepared`: The system prepared the software update and it’s ready for installation.
  - `installing`: The system is installing the software update.
  - `failed`: The software update failed.  
  **Allowed values:** `none`, `downloading`, `prepared`, `installing`, `failed`

## Mentioned In

- [Phases of software update enforcement](phases-of-software-update-enforcement.md)
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
        "install-state": "none"
    }
}
```

## See Also

### Software update items

- [StatusSoftwareUpdateBetaEnrollment](statussoftwareupdatebetaenrollment.md): The status item that reports the device’s enrolled beta program.
- [StatusSoftwareUpdateDeviceID](statussoftwareupdatedeviceid.md): The status item that reports the device’s software update device ID.
- [StatusSoftwareUpdateFailureReason](statussoftwareupdatefailurereason.md): The status item that reports the device’s software update failure reason.
- [StatusSoftwareUpdateInstallReason](statussoftwareupdateinstallreason.md): The status item that reports the device’s pending software update reason.
- [StatusSoftwareUpdatePendingVersion](statussoftwareupdatependingversion.md): The status item that reports the device’s pending software update version.
