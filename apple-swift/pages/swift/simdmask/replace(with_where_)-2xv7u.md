> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simdmask/replace(with:where:)-2xv7u](https://developer.apple.com/documentation/swift/simdmask/replace(with:where:)-2xv7u)

# replace(with:where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces elements of this vector with elements of `other` in the lanes where `mask` is `true`.

## Declaration

```swift
mutating func replace(with other: SIMDMask<Storage>, where mask: SIMDMask<Storage>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
for i in indices {
  if mask[i] { self[i] = other[i] }
}
```
