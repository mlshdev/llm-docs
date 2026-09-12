> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/gamma](https://developer.apple.com/documentation/modelio/mdlskycubetexture/gamma)

# gamma (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of gamma correction to apply during tone mapping.

## Declaration

```swift
var gamma: Float { get set }
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. As part of this process, Model I/O applies this property to the gamma curve of the texture image.

## See Also

### Working with Tone Mapping Parameters

- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [brightness](brightness.md): The amount of brightness enhancement to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.
- [highDynamicRangeCompression](highdynamicrangecompression.md): Two parameters that determine the brightness compression curve for colors in the texture image.

# gamma (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of gamma correction to apply during tone mapping.

## Declaration

```objectivec
@property (nonatomic, assign) float gamma;
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. As part of this process, Model I/O applies this property to the gamma curve of the texture image.

## See Also

### Working with Tone Mapping Parameters

- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [brightness](brightness.md): The amount of brightness enhancement to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.
- [highDynamicRangeCompression](highdynamicrangecompression.md): Two parameters that determine the brightness compression curve for colors in the texture image.
