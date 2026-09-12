> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllight/irradiance(atpoint:)](https://developer.apple.com/documentation/modelio/mdllight/irradiance(atpoint:))

# irradiance(atPoint:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the radiance of the light as received at a specific point in the same scene.

## Declaration

```swift
func irradiance(atPoint point: vector_float3) -> Unmanaged<CGColor>
```

## Parameters

- `point`: A point in the same world coordinate space as the light.

<a id="return-value"></a>

## Return Value

The color and intensity of the light’s effect on the specified point.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [irradiance(atPoint:colorSpace:)](irradiance%28atpoint_colorspace_%29.md) method and passing the Rec. 709 color space. (See `kCGColorSpaceITUR_709`.)

## See Also

### Working with Lights

- [irradiance(atPoint:colorSpace:)](irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [lightType](lighttype.md): The type of the light.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.

# irradianceAtPoint: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the radiance of the light as received at a specific point in the same scene.

## Declaration

```objectivec
- (CGColorRef) irradianceAtPoint:(vector_float3) point;
```

## Parameters

- `point`: A point in the same world coordinate space as the light.

<a id="return-value"></a>

## Return Value

The color and intensity of the light’s effect on the specified point.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling the [irradianceAtPoint:colorSpace:](irradiance%28atpoint_colorspace_%29.md) method and passing the Rec. 709 color space. (See `kCGColorSpaceITUR_709`.)

## See Also

### Working with Lights

- [irradianceAtPoint:colorSpace:](irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [lightType](lighttype.md): The type of the light.
- [colorSpace](colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.
