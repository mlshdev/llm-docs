> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/segments](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/segments)

# segments

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The time mappings from the track’s media samples to its timeline.

## Declaration

```swift
var segments: [AVAssetTrackSegment] { get }
```

## See Also

### Accessing track segments

- [segment(forTrackTime:)](segment%28fortracktime_%29.md): Returns a segment whose target time range contains, or is closest to, the specified track time.
