> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd/replace(with:where:)-91tn3](https://developer.apple.com/documentation/swift/simd/replace(with:where:)-91tn3)

# replace(with:where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces elements of this vector with elements of `other` in the lanes where `mask` is `true`.

## Declaration

```swift
mutating func replace(with other: Self, where mask: SIMDMask<Self.MaskStorage>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
for i in indices {
  if mask[i] { self[i] = other[i] }
}
```
