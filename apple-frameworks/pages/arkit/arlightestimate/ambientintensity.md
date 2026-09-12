> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arlightestimate/ambientintensity](https://developer.apple.com/documentation/arkit/arlightestimate/ambientintensity)

# ambientIntensity (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated intensity, in lumens, of ambient light throughout the scene.

## Declaration

```swift
var ambientIntensity: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value is based on the internal exposure compensation of the camera device, and scaled to be appropriate for use in rendering architectures that use realistic lighting metrics. A value of 1000 represents “neutral” lighting.

For example, you can pass this value directly to the [intensity](../../scenekit/scnlight/intensity.md) property of a SceneKit ambient light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on this value.)

## See Also

### Examining Light Parameters

- [ambientColorTemperature](ambientcolortemperature.md): The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.

# ambientIntensity (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated intensity, in lumens, of ambient light throughout the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat ambientIntensity;
```

<a id="Discussion"></a>

## Discussion

This value is based on the internal exposure compensation of the camera device, and scaled to be appropriate for use in rendering architectures that use realistic lighting metrics. A value of 1000 represents “neutral” lighting.

For example, you can pass this value directly to the [intensity](../../scenekit/scnlight/intensity.md) property of a SceneKit ambient light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on this value.)

## See Also

### Examining Light Parameters

- [ambientColorTemperature](ambientcolortemperature.md): The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.
