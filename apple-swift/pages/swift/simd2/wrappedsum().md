> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd2/wrappedsum()](https://developer.apple.com/documentation/swift/simd2/wrappedsum())

# wrappedSum()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the sum of the scalars in the vector, computed with wrapping addition.

## Declaration

```swift
func wrappedSum() -> Self.Scalar
```

<a id="discussion"></a>

## Discussion

Equivalent to `indices.reduce(into: 0) { $0 &+= self[$1] }`.
