> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/faceobservation/init(boundingbox:revision:)](https://developer.apple.com/documentation/vision/faceobservation/init(boundingbox:revision:))

# init(boundingBox:revision:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a face observation from its bounding box.

## Declaration

```swift
init(boundingBox: NormalizedRect, revision: DetectFaceRectanglesRequest.Revision? = nil)
```

## Parameters

- `boundingBox`: The bounding box of the detected face.
- `revision`: The revision of the [DetectFaceRectanglesRequest](../detectfacerectanglesrequest.md) that provided the bounding box.

## See Also

### Creating an observation

- [init(\_:)](init%28__%29.md): Creates a face observation.
