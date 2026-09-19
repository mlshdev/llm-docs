> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/hostclocktime

# hostClockTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A host clock time to use to begin playback.

## Declaration

```swift
var hostClockTime: CMTime { get }
```

## See Also

### Accessing command details

- [rate](rate.md): A rate to use when starting playback.
- [itemTime](itemtime.md): A time in the item timeline to use to begin playback.

# hostClockTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A host clock time to use to begin playback.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime hostClockTime;
```

## See Also

### Accessing command details

- [rate](rate.md): A rate to use when starting playback.
- [itemTime](itemtime.md): A time in the item timeline to use to begin playback.
