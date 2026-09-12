> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussoftwareupdatedeviceid](https://developer.apple.com/documentation/devicemanagement/statussoftwareupdatedeviceid)

# StatusSoftwareUpdateDeviceID

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.4+ · visionOS 26.4+

The status item that reports the device’s software update device ID.

## Declaration

```
object StatusSoftwareUpdateDeviceID
```

## Properties

- `softwareupdate.device-id` — `string` (required): The device identifier to use when looking up available software updates via `https://gdmf.apple.com/v2/pmv`.

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
        "device-id": "iPhone14,3"
    }
}
```

## See Also

### Software update items

- [StatusSoftwareUpdateBetaEnrollment](statussoftwareupdatebetaenrollment.md): The status item that reports the device’s enrolled beta program.
- [StatusSoftwareUpdateFailureReason](statussoftwareupdatefailurereason.md): The status item that reports the device’s software update failure reason.
- [StatusSoftwareUpdateInstallReason](statussoftwareupdateinstallreason.md): The status item that reports the device’s pending software update reason.
- [StatusSoftwareUpdateInstallState](statussoftwareupdateinstallstate.md): The status item that reports the device’s software update install state.
- [StatusSoftwareUpdatePendingVersion](statussoftwareupdatependingversion.md): The status item that reports the device’s pending software update version.
