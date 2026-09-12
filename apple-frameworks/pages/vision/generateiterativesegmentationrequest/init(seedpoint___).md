> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/init(seedpoint:_:)](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/init(seedpoint:_:))

# init(seedPoint:\_:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Instantiates with a seed point.

## Declaration

```swift
init(seedPoint: NormalizedPoint, _ revision: GenerateIterativeSegmentationRequest.Revision? = nil)
```

<a id="discussion"></a>

## Discussion

No result will be produced if the point is outside the `regionOfInterest`. By default, the `regionOfInterest` is the whole image. This point is counted toward the total number of points that can be added.

## See Also

### Creating a request

- [init(seedBox:\_:)](init%28seedbox___%29.md): Instantiates with a seed box.
- [init(seedScribbleBuffer:\_:)](init%28seedscribblebuffer___%29.md): Instantiates with a scribble buffer.
- [GenerateIterativeSegmentationRequest.Result](result.md): The result is returned as a gray mask image. It can be nil if there is nothing to segment.
