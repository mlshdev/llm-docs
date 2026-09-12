> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturesampler/hardwarefilter](https://developer.apple.com/documentation/modelio/mdltexturesampler/hardwarefilter)

# hardwareFilter (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that describes filtering modes for sampling from the texture.

## Declaration

```swift
var hardwareFilter: MDLTextureFilter? { get set }
```

<a id="Discussion"></a>

## Discussion

Filtering modes specify the behavior of texture sampling at different sizes and texture coordinates.

## See Also

### Working with Texture Parameters

- [texture](texture.md): The texture object that provides image data for sampling.
- [transform](transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.

# hardwareFilter (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that describes filtering modes for sampling from the texture.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLTextureFilter * hardwareFilter;
```

<a id="Discussion"></a>

## Discussion

Filtering modes specify the behavior of texture sampling at different sizes and texture coordinates.

## See Also

### Working with Texture Parameters

- [texture](texture.md): The texture object that provides image data for sampling.
- [transform](transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.
