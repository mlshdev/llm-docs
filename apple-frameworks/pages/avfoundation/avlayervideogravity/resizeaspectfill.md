> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avlayervideogravity/resizeaspectfill](https://developer.apple.com/documentation/avfoundation/avlayervideogravity/resizeaspectfill)

# resizeAspectFill (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video preserves its aspect ratio and fills the layer’s bounds.

## Declaration

```swift
static let resizeAspectFill: AVLayerVideoGravity
```

<a id="Discussion"></a>

## Discussion

This gravity value may crop the video image along its horizontal or vertical dimension.

## See Also

### Video gravities

- [resize](resize.md): The video stretches to fill the layer’s bounds.
- [resizeAspect](resizeaspect.md): The video preserves its aspect ratio and fits it within the layer’s bounds.

# AVLayerVideoGravityResizeAspectFill (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video preserves its aspect ratio and fills the layer’s bounds.

## Declaration

```objectivec
extern AVLayerVideoGravity const AVLayerVideoGravityResizeAspectFill;
```

<a id="Discussion"></a>

## Discussion

This gravity value may crop the video image along its horizontal or vertical dimension.

## See Also

### Video gravities

- [AVLayerVideoGravityResize](resize.md): The video stretches to fill the layer’s bounds.
- [AVLayerVideoGravityResizeAspect](resizeaspect.md): The video preserves its aspect ratio and fits it within the layer’s bounds.
