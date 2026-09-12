> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd64/init(repeating:)-92lq0](https://developer.apple.com/documentation/swift/simd64/init(repeating:)-92lq0)

# init(repeating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector with the specified scalar in all lanes.

## Declaration

```swift
init(repeating scalar: Double)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD64<Double>()
for i in result.indices {
  result[i] = scalar
}
```
