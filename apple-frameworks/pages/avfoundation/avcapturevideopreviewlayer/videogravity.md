> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/videogravity](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/videogravity)

# videoGravity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A value that indicates how the layer displays video content within its bounds.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

Options are [resizeAspect](../avlayervideogravity/resizeaspect.md), [resizeAspectFill](../avlayervideogravity/resizeaspectfill.md), and [resize](../avlayervideogravity/resize.md). The default is [resizeAspect](../avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Layer configuration

- [isPreviewing](ispreviewing.md): A Boolean value that indicates whether the layer is rendering video frames from its source.

# videoGravity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A value that indicates how the layer displays video content within its bounds.

## Declaration

```objectivec
@property (copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

Options are [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md), [AVLayerVideoGravityResizeAspectFill](../avlayervideogravity/resizeaspectfill.md), and [AVLayerVideoGravityResize](../avlayervideogravity/resize.md). The default is [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Layer configuration

- [previewing](ispreviewing.md): A Boolean value that indicates whether the layer is rendering video frames from its source.
