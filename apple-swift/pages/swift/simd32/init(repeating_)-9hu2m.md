> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/init(repeating:)-9hu2m](https://developer.apple.com/documentation/swift/simd32/init(repeating:)-9hu2m)

# init(repeating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector with the specified scalar in all lanes.

## Declaration

```swift
init(repeating scalar: UInt16)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD32<UInt16>()
for i in result.indices {
  result[i] = scalar
}
```
