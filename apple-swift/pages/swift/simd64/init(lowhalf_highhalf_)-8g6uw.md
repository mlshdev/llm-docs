> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd64/init(lowhalf:highhalf:)-8g6uw](https://developer.apple.com/documentation/swift/simd64/init(lowhalf:highhalf:)-8g6uw)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD32<Double>, highHalf: SIMD32<Double>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD64<Double>()
for i in 0..<32 {
  result[i] = lowHalf[i]
  result[32+i] = highHalf[i]
}
```
