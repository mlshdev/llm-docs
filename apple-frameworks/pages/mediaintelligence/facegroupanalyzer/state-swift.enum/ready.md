> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/state-swift.enum/ready](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/state-swift.enum/ready)

# FaceGroupAnalyzer.State.ready

**Framework:** Media Intelligence  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A state that indicates all faces have up-to-date cluster assignments.

## Declaration

```swift
case ready
```

## Mentioned In

- [Detecting and grouping faces in images](../../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

The analyzer’s data is up to date.

## See Also

### States

- [FaceGroupAnalyzer.State.stale](stale.md): A state that indicates new faces need cluster assignments.
- [FaceGroupAnalyzer.State.updating](updating.md): A state that indicates the clustering algorithm is running.
