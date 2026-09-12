> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd32/init(lowhalf:highhalf:)-5tdrt](https://developer.apple.com/documentation/swift/simd32/init(lowhalf:highhalf:)-5tdrt)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD16<Scalar>, highHalf: SIMD16<Scalar>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD32<Scalar>()
for i in 0..<16 {
  result[i] = lowHalf[i]
  result[16+i] = highHalf[i]
}
```
