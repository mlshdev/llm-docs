> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusenhancedloggingstatus](https://developer.apple.com/documentation/devicemanagement/statusenhancedloggingstatus)

# StatusEnhancedLoggingStatus

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The status item that reports the device’s enhanced log collection session status.

## Declaration

```
object StatusEnhancedLoggingStatus
```

## Properties

- `enhanced-logging.status` — `string` (required): The enhanced log collection session status, which has the following values:

  - `none`: The device has never run an enhanced log collection session.
  - `waiting-for-consent`: The device is waiting for the user to consent to the enhanced log collection.
  - `collecting`: The enhanced log collection is in progress.
  - `follow-up-question`: The device is waiting for follow-up response from the user.
  - `upload-consent`: The device is waiting for the user to approve upload of the enhanced logs.
  - `uploading`: The device is uploading the enhanced logs.
  - `finished`: The device completed the enhanced log collection session.
  - `failed`: The device failed to complete the enhanced log collection session.
  - `cancelled` \- The device management service cancelled the enhanced log collection session.
  - `declined` \- The user declined the enhanced log collection session.  
  **Allowed values:** `none`, `waiting-for-consent`, `collecting`, `follow-up-question`, `upload-consent`, `uploading`, `finished`, `failed`, `cancelled`, `declined`

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, Shared iPad, tvOS |
| Allowed in user scope | macOS |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "enhanced-logging": {
        "status": "collecting"
    }
}
```

## See Also

### Enhanced logging items

- [StatusEnhancedLoggingAppleCareToken](statusenhancedloggingapplecaretoken.md): The status item that reports the device’s enhanced log collection session AppleCare token.
- [StatusEnhancedLoggingTimestamp](statusenhancedloggingtimestamp.md): The status item that reports the device’s enhanced log collection session timestamp.
