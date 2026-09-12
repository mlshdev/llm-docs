> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/all(_:)](https://developer.apple.com/documentation/swift/all(_:))

# all(\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

True if every lane of mask is true.

## Declaration

```swift
func all<Storage>(_ mask: SIMDMask<Storage>) -> Bool where Storage : SIMD, Storage.Scalar : FixedWidthInteger, Storage.Scalar : SignedInteger
```

## See Also

### Supporting Functions

- [any(\_:)](any%28__%29.md): True if any lane of mask is true.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29-29hn2.md): The lanewise maximum of two vectors.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29-2k6er.md): The lanewise maximum of two vectors.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29-39txi.md): The lanewise minimum of two vectors.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29-8v95p.md): The lanewise minimum of two vectors.
