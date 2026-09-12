> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd16/replace(with:where:)-9cks4](https://developer.apple.com/documentation/swift/simd16/replace(with:where:)-9cks4)

# replace(with:where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces elements of this vector with `other` in the lanes where `mask` is `true`.

## Declaration

```swift
mutating func replace(with other: Self.Scalar, where mask: SIMDMask<Self.MaskStorage>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
for i in indices {
  if mask[i] { self[i] = other }
}
```
