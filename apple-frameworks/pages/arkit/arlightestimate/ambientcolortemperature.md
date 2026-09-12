> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arlightestimate/ambientcolortemperature](https://developer.apple.com/documentation/arkit/arlightestimate/ambientcolortemperature)

# ambientColorTemperature (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.

## Declaration

```swift
var ambientColorTemperature: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value is based on the internal white balance compensation of the camera device, and scaled to be appropriate for use in rendering architectures that use realistic lighting metrics. A value of 6500 represents neutral (pure white) lighting; lower values indicate a “warmer” yellow or orange tint, and higher values indicate a “cooler” blue tint.

For example, you can pass this value directly to the [temperature](../../scenekit/scnlight/temperature.md) property of a SceneKit ambient light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on this value.)

## See Also

### Examining Light Parameters

- [ambientIntensity](ambientintensity.md): The estimated intensity, in lumens, of ambient light throughout the scene.

# ambientColorTemperature (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat ambientColorTemperature;
```

<a id="Discussion"></a>

## Discussion

This value is based on the internal white balance compensation of the camera device, and scaled to be appropriate for use in rendering architectures that use realistic lighting metrics. A value of 6500 represents neutral (pure white) lighting; lower values indicate a “warmer” yellow or orange tint, and higher values indicate a “cooler” blue tint.

For example, you can pass this value directly to the [temperature](../../scenekit/scnlight/temperature.md) property of a SceneKit ambient light for lighting results that roughly match those of the real-world scene captured by the device camera. (However, passing this value to SceneKit is generally not necessary; the [ARSCNView](../arscnview.md) class automatically sets SceneKit lighting based on this value.)

## See Also

### Examining Light Parameters

- [ambientIntensity](ambientintensity.md): The estimated intensity, in lumens, of ambient light throughout the scene.
