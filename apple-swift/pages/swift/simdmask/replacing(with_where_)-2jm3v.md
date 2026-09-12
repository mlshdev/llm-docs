> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simdmask/replacing(with:where:)-2jm3v](https://developer.apple.com/documentation/swift/simdmask/replacing(with:where:)-2jm3v)

# replacing(with:where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of this vector, with elements replaced by elements of `other` in the lanes where `mask` is `true`.

## Declaration

```swift
func replacing(with other: SIMDMask<Storage>, where mask: SIMDMask<Storage>) -> SIMDMask<Storage>
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = Self()
for i in indices {
  result[i] = mask[i] ? other[i] : self[i]
}
```
