> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturesparsetier/tier1](https://developer.apple.com/documentation/metal/mtltexturesparsetier/tier1)

# MTLTextureSparseTier.tier1 (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates support for sparse textures tier 1.

## Declaration

```swift
case tier1
```

<a id="discussion"></a>

## Discussion

Tier 1 sparse textures allow the following:

- Partial memory backing at sparse tile granularity.
- Defined behavior for accessing an unbacked texture region.
- Shader feedback on texture access to determine memory backing.

An unbacked texture region indicates a region within the texture that doesn’t have memory backing at a given point in time. Accessing an unbacked texture region produces the following results:

- Reading returns zero (transparent black) for pixel formats with an alpha (A) channel.
- Reading return zero in RGB and one in alpha (A) channels (opaque black) otherwise.
- Writing produces no result.

# MTLTextureSparseTier1 (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates support for sparse textures tier 1.

## Declaration

```objectivec
MTLTextureSparseTier1
```

<a id="discussion"></a>

## Discussion

Tier 1 sparse textures allow the following:

- Partial memory backing at sparse tile granularity.
- Defined behavior for accessing an unbacked texture region.
- Shader feedback on texture access to determine memory backing.

An unbacked texture region indicates a region within the texture that doesn’t have memory backing at a given point in time. Accessing an unbacked texture region produces the following results:

- Reading returns zero (transparent black) for pixel formats with an alpha (A) channel.
- Reading return zero in RGB and one in alpha (A) channels (opaque black) otherwise.
- Writing produces no result.
