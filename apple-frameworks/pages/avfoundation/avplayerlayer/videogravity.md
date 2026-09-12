> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/videogravity](https://developer.apple.com/documentation/avfoundation/avplayerlayer/videogravity)

# videoGravity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A value that specifies how the layer displays the player’s visual content within the layer’s bounds.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

A player layer supports the following video gravity values:

- [resizeAspect](../avlayervideogravity/resizeaspect.md)
- [resizeAspectFill](../avlayervideogravity/resizeaspectfill.md)
- [resize](../avlayervideogravity/resize.md)

The default value is [resizeAspect](../avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Configuring the presentation

- [videoRect](videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

# videoGravity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A value that specifies how the layer displays the player’s visual content within the layer’s bounds.

## Declaration

```objectivec
@property (copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

A player layer supports the following video gravity values:

- [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md)
- [AVLayerVideoGravityResizeAspectFill](../avlayervideogravity/resizeaspectfill.md)
- [AVLayerVideoGravityResize](../avlayervideogravity/resize.md)

The default value is [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Configuring the presentation

- [videoRect](videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.
