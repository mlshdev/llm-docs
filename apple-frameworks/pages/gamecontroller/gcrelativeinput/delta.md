> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcrelativeinput/delta

# delta (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The most recent amount of change in values that the profile records.

## Declaration

```swift
var delta: Float { get }
```

## See Also

### Getting the delta value and timestamp

- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.

# delta (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The most recent amount of change in values that the profile records.

## Declaration

```objectivec
@property (readonly) float delta;
```

## See Also

### Getting the delta value and timestamp

- [deltaDidChangeHandler](deltadidchangehandler.md): The block that the profile calls when the element’s input changes.
- [lastDeltaTimestamp](lastdeltatimestamp.md): A timestamp for when the profile reports the delta value.
- [lastDeltaLatency](lastdeltalatency.md): The time in seconds between the current and the previous delta values.
