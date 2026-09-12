> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/videogravity](https://developer.apple.com/documentation/avkit/avplayerview/videogravity)

# videoGravity (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that determines how the player view displays video content within its bounds.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

The video gravity determines how the player view scales or stretches the video content within the player view’s bounds. The player view supports the following video gravity values:

- [resizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md)
- [resizeAspectFill](../../avfoundation/avlayervideogravity/resizeaspectfill.md)
- [resize](../../avfoundation/avlayervideogravity/resize.md)

The default value is [resizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Customizing the video presentation

- [isReadyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoBounds](videobounds.md): The current size and position of the video image that displays within the player view’s bounds.

# videoGravity (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value that determines how the player view displays video content within its bounds.

## Declaration

```objectivec
@property (copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

The video gravity determines how the player view scales or stretches the video content within the player view’s bounds. The player view supports the following video gravity values:

- [AVLayerVideoGravityResizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md)
- [AVLayerVideoGravityResizeAspectFill](../../avfoundation/avlayervideogravity/resizeaspectfill.md)
- [AVLayerVideoGravityResize](../../avfoundation/avlayervideogravity/resize.md)

The default value is [AVLayerVideoGravityResizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

This property is animatable.

## See Also

### Customizing the video presentation

- [readyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoBounds](videobounds.md): The current size and position of the video image that displays within the player view’s bounds.
