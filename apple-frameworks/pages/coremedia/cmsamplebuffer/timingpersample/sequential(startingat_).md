> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/timingpersample/sequential(startingat:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/timingpersample/sequential(startingat:))

# CMSampleBuffer.TimingPerSample.sequential(startingAt:)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

All samples are adjacent to each other and have the same duration.

## Declaration

```swift
case sequential(startingAt: CMSampleTimingInfo)
```

<a id="discussion"></a>

## Discussion

Only the fist sample will have the decode time specified here. Samples must have the same decode and presentation order.
