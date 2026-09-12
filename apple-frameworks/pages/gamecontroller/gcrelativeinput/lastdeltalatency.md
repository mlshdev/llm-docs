> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcrelativeinput/lastdeltalatency](https://developer.apple.com/documentation/gamecontroller/gcrelativeinput/lastdeltalatency)

# lastDeltaLatency (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the current and the previous delta values.

## Declaration

```swift
var lastDeltaLatency: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.

# lastDeltaLatency (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The time in seconds between the current and the previous delta values.

## Declaration

```objectivec
@property (readonly) NSTimeInterval lastDeltaLatency;
```

<a id="Discussion"></a>

## Discussion

Use this property as a minimum latency value that may not include latency that accrues on the device or when it transmits the event.

## See Also

### Getting the delta value and timestamp

- [delta](delta.md): The most recent amount of change in values that the profile records.
- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
