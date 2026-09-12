> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/requiresframereordering](https://developer.apple.com/documentation/avfoundation/avassettrack/requiresframereordering)

# requiresFrameReordering (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

> Load the value of [requiresFrameReordering](../avpartialasyncproperty/requiresframereordering.md) asynchronously instead.

## Declaration

```swift
var requiresFrameReordering: Bool { get }
```

# requiresFrameReordering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A Boolean value that indicates whether samples in the track may have different presentation and decode timestamps.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL requiresFrameReordering;
```

## See Also

### Accessing frame-based characteristics

- [nominalFrameRate](nominalframerate.md): Deprecated. The frame rate of the track, in frames per second.
- [minFrameDuration](minframeduration.md): Deprecated. The minimum duration of the track’s frames.
