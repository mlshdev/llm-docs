> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussoftwareupdatebetaenrollment](https://developer.apple.com/documentation/devicemanagement/statussoftwareupdatebetaenrollment)

# StatusSoftwareUpdateBetaEnrollment

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The status item that reports the device’s enrolled beta program.

## Declaration

```
object StatusSoftwareUpdateBetaEnrollment
```

## Properties

- `softwareupdate.beta-enrollment` — `string` (required): The device’s enrolled beta program name, or an empty string if there’s no enrolled beta program.

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad |
| Allowed in device enrollment | iOS, Shared iPad |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, Shared iPad |
| Allowed in user scope | N/A |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "softwareupdate": {
        "beta-enrollment": ""
    }
}
```

## See Also

### Software update items

- [StatusSoftwareUpdateDeviceID](statussoftwareupdatedeviceid.md): The status item that reports the device’s software update device ID.
- [StatusSoftwareUpdateFailureReason](statussoftwareupdatefailurereason.md): The status item that reports the device’s software update failure reason.
- [StatusSoftwareUpdateInstallReason](statussoftwareupdateinstallreason.md): The status item that reports the device’s pending software update reason.
- [StatusSoftwareUpdateInstallState](statussoftwareupdateinstallstate.md): The status item that reports the device’s software update install state.
- [StatusSoftwareUpdatePendingVersion](statussoftwareupdatependingversion.md): The status item that reports the device’s pending software update version.
