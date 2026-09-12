> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectionevent/location](https://developer.apple.com/documentation/safetykit/sacrashdetectionevent/location)

# location (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The longitude and latitude where the crash detection occurred.

## Declaration

```swift
var location: CLLocation? { get }
```

## See Also

### Determining the event type

- [SACrashDetectionEvent.Response](response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](date.md): The date and time the crash occurred.
- [response](response-swift.property.md): An indication of whether the system attempted to call an Emergency SOS provider.

# location (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The longitude and latitude where the crash detection occurred.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CLLocation * location;
```

## See Also

### Determining the event type

- [SACrashDetectionEventResponse](response-swift.enum.md): An enumeration that defines possible emergency responses to a Crash Detection event.
- [date](date.md): The date and time the crash occurred.
- [response](response-swift.property.md): An indication of whether the system attempted to call an Emergency SOS provider.
