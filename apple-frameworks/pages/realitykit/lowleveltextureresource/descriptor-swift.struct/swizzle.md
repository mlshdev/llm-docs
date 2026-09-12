> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltextureresource/descriptor-swift.struct/swizzle](https://developer.apple.com/documentation/realitykit/lowleveltextureresource/descriptor-swift.struct/swizzle)

# swizzle

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The channel swizzle pattern the GPU applies when sampling the texture.

## Declaration

```swift
var swizzle: MTLTextureSwizzleChannels { get set }
```

<a id="discussion"></a>

## Discussion

Corresponds to `MTLTextureDescriptor.swizzle`.

## See Also

### Configuring texture usage

- [textureUsage](textureusage.md): The options that determine how the texture can be used.
