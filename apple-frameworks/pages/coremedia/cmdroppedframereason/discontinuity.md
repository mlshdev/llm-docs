> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmdroppedframereason/discontinuity](https://developer.apple.com/documentation/coremedia/cmdroppedframereason/discontinuity)

# CMDroppedFrameReason.discontinuity

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An unknown number of frames were dropped.

## Declaration

```swift
case discontinuity
```

<a id="discussion"></a>

## Discussion

When the module providing sample buffers has experienced a discontinuity, and an unknown number of frames have been lost. This condition is typically caused by the system being too busy.
