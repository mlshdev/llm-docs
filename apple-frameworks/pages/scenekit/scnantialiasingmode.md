> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnantialiasingmode](https://developer.apple.com/documentation/scenekit/scnantialiasingmode)

# SCNAntialiasingMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Modes for antialiased rendering of the view’s scene, used by the [SCNView](scnview.md) property.

## Declaration

```swift
enum SCNAntialiasingMode
```

## Topics

### Constants

- [SCNAntialiasingMode.none](scnantialiasingmode/none.md): Disables antialiased rendering.
- [SCNAntialiasingMode.multisampling2X](scnantialiasingmode/multisampling2x.md): Enables multisample antialiasing, with two samples per screen pixel.
- [SCNAntialiasingMode.multisampling4X](scnantialiasingmode/multisampling4x.md): Enables multisample antialiasing, with four samples per screen pixel.
- [SCNAntialiasingMode.multisampling8X](scnantialiasingmode/multisampling8x.md): Enables multisample antialiasing, with eight samples per screen pixel.
- [SCNAntialiasingMode.multisampling16X](scnantialiasingmode/multisampling16x.md): Enables multisample antialiasing, with sixteen samples per screen pixel.

### Initializers

- [init(rawValue:)](scnantialiasingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a View

- [backgroundColor](scnview/backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](scnview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](scnview/renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](scnview/antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.

# SCNAntialiasingMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Modes for antialiased rendering of the view’s scene, used by the [SCNView](scnview.md) property.

## Declaration

```objectivec
enum SCNAntialiasingMode : NSUInteger;
```

## Topics

### Constants

- [SCNAntialiasingModeNone](scnantialiasingmode/none.md): Disables antialiased rendering.
- [SCNAntialiasingModeMultisampling2X](scnantialiasingmode/multisampling2x.md): Enables multisample antialiasing, with two samples per screen pixel.
- [SCNAntialiasingModeMultisampling4X](scnantialiasingmode/multisampling4x.md): Enables multisample antialiasing, with four samples per screen pixel.
- [SCNAntialiasingModeMultisampling8X](scnantialiasingmode/multisampling8x.md): Enables multisample antialiasing, with eight samples per screen pixel.
- [SCNAntialiasingModeMultisampling16X](scnantialiasingmode/multisampling16x.md): Enables multisample antialiasing, with sixteen samples per screen pixel.

## See Also

### Configuring a View

- [backgroundColor](scnview/backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](scnview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](scnview/renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](scnview/antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
