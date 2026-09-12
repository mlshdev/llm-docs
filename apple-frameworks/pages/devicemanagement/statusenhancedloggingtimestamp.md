> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusenhancedloggingtimestamp](https://developer.apple.com/documentation/devicemanagement/statusenhancedloggingtimestamp)

# StatusEnhancedLoggingTimestamp

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The status item that reports the device’s enhanced log collection session timestamp.

## Declaration

```
object StatusEnhancedLoggingTimestamp
```

## Properties

- `enhanced-logging.timestamp` — `string`: The enhanced log collection session RFC 3339 timestamp that the device reports for the last session status change. The device returns an empty string if there’s no session status to report.

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
        "timestamp": "2025-05-15T10:30:00Z"
    }
}
```

## See Also

### Enhanced logging items

- [StatusEnhancedLoggingStatus](statusenhancedloggingstatus.md): The status item that reports the device’s enhanced log collection session status.
- [StatusEnhancedLoggingAppleCareToken](statusenhancedloggingapplecaretoken.md): The status item that reports the device’s enhanced log collection session AppleCare token.
