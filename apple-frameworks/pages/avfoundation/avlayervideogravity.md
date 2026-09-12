> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avlayervideogravity](https://developer.apple.com/documentation/avfoundation/avlayervideogravity)

# AVLayerVideoGravity (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

## Declaration

```swift
struct AVLayerVideoGravity
```

## Topics

### Video gravities

- [resize](avlayervideogravity/resize.md): The video stretches to fill the layer’s bounds.
- [resizeAspect](avlayervideogravity/resizeaspect.md): The video preserves its aspect ratio and fits it within the layer’s bounds.
- [resizeAspectFill](avlayervideogravity/resizeaspectfill.md): The video preserves its aspect ratio and fills the layer’s bounds.

### Initializers

- [init(rawValue:)](avlayervideogravity/init%28rawvalue_%29.md): Creates a video gravity with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the presentation

- [videoRect](avplayerlayer/videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [videoGravity](avplayerlayer/videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.

# AVLayerVideoGravity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

## Declaration

```objectivec
typedef NSString * AVLayerVideoGravity;
```

## Topics

### Video gravities

- [AVLayerVideoGravityResize](avlayervideogravity/resize.md): The video stretches to fill the layer’s bounds.
- [AVLayerVideoGravityResizeAspect](avlayervideogravity/resizeaspect.md): The video preserves its aspect ratio and fits it within the layer’s bounds.
- [AVLayerVideoGravityResizeAspectFill](avlayervideogravity/resizeaspectfill.md): The video preserves its aspect ratio and fills the layer’s bounds.

## See Also

### Configuring the presentation

- [videoRect](avplayerlayer/videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [videoGravity](avplayerlayer/videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.
