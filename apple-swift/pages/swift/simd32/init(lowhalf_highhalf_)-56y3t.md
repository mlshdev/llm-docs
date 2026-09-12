> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/init(lowhalf:highhalf:)-56y3t](https://developer.apple.com/documentation/swift/simd32/init(lowhalf:highhalf:)-56y3t)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD16<Float16>, highHalf: SIMD16<Float16>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD32<Float16>()
for i in 0..<16 {
  result[i] = lowHalf[i]
  result[16+i] = highHalf[i]
}
```
