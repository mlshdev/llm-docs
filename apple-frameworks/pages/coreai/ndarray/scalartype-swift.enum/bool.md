> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/ndarray/scalartype-swift.enum/bool

# NDArray.ScalarType.bool

**Framework:** Core AI  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean scalar.

## Declaration

```swift
case bool
```

<a id="discussion"></a>

## Discussion

Boolean scalars are used in Boolean operations such as `and`, `or` and `xor`, and as the result of comparison operators such as `equal` and `greater`. Boolean values are represented with a byte where 0 represents `false` and any other value (but usually 1) represents `true`.
