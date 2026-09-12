> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturesampler/texture](https://developer.apple.com/documentation/modelio/mdltexturesampler/texture)

# texture (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The texture object that provides image data for sampling.

## Declaration

```swift
var texture: MDLTexture? { get set }
```

<a id="Discussion"></a>

## Discussion

A [MDLTexture](../mdltexture.md) object describes texture image data.

## See Also

### Working with Texture Parameters

- [hardwareFilter](hardwarefilter.md): An object that describes filtering modes for sampling from the texture.
- [transform](transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.

# texture (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The texture object that provides image data for sampling.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLTexture * texture;
```

<a id="Discussion"></a>

## Discussion

A [MDLTexture](../mdltexture.md) object describes texture image data.

## See Also

### Working with Texture Parameters

- [hardwareFilter](hardwarefilter.md): An object that describes filtering modes for sampling from the texture.
- [transform](transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.
