> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/trackobjectrequest/init(detectedobject:_:frameanalysisspacing:)](https://developer.apple.com/documentation/vision/trackobjectrequest/init(detectedobject:_:frameanalysisspacing:))

# init(detectedObject:\_:frameAnalysisSpacing:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates an object tracking request.

## Declaration

```swift
init(detectedObject: any BoundingBoxProviding & VisionObservation, _ revision: TrackObjectRequest.Revision? = nil, frameAnalysisSpacing: CMTime? = nil)
```

## See Also

### Creating a request

- [BoundingBoxProviding](../boundingboxproviding.md): A protocol for objects that have a bounding box.
