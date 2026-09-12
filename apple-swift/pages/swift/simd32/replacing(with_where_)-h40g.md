> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/replacing(with:where:)-h40g](https://developer.apple.com/documentation/swift/simd32/replacing(with:where:)-h40g)

# replacing(with:where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of this vector, with elements `other` in the lanes where `mask` is `true`.

## Declaration

```swift
func replacing(with other: Self.Scalar, where mask: SIMDMask<Self.MaskStorage>) -> Self
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = Self()
for i in indices {
  result[i] = mask[i] ? other : self[i]
}
```
