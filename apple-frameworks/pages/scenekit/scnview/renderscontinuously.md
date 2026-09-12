> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/renderscontinuously](https://developer.apple.com/documentation/scenekit/scnview/renderscontinuously)

# rendersContinuously (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.

## Declaration

```swift
var rendersContinuously: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the view redraws its contents only when something in its scene graph change or animates. Use this option to maximize energy efficiency.

If you change this value to [true](https://developer.apple.com/documentation/swift/true), the view redraws itself continually, at the rate specified by the [preferredFramesPerSecond](preferredframespersecond.md) property, regardless of whether content is changing or animating.

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.

# rendersContinuously (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL rendersContinuously;
```

<a id="Discussion"></a>

## Discussion

When this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the view redraws its contents only when something in its scene graph change or animates. Use this option to maximize energy efficiency.

If you change this value to [true](https://developer.apple.com/documentation/swift/true), the view redraws itself continually, at the rate specified by the [preferredFramesPerSecond](preferredframespersecond.md) property, regardless of whether content is changing or animating.

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.
