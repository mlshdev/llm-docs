> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmdmisreturntoservice](https://developer.apple.com/documentation/devicemanagement/statusmdmisreturntoservice)

# StatusMDMIsReturnToService

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The status item that reports the device’s return to service with app preservation state.

## Declaration

```
object StatusMDMIsReturnToService
```

## Properties

- `mdm.is-return-to-service` — `boolean` (required): If `true`, the device is using the return to service with app preservation mode.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, Shared iPad, visionOS |
| Allowed in device enrollment | iOS, Shared iPad, visionOS |
| Allowed in user enrollment | iOS, Shared iPad, visionOS |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, Shared iPad, visionOS |
| Allowed in user scope | Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "mdm": {
        "is-return-to-service": false
    }
}
```

## See Also

### MDM protocol items

- [StatusMDMEnrollmentType](statusmdmenrollmenttype.md): The status item that reports the device’s management enrollment type.
- [StatusMDMIsAwaitingConfiguration](statusmdmisawaitingconfiguration.md): The status item that reports the device management awaiting configuration state.
- [StatusMDMIsSharedIPad](statusmdmissharedipad.md): The status item that reports the device’s Shared iPad state.
- [StatusMDMPushMagic](statusmdmpushmagic.md): The status item that reports the device’s push magic value.
- [StatusMDMPushToken](statusmdmpushtoken.md): The status item that reports the device’s push token.
