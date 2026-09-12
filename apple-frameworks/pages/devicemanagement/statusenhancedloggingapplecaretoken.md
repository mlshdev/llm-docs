> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusenhancedloggingapplecaretoken](https://developer.apple.com/documentation/devicemanagement/statusenhancedloggingapplecaretoken)

# StatusEnhancedLoggingAppleCareToken

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The status item that reports the device’s enhanced log collection session AppleCare token.

## Declaration

```
object StatusEnhancedLoggingAppleCareToken
```

## Properties

- `enhanced-logging.applecare-token` — `string`: The current enhanced log collection session AppleCare token. The device returns an empty string if there’s no session status to report.

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
        "applecare-token": "ABC123DEF456"
    }
}
```

## See Also

### Enhanced logging items

- [StatusEnhancedLoggingStatus](statusenhancedloggingstatus.md): The status item that reports the device’s enhanced log collection session status.
- [StatusEnhancedLoggingTimestamp](statusenhancedloggingtimestamp.md): The status item that reports the device’s enhanced log collection session timestamp.
