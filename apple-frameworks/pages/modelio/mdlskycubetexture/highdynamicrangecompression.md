> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/highdynamicrangecompression](https://developer.apple.com/documentation/modelio/mdlskycubetexture/highdynamicrangecompression)

# highDynamicRangeCompression (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Two parameters that determine the brightness compression curve for colors in the texture image.

## Declaration

```swift
var highDynamicRangeCompression: vector_float2 { get set }
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. In tone mapping, Model I/O ignores values below the x component of this vector, clamps color values at or above the y component to the maximum display brightness, and smoothly scales color values in between those points.

## See Also

### Working with Tone Mapping Parameters

- [gamma](gamma.md): The amount of gamma correction to apply during tone mapping.
- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [brightness](brightness.md): The amount of brightness enhancement to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.

# highDynamicRangeCompression (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Two parameters that determine the brightness compression curve for colors in the texture image.

## Declaration

```objectivec
@property (nonatomic, assign) vector_float2 highDynamicRangeCompression;
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. In tone mapping, Model I/O ignores values below the x component of this vector, clamps color values at or above the y component to the maximum display brightness, and smoothly scales color values in between those points.

## See Also

### Working with Tone Mapping Parameters

- [gamma](gamma.md): The amount of gamma correction to apply during tone mapping.
- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [brightness](brightness.md): The amount of brightness enhancement to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.
