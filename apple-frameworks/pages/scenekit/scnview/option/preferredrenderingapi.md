> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/option/preferredrenderingapi](https://developer.apple.com/documentation/scenekit/scnview/option/preferredrenderingapi)

# preferredRenderingAPI (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The rendering API to use for rendering the view (for example, Metal or OpenGL).

## Declaration

```swift
static let preferredRenderingAPI: SCNView.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing one of the values listed in [SCNRenderingAPI](../../scnrenderingapi.md). You can also set this option from the inspector in Interface Builder.

SceneKit attempts to initialize a view using the preferred API you specify in the [SCNView](../../scnview.md) initializer; if the current device does not support the preferred API, SceneKit automatically falls back to a supported API. After initialization, use the [renderingAPI](../../scnscenerenderer/renderingapi.md) property to find out whether a fallback occurred. For example, if you specify the [SCNRenderingAPI.metal](../../scnrenderingapi/metal.md) option when initializing a view on an iOS device that does not support Metal, SceneKit defaults to the [SCNRenderingAPI.openGLES2](../../scnrenderingapi/opengles2.md) option instead.

## See Also

### View Options

- [preferLowPowerDevice](preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [preferredDevice](preferreddevice.md): The device to use for Metal rendering.

# SCNPreferredRenderingAPIKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · macOS 10.11+ · tvOS 9.0+

The rendering API to use for rendering the view (for example, Metal or OpenGL).

## Declaration

```objectivec
extern SCNViewOption const SCNPreferredRenderingAPIKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing one of the values listed in [SCNRenderingAPI](../../scnrenderingapi.md). You can also set this option from the inspector in Interface Builder.

SceneKit attempts to initialize a view using the preferred API you specify in the [SCNView](../../scnview.md) initializer; if the current device does not support the preferred API, SceneKit automatically falls back to a supported API. After initialization, use the [renderingAPI](../../scnscenerenderer/renderingapi.md) property to find out whether a fallback occurred. For example, if you specify the [SCNRenderingAPIMetal](../../scnrenderingapi/metal.md) option when initializing a view on an iOS device that does not support Metal, SceneKit defaults to the [SCNRenderingAPIOpenGLES2](../../scnrenderingapi/opengles2.md) option instead.

## See Also

### View Options

- [SCNPreferLowPowerDeviceKey](preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [SCNPreferredDeviceKey](preferreddevice.md): The device to use for Metal rendering.
