> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd16/init(lowhalf:highhalf:)-6t1hy](https://developer.apple.com/documentation/swift/simd16/init(lowhalf:highhalf:)-6t1hy)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD8<Int>, highHalf: SIMD8<Int>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD16<Int>()
for i in 0..<8 {
  result[i] = lowHalf[i]
  result[8+i] = highHalf[i]
}
```
