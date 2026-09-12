> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsession/metaldevice](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession/metaldevice)

# metalDevice

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The preferred device to use for any Metal-based processing performed by the RAW Processing Extension.

## Declaration

```swift
var metalDevice: (any MTLDevice)? { get set }
```

<a id="discussion"></a>

## Discussion

Setting a value of `nil` indicates that the client has no preferred Metal device. Getting `nil` indicates that no preferred device was set or that the processor does not use Metal for frame processing.
