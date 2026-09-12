> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlreadwritetexturetier/tier1](https://developer.apple.com/documentation/metal/mtlreadwritetexturetier/tier1)

# MTLReadWriteTextureTier.tier1 (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Indicates the system supports tier 1 read-write textures.

## Declaration

```swift
case tier1
```

<a id="discussion"></a>

## Discussion

Tier 1 read-write textures support the following pixel formats:

- [MTLPixelFormat.r32Float](../mtlpixelformat/r32float.md)
- [MTLPixelFormat.r32Uint](../mtlpixelformat/r32uint.md)
- [MTLPixelFormat.r32Sint](../mtlpixelformat/r32sint.md)

## See Also

### Enumeration cases

- [MTLReadWriteTextureTier.tier2](tier2.md): Indicates the system supports tier 2 read-write textures.
- [MTLReadWriteTextureTier.tierNone](tiernone.md): Indicates the system doesn’t support read-write textures.

# MTLReadWriteTextureTier1 (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Indicates the system supports tier 1 read-write textures.

## Declaration

```objectivec
MTLReadWriteTextureTier1
```

<a id="discussion"></a>

## Discussion

Tier 1 read-write textures support the following pixel formats:

- [MTLPixelFormatR32Float](../mtlpixelformat/r32float.md)
- [MTLPixelFormatR32Uint](../mtlpixelformat/r32uint.md)
- [MTLPixelFormatR32Sint](../mtlpixelformat/r32sint.md)

## See Also

### Enumeration cases

- [MTLReadWriteTextureTier2](tier2.md): Indicates the system supports tier 2 read-write textures.
- [MTLReadWriteTextureTierNone](tiernone.md): Indicates the system doesn’t support read-write textures.
