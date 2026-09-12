> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllight/irradiance(atpoint:colorspace:)](https://developer.apple.com/documentation/modelio/mdllight/irradiance(atpoint:colorspace:))

# irradiance(atPoint:colorSpace:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.

## Declaration

```swift
func irradiance(atPoint point: vector_float3, colorSpace: CGColorSpace) -> Unmanaged<CGColor>
```

## Parameters

- `point`: A point in the same world coordinate space as the light.
- `colorSpace`: The color space in which to interpret the light’s color.

<a id="return-value"></a>

## Return Value

The color and intensity of the light’s effect on the specified point.

## See Also

### Working with Lights

- [irradiance(atPoint:)](irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [lightType](lighttype.md): The type of the light.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.

# irradianceAtPoint:colorSpace: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.

## Declaration

```objectivec
- (CGColorRef) irradianceAtPoint:(vector_float3) point colorSpace:(CGColorSpaceRef) colorSpace;
```

## Parameters

- `point`: A point in the same world coordinate space as the light.
- `colorSpace`: The color space in which to interpret the light’s color.

<a id="return-value"></a>

## Return Value

The color and intensity of the light’s effect on the specified point.

## See Also

### Working with Lights

- [irradianceAtPoint:](irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [lightType](lighttype.md): The type of the light.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.
