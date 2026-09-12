> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/zoomfactor](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/zoomfactor)

# zoomFactor

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

The zoom factor for the live video in the camera.

## Declaration

```swift
@MainActor var zoomFactor: Double { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a value between the [minZoomFactor](minzoomfactor.md) and [maxZoomFactor](maxzoomfactor.md) properties.

## See Also

### Zooming

- [minZoomFactor](minzoomfactor.md): The minimum zoom factor that the camera supports.
- [maxZoomFactor](maxzoomfactor.md): The maximum zoom factor that the camera supports.
