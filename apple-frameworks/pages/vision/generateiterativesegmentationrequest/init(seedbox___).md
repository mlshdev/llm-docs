> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/init(seedbox:_:)](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/init(seedbox:_:))

# init(seedBox:\_:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Instantiates with a seed box.

## Declaration

```swift
init(seedBox: NormalizedRect, _ revision: GenerateIterativeSegmentationRequest.Revision? = nil)
```

<a id="discussion"></a>

## Discussion

No result will be produced if the box is outside the `regionOfInterest`. By default, the `regionOfInterest` is the whole image.

## See Also

### Creating a request

- [init(seedPoint:\_:)](init%28seedpoint___%29.md): Instantiates with a seed point.
- [init(seedScribbleBuffer:\_:)](init%28seedscribblebuffer___%29.md): Instantiates with a scribble buffer.
- [GenerateIterativeSegmentationRequest.Result](result.md): The result is returned as a gray mask image. It can be nil if there is nothing to segment.
