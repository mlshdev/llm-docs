> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd16/init(repeating:)-16o1h](https://developer.apple.com/documentation/swift/simd16/init(repeating:)-16o1h)

# init(repeating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector with the specified scalar in all lanes.

## Declaration

```swift
init(repeating value: Self.Scalar)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = Self()
for i in result.indices {
  result[i] = scalar
}
```
