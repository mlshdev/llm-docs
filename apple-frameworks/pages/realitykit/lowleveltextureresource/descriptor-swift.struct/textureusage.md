> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltextureresource/descriptor-swift.struct/textureusage](https://developer.apple.com/documentation/realitykit/lowleveltextureresource/descriptor-swift.struct/textureusage)

# textureUsage

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The options that determine how the texture can be used.

## Declaration

```swift
var textureUsage: MTLTextureUsage { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLTextureDescriptor.usage`.

## See Also

### Configuring texture usage

- [swizzle](swizzle.md): The channel swizzle pattern the GPU applies when sampling the texture.
