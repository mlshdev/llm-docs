> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllight/lighttype](https://developer.apple.com/documentation/modelio/mdllight/lighttype)

# lightType (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of the light.

## Declaration

```swift
var lightType: MDLLightType { get set }
```

<a id="Discussion"></a>

## Discussion

Light types determine both the shape and the style of illumination provided by a light.

## See Also

### Working with Lights

- [irradiance(atPoint:)](irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [irradiance(atPoint:colorSpace:)](irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.

# lightType (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of the light.

## Declaration

```objectivec
@property (nonatomic, readwrite) MDLLightType lightType;
```

<a id="Discussion"></a>

## Discussion

Light types determine both the shape and the style of illumination provided by a light.

## See Also

### Working with Lights

- [irradianceAtPoint:](irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [irradianceAtPoint:colorSpace:](irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.
