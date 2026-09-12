> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffersparsetier/tier1](https://developer.apple.com/documentation/metal/mtlbuffersparsetier/tier1)

# MTLBufferSparseTier.tier1 (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates support for sparse buffers tier 1.

## Declaration

```swift
case tier1
```

<a id="discussion"></a>

## Discussion

Tier 1 sparse buffers allow the following:

- Partial memory backing at sparse page granularity.
- Defined behavior for accessing an *unbacked* buffer range.

An unbacked buffer range indicates a range within the buffer that doesn’t have memory backing at a given point in time. Accessing an unbacked buffer range of a sparse buffer produces the following results:

- Reading return zero.
- Writing produces no result.

# MTLBufferSparseTier1 (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates support for sparse buffers tier 1.

## Declaration

```objectivec
MTLBufferSparseTier1
```

<a id="discussion"></a>

## Discussion

Tier 1 sparse buffers allow the following:

- Partial memory backing at sparse page granularity.
- Defined behavior for accessing an *unbacked* buffer range.

An unbacked buffer range indicates a range within the buffer that doesn’t have memory backing at a given point in time. Accessing an unbacked buffer range of a sparse buffer produces the following results:

- Reading return zero.
- Writing produces no result.
