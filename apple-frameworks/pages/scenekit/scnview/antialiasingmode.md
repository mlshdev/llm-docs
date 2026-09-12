> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/antialiasingmode](https://developer.apple.com/documentation/scenekit/scnview/antialiasingmode)

# antialiasingMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The antialiasing mode used for rendering the view’s scene.

## Declaration

```swift
var antialiasingMode: SCNAntialiasingMode { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit can provide antialiasing, which smooths edges in a rendered scene, using a technique called *multisampling*. Multisampling renders each pixel multiple times and combines the results, creating a higher quality image at a performance cost proportional to the number of samples it uses.

For available values, see [SCNView](../scnview.md). In macOS, the default mode is [SCNAntialiasingMode.multisampling4X](../scnantialiasingmode/multisampling4x.md). In iOS, the default mode is [SCNAntialiasingMode.none](../scnantialiasingmode/none.md).

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.

# antialiasingMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS

The antialiasing mode used for rendering the view’s scene.

## Declaration

```objectivec
@property (nonatomic) SCNAntialiasingMode antialiasingMode;
```

<a id="Discussion"></a>

## Discussion

SceneKit can provide antialiasing, which smooths edges in a rendered scene, using a technique called *multisampling*. Multisampling renders each pixel multiple times and combines the results, creating a higher quality image at a performance cost proportional to the number of samples it uses.

For available values, see [SCNView](../scnview.md). In macOS, the default mode is [SCNAntialiasingModeMultisampling4X](../scnantialiasingmode/multisampling4x.md). In iOS, the default mode is [SCNAntialiasingModeNone](../scnantialiasingmode/none.md).

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.
