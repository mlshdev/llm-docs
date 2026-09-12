> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/init(repeating:)-32e9u](https://developer.apple.com/documentation/swift/simd32/init(repeating:)-32e9u)

# init(repeating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A vector with the specified scalar in all lanes.

## Declaration

```swift
init(repeating scalar: Float16)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD32<Float16>()
for i in result.indices {
  result[i] = scalar
}
```
