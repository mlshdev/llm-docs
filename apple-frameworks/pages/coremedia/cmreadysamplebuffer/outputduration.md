> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmreadysamplebuffer/outputduration](https://developer.apple.com/documentation/coremedia/cmreadysamplebuffer/outputduration)

# outputDuration

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The output duration of the sample buffer.

## Declaration

```swift
var outputDuration: CMTime { get }
```

<a id="discussion"></a>

## Discussion

This is the duration of decoded, trimmed and stretched samples. It is calculated as: `(Duration - TrimDurationAtStart - TrimDurationAtEnd) / SpeedMultiplier`.

- Duration is `duration` property of this sample buffer.
- TrimDurationAtStart is the value of [trimDurationAtStart](../cmsamplebuffer/attachmentkey/trimdurationatstart.md) attachment (default 0).
- TrimDurationAtEnd is the value of [trimDurationAtEnd](../cmsamplebuffer/attachmentkey/trimdurationatend.md) attachment (default 0).
- SpeedMultiplier is the value of [speedMultiplier](../cmsamplebuffer/attachmentkey/speedmultiplier.md) attachment (default 1).
