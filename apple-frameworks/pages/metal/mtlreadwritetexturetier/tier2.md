> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlreadwritetexturetier/tier2](https://developer.apple.com/documentation/metal/mtlreadwritetexturetier/tier2)

# MTLReadWriteTextureTier.tier2 (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Indicates the system supports tier 2 read-write textures.

## Declaration

```swift
case tier2
```

<a id="discussion"></a>

## Discussion

Tier 2 read-write textures support the following pixel formats (in addition to [MTLReadWriteTextureTier.tier1](tier1.md)):

- [MTLPixelFormat.rgba32Float](../mtlpixelformat/rgba32float.md)
- [MTLPixelFormat.rgba32Uint](../mtlpixelformat/rgba32uint.md)
- [MTLPixelFormat.rgba32Sint](../mtlpixelformat/rgba32sint.md)
- [MTLPixelFormat.rgba16Float](../mtlpixelformat/rgba16float.md)
- [MTLPixelFormat.rgba16Uint](../mtlpixelformat/rgba16uint.md)
- [MTLPixelFormat.rgba16Sint](../mtlpixelformat/rgba16sint.md)
- [MTLPixelFormat.rgba8Unorm](../mtlpixelformat/rgba8unorm.md)
- [MTLPixelFormat.rgba8Uint](../mtlpixelformat/rgba8uint.md)
- [MTLPixelFormat.rgba8Sint](../mtlpixelformat/rgba8sint.md)
- [MTLPixelFormat.r16Float](../mtlpixelformat/r16float.md)
- [MTLPixelFormat.r16Uint](../mtlpixelformat/r16uint.md)
- [MTLPixelFormat.r16Sint](../mtlpixelformat/r16sint.md)
- [MTLPixelFormat.r8Unorm](../mtlpixelformat/r8unorm.md)
- [MTLPixelFormat.r8Uint](../mtlpixelformat/r8uint.md)
- [MTLPixelFormat.r8Sint](../mtlpixelformat/r8sint.md)

## See Also

### Enumeration cases

- [MTLReadWriteTextureTier.tier1](tier1.md): Indicates the system supports tier 1 read-write textures.
- [MTLReadWriteTextureTier.tierNone](tiernone.md): Indicates the system doesn’t support read-write textures.

# MTLReadWriteTextureTier2 (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Indicates the system supports tier 2 read-write textures.

## Declaration

```objectivec
MTLReadWriteTextureTier2
```

<a id="discussion"></a>

## Discussion

Tier 2 read-write textures support the following pixel formats (in addition to [MTLReadWriteTextureTier1](tier1.md)):

- [MTLPixelFormatRGBA32Float](../mtlpixelformat/rgba32float.md)
- [MTLPixelFormatRGBA32Uint](../mtlpixelformat/rgba32uint.md)
- [MTLPixelFormatRGBA32Sint](../mtlpixelformat/rgba32sint.md)
- [MTLPixelFormatRGBA16Float](../mtlpixelformat/rgba16float.md)
- [MTLPixelFormatRGBA16Uint](../mtlpixelformat/rgba16uint.md)
- [MTLPixelFormatRGBA16Sint](../mtlpixelformat/rgba16sint.md)
- [MTLPixelFormatRGBA8Unorm](../mtlpixelformat/rgba8unorm.md)
- [MTLPixelFormatRGBA8Uint](../mtlpixelformat/rgba8uint.md)
- [MTLPixelFormatRGBA8Sint](../mtlpixelformat/rgba8sint.md)
- [MTLPixelFormatR16Float](../mtlpixelformat/r16float.md)
- [MTLPixelFormatR16Uint](../mtlpixelformat/r16uint.md)
- [MTLPixelFormatR16Sint](../mtlpixelformat/r16sint.md)
- [MTLPixelFormatR8Unorm](../mtlpixelformat/r8unorm.md)
- [MTLPixelFormatR8Uint](../mtlpixelformat/r8uint.md)
- [MTLPixelFormatR8Sint](../mtlpixelformat/r8sint.md)

## See Also

### Enumeration cases

- [MTLReadWriteTextureTier1](tier1.md): Indicates the system supports tier 1 read-write textures.
- [MTLReadWriteTextureTierNone](tiernone.md): Indicates the system doesn’t support read-write textures.
