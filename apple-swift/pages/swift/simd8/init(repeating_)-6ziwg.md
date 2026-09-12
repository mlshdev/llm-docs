> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8/init(repeating:)-6ziwg](https://developer.apple.com/documentation/swift/simd8/init(repeating:)-6ziwg)

# init(repeating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector with the specified scalar in all lanes.

## Declaration

```swift
init(repeating scalar: Int)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD8<Int>()
for i in result.indices {
  result[i] = scalar
}
```
