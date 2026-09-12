> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/brightness](https://developer.apple.com/documentation/modelio/mdlskycubetexture/brightness)

# brightness (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of brightness enhancement to apply during tone mapping.

## Declaration

```swift
var brightness: Float { get set }
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. As part of this process, Model I/O uses this property to scale the brightness of the texture image.

## See Also

### Working with Tone Mapping Parameters

- [gamma](gamma.md): The amount of gamma correction to apply during tone mapping.
- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.
- [highDynamicRangeCompression](highdynamicrangecompression.md): Two parameters that determine the brightness compression curve for colors in the texture image.

# brightness (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The amount of brightness enhancement to apply during tone mapping.

## Declaration

```objectivec
@property (nonatomic, assign) float brightness;
```

<a id="Discussion"></a>

## Discussion

To render a sky texture, Model I/O first simulates the colors visible in the sky at different directions and then applies tone mapping to fit the resulting colors into the range of displayable values. As part of this process, Model I/O uses this property to scale the brightness of the texture image.

## See Also

### Working with Tone Mapping Parameters

- [gamma](gamma.md): The amount of gamma correction to apply during tone mapping.
- [exposure](exposure.md): The amount of exposure compensation to apply during tone mapping.
- [contrast](contrast.md): The amount of contrast enhancement to apply during tone mapping.
- [saturation](saturation.md): The amount of saturation enhancement to apply during tone mapping.
- [highDynamicRangeCompression](highdynamicrangecompression.md): Two parameters that determine the brightness compression curve for colors in the texture image.
