> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcompositiontrack/segments

# segments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time mappings from the track’s media samples to its timeline.

## Declaration

```swift
var segments: [AVCompositionTrackSegment] { get }
```

## See Also

### Accessing track segments

- [segment(forTrackTime:)](segment%28fortracktime_%29.md): Returns a segment whose target time range contains, or is closest to, the specified track time.

# segments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The time mappings from the track’s media samples to its timeline.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVCompositionTrackSegment *> * segments;
```

## See Also

### Accessing track segments

- [segmentForTrackTime:](segment%28fortracktime_%29.md): Returns a segment whose target time range contains, or is closest to, the specified track time.
