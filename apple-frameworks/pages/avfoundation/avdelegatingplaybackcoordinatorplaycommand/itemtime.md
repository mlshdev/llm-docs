> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaycommand/itemtime

# itemTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A time in the item timeline to use to begin playback.

## Declaration

```swift
var itemTime: CMTime { get }
```

## See Also

### Accessing command details

- [rate](rate.md): A rate to use when starting playback.
- [hostClockTime](hostclocktime.md): A host clock time to use to begin playback.

# itemTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A time in the item timeline to use to begin playback.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime itemTime;
```

## See Also

### Accessing command details

- [rate](rate.md): A rate to use when starting playback.
- [hostClockTime](hostclocktime.md): A host clock time to use to begin playback.
