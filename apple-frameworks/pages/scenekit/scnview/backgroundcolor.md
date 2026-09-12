> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/backgroundcolor](https://developer.apple.com/documentation/scenekit/scnview/backgroundcolor)

# backgroundColor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The background color of the view.

## Declaration

```swift
@NSCopying var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit displays this color behind the contents of the rendered scene. If the scene contents fill the view or if the scene provides its own background using the [background](../scnscene/background.md) property, the view’s background color may not be visible.

This property’s value must be a color that can be represented using RGBA components.

## See Also

### Configuring a View

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.

# backgroundColor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** macOS

The background color of the view.

## Declaration

```objectivec
@property (nonatomic, copy) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

SceneKit displays this color behind the contents of the rendered scene. If the scene contents fill the view or if the scene provides its own background using the [background](../scnscene/background.md) property, the view’s background color may not be visible.

This property’s value must be a color that can be represented using RGBA components.

## See Also

### Configuring a View

- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.
