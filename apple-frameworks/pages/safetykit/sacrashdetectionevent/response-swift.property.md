> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safetykit/sacrashdetectionevent/response-swift.property

# response (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An indication of whether the system attempted to call an Emergency SOS provider.

## Declaration

```swift
var response: SACrashDetectionEvent.Response { get }
```

## See Also

### Determining the event type

- [SACrashDetectionEvent.Response](response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](date.md): The date and time the crash occurred.
- [location](location.md): The longitude and latitude where the crash detection occurred.

# response (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An indication of whether the system attempted to call an Emergency SOS provider.

## Declaration

```objectivec
@property (nonatomic, readonly) SACrashDetectionEventResponse response;
```

## See Also

### Determining the event type

- [SACrashDetectionEventResponse](response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](date.md): The date and time the crash occurred.
- [location](location.md): The longitude and latitude where the crash detection occurred.
