> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmdroppedframereason/framewaslate](https://developer.apple.com/documentation/coremedia/cmdroppedframereason/framewaslate)

# CMDroppedFrameReason.frameWasLate

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The frame was dropped because it was late.

## Declaration

```swift
case frameWasLate
```

<a id="discussion"></a>

## Discussion

When a video capture client has indicated that late video frames should be dropped and the current frame is late. This condition is typically caused by the client’s processing taking too long.
