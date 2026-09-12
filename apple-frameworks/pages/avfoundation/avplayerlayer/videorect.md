> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer/videorect](https://developer.apple.com/documentation/avfoundation/avplayerlayer/videorect)

# videoRect (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current size and position of the video image that displays within the layer’s bounds.

## Declaration

```swift
var videoRect: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The size and position of a rectangle depends on the aspect ratio of the media (16:9 or 4:3), the layer’s [bounds](../../quartzcore/calayer/bounds.md), and the value of its [videoGravity](videogravity.md) property.

This property is key-value observable.

## See Also

### Configuring the presentation

- [videoGravity](videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

# videoRect (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current size and position of the video image that displays within the layer’s bounds.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect videoRect;
```

<a id="Discussion"></a>

## Discussion

The size and position of a rectangle depends on the aspect ratio of the media (16:9 or 4:3), the layer’s [bounds](../../quartzcore/calayer/bounds.md), and the value of its [videoGravity](videogravity.md) property.

This property is key-value observable.

## See Also

### Configuring the presentation

- [videoGravity](videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.
- [AVLayerVideoGravity](../avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.
