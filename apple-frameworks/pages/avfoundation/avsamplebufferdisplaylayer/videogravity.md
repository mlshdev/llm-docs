> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/videogravity](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/videogravity)

# videoGravity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A value that indicates how the layer displays video within its bounds.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

[AVLayerVideoGravity](../avlayervideogravity.md) defines the supported video gravities. The default value is [resizeAspect](../avlayervideogravity/resizeaspect.md).

## See Also

### Configuring the layer

- [isReadyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [controlTimebase](controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

# videoGravity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A value that indicates how the layer displays video within its bounds.

## Declaration

```objectivec
@property (copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

[AVLayerVideoGravity](../avlayervideogravity.md) defines the supported video gravities. The default value is [AVLayerVideoGravityResizeAspect](../avlayervideogravity/resizeaspect.md).

## See Also

### Configuring the layer

- [readyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the first video frame is ready for display.
- [controlTimebase](controltimebase.md): A timebase that determines how the layer interprets timestamps.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.
