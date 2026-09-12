> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/init(seedscribblebuffer:_:)](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/init(seedscribblebuffer:_:))

# init(seedScribbleBuffer:\_:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Instantiates with a scribble buffer.

## Declaration

```swift
init(seedScribbleBuffer: CVReadOnlyPixelBuffer, _ revision: GenerateIterativeSegmentationRequest.Revision? = nil)
```

## See Also

### Creating a request

- [init(seedBox:\_:)](init%28seedbox___%29.md): Instantiates with a seed box.
- [init(seedPoint:\_:)](init%28seedpoint___%29.md): Instantiates with a seed point.
- [GenerateIterativeSegmentationRequest.Result](result.md): The result is returned as a gray mask image. It can be nil if there is nothing to segment.
