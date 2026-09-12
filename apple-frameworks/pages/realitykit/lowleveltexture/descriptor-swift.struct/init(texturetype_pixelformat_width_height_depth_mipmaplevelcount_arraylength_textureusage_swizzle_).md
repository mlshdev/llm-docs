> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/descriptor-swift.struct/init(texturetype:pixelformat:width:height:depth:mipmaplevelcount:arraylength:textureusage:swizzle:)](https://developer.apple.com/documentation/realitykit/lowleveltexture/descriptor-swift.struct/init(texturetype:pixelformat:width:height:depth:mipmaplevelcount:arraylength:textureusage:swizzle:))

# init(textureType:pixelFormat:width:height:depth:mipmapLevelCount:arrayLength:textureUsage:swizzle:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a descriptor for a low-level texture.

## Declaration

```swift
init(textureType: MTLTextureType = .type2D, pixelFormat: MTLPixelFormat = .invalid, width: Int = 0, height: Int = 0, depth: Int = 1, mipmapLevelCount: Int = 1, arrayLength: Int = 1, textureUsage: MTLTextureUsage = .unknown, swizzle: MTLTextureSwizzleChannels = .init(red: .red, green: .green, blue: .blue, alpha: .alpha))
```

<a id="discussion"></a>

## Discussion

To create a new [LowLevelTexture](../../lowleveltexture.md), first create a `LowLevelTexture.Descriptor` object and set its property values.  Then, call [init(descriptor:)](../init%28descriptor_%29.md).
