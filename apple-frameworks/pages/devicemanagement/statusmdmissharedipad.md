> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmdmissharedipad](https://developer.apple.com/documentation/devicemanagement/statusmdmissharedipad)

# StatusMDMIsSharedIPad

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The status item that reports the device’s Shared iPad state.

## Declaration

```
object StatusMDMIsSharedIPad
```

## Properties

- `mdm.is-shared-ipad` — `boolean` (required): If `true`, the device is a Shared iPad.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, Shared iPad |
| Allowed in device enrollment | iOS, Shared iPad |
| Allowed in user enrollment | iOS, Shared iPad |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, Shared iPad |
| Allowed in user scope | Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "mdm": {
        "is-shared-ipad": false
    }
}
```

## See Also

### MDM protocol items

- [StatusMDMEnrollmentType](statusmdmenrollmenttype.md): The status item that reports the device’s management enrollment type.
- [StatusMDMIsAwaitingConfiguration](statusmdmisawaitingconfiguration.md): The status item that reports the device management awaiting configuration state.
- [StatusMDMIsReturnToService](statusmdmisreturntoservice.md): The status item that reports the device’s return to service with app preservation state.
- [StatusMDMPushMagic](statusmdmpushmagic.md): The status item that reports the device’s push magic value.
- [StatusMDMPushToken](statusmdmpushtoken.md): The status item that reports the device’s push token.
