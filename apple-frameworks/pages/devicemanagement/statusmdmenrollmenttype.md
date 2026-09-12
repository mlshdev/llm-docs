> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmdmenrollmenttype](https://developer.apple.com/documentation/devicemanagement/statusmdmenrollmenttype)

# StatusMDMEnrollmentType

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The status item that reports the device’s management enrollment type.

## Declaration

```
object StatusMDMEnrollmentType
```

## Properties

- `mdm.enrollment-type` — `string` (required): The device management enrollment type that indicates how the device is enrolled, which has the following possible values:

  - `none`: Device isn’t enrolled
  - `supervised`: Device is supervised
  - `device`: Device enrollment
  - `user`: User enrollment  
  **Allowed values:** `none`, `supervised`, `device`, `user`

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "mdm": {
        "enrollment-type": "supervised"
    }
}
```

## See Also

### MDM protocol items

- [StatusMDMIsAwaitingConfiguration](statusmdmisawaitingconfiguration.md): The status item that reports the device management awaiting configuration state.
- [StatusMDMIsReturnToService](statusmdmisreturntoservice.md): The status item that reports the device’s return to service with app preservation state.
- [StatusMDMIsSharedIPad](statusmdmissharedipad.md): The status item that reports the device’s Shared iPad state.
- [StatusMDMPushMagic](statusmdmpushmagic.md): The status item that reports the device’s push magic value.
- [StatusMDMPushToken](statusmdmpushtoken.md): The status item that reports the device’s push token.
