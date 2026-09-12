> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturesampler/transform](https://developer.apple.com/documentation/modelio/mdltexturesampler/transform)

# transform (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transformation to be applied to texture coordinate data before sampling from the texture.

## Declaration

```swift
var transform: MDLTransform? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to translate, scale, or rotate a texture relative to the surfaces it’s rendered on.

## See Also

### Working with Texture Parameters

- [texture](texture.md): The texture object that provides image data for sampling.
- [hardwareFilter](hardwarefilter.md): An object that describes filtering modes for sampling from the texture.

# transform (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transformation to be applied to texture coordinate data before sampling from the texture.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MDLTransform * transform;
```

<a id="Discussion"></a>

## Discussion

Use this property to translate, scale, or rotate a texture relative to the surfaces it’s rendered on.

## See Also

### Working with Texture Parameters

- [texture](texture.md): The texture object that provides image data for sampling.
- [hardwareFilter](hardwarefilter.md): An object that describes filtering modes for sampling from the texture.
