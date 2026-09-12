> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/face/bounds](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/face/bounds)

# bounds

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A normalized rectangle describing the location of the face within its source image.

## Declaration

```swift
let bounds: CGRect
```

## Mentioned In

- [Detecting and grouping faces in images](../../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

The rectangle uses normalized coordinates, where `0.0` is the top-left corner and `1.0` is the bottom-right corner along each axis.
