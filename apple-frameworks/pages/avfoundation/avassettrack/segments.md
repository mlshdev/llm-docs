> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/segments](https://developer.apple.com/documentation/avfoundation/avassettrack/segments)

# segments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The time mappings from the track’s media samples to its timeline.

> Load the value of [segments](../avpartialasyncproperty/segments.md) asynchronously instead.

## Declaration

```swift
var segments: [AVAssetTrackSegment] { get }
```

# segments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The time mappings from the track’s media samples to its timeline.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVAssetTrackSegment *> * segments;
```

## See Also

### Accessing track segments

- [segmentForTrackTime:](segment%28fortracktime_%29.md): Deprecated. Retrieves a segment with a target time range that contains, or is closest to, the specified track time.
