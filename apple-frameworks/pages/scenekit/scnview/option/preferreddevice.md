> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/option/preferreddevice](https://developer.apple.com/documentation/scenekit/scnview/option/preferreddevice)

# preferredDevice (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The device to use for Metal rendering.

## Declaration

```swift
static let preferredDevice: SCNView.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [MTLDevice](../../../metal/mtldevice.md) object.

Use this key to choose a specific device for rendering (for example, on a macOS system with multiple GPUs), or leave it unspecified to allow SceneKit to automatically choose a device.

## See Also

### View Options

- [preferLowPowerDevice](preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [preferredRenderingAPI](preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).

# SCNPreferredDeviceKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device to use for Metal rendering.

## Declaration

```objectivec
extern SCNViewOption const SCNPreferredDeviceKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [MTLDevice](../../../metal/mtldevice.md) object.

Use this key to choose a specific device for rendering (for example, on a macOS system with multiple GPUs), or leave it unspecified to allow SceneKit to automatically choose a device.

## See Also

### View Options

- [SCNPreferLowPowerDeviceKey](preferlowpowerdevice.md): An option for whether to select low-power-usage devices for Metal rendering.
- [SCNPreferredRenderingAPIKey](preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).
