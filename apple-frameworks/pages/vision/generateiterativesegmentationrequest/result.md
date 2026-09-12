> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/result](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/result)

# GenerateIterativeSegmentationRequest.Result

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The result is returned as a gray mask image. It can be nil if there is nothing to segment.

## Declaration

```swift
typealias Result = PixelBufferObservation?
```

## See Also

### Creating a request

- [init(seedBox:\_:)](init%28seedbox___%29.md): Instantiates with a seed box.
- [init(seedPoint:\_:)](init%28seedpoint___%29.md): Instantiates with a seed point.
- [init(seedScribbleBuffer:\_:)](init%28seedscribblebuffer___%29.md): Instantiates with a scribble buffer.
