> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnview/option/preferlowpowerdevice](https://developer.apple.com/documentation/scenekit/scnview/option/preferlowpowerdevice)

# preferLowPowerDevice (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option for whether to select low-power-usage devices for Metal rendering.

## Declaration

```swift
static let preferLowPowerDevice: SCNView.Option
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value.

SceneKit uses this option when automatically selecting a Metal device on systems with multiple GPUs. If the value is [true](https://developer.apple.com/documentation/swift/true), SceneKit uses a device with low power usage requirements—for example, the integrated GPU on a MacBook Pro with both integrated and discrete graphics hardware.

Leaving this key unspecified is equivalent to setting its value to [false](https://developer.apple.com/documentation/swift/false). In this case, SceneKit chooses the most capable available Metal device.

## See Also

### View Options

- [preferredDevice](preferreddevice.md): The device to use for Metal rendering.
- [preferredRenderingAPI](preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).

# SCNPreferLowPowerDeviceKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option for whether to select low-power-usage devices for Metal rendering.

## Declaration

```objectivec
extern SCNViewOption const SCNPreferLowPowerDeviceKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value.

SceneKit uses this option when automatically selecting a Metal device on systems with multiple GPUs. If the value is [true](https://developer.apple.com/documentation/swift/true), SceneKit uses a device with low power usage requirements—for example, the integrated GPU on a MacBook Pro with both integrated and discrete graphics hardware.

Leaving this key unspecified is equivalent to setting its value to [false](https://developer.apple.com/documentation/swift/false). In this case, SceneKit chooses the most capable available Metal device.

## See Also

### View Options

- [SCNPreferredDeviceKey](preferreddevice.md): The device to use for Metal rendering.
- [SCNPreferredRenderingAPIKey](preferredrenderingapi.md): The rendering API to use for rendering the view (for example, Metal or OpenGL).
