> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmdmpushmagic](https://developer.apple.com/documentation/devicemanagement/statusmdmpushmagic)

# StatusMDMPushMagic

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The status item that reports the device’s push magic value.

## Declaration

```
object StatusMDMPushMagic
```

## Properties

- `mdm.push-magic` — `string` (required): The push magic value that the device expects the MDM server to include in Apple Push Notification service messages.

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
        "push-magic": "3B5D81A2-9F4E-4B7C-A8D6-1E2F3A4B5C6D"
    }
}
```

## See Also

### MDM protocol items

- [StatusMDMEnrollmentType](statusmdmenrollmenttype.md): The status item that reports the device’s management enrollment type.
- [StatusMDMIsAwaitingConfiguration](statusmdmisawaitingconfiguration.md): The status item that reports the device management awaiting configuration state.
- [StatusMDMIsReturnToService](statusmdmisreturntoservice.md): The status item that reports the device’s return to service with app preservation state.
- [StatusMDMIsSharedIPad](statusmdmissharedipad.md): The status item that reports the device’s Shared iPad state.
- [StatusMDMPushToken](statusmdmpushtoken.md): The status item that reports the device’s push token.
