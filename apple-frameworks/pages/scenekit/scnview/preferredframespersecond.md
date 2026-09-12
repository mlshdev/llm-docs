> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/preferredframespersecond](https://developer.apple.com/documentation/scenekit/scnview/preferredframespersecond)

# preferredFramesPerSecond (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The animation frame rate that the view uses to render its scene.

## Declaration

```swift
var preferredFramesPerSecond: Int { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit chooses an actual frame rate that is as close as possible to your preferred frame rate based on the capabilities of the screen the view is displayed on. The actual frame rate is usually a factor of the maximum refresh rate of the screen to provide a consistent frame rate. For example, if the maximum refresh rate of the screen is `60` frames per second, that is also the highest frame rate the view sets as the actual frame rate. However, if you ask for a lower frame rate, SceneKit might choose `30`, `20`, `15` or some other factor to be the actual frame rate. For this reason, you want to choose a frame rate that your app can consistently maintain.

The default value is `60` frames per second.

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.

# preferredFramesPerSecond (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS

The animation frame rate that the view uses to render its scene.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredFramesPerSecond;
```

<a id="Discussion"></a>

## Discussion

SceneKit chooses an actual frame rate that is as close as possible to your preferred frame rate based on the capabilities of the screen the view is displayed on. The actual frame rate is usually a factor of the maximum refresh rate of the screen to provide a consistent frame rate. For example, if the maximum refresh rate of the screen is `60` frames per second, that is also the highest frame rate the view sets as the actual frame rate. However, if you ask for a lower frame rate, SceneKit might choose `30`, `20`, `15` or some other factor to be the actual frame rate. For this reason, you want to choose a frame rate that your app can consistently maintain.

The default value is `60` frames per second.

## See Also

### Configuring a View

- [backgroundColor](backgroundcolor.md): The background color of the view.
- [rendersContinuously](renderscontinuously.md): A Boolean value that determines whether the view always renders at its preferred frame rate or only when its visible content changes.
- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the view’s scene.
- [SCNAntialiasingMode](../scnantialiasingmode.md): Modes for antialiased rendering of the view’s scene, used by the [SCNView](../scnview.md) property.
