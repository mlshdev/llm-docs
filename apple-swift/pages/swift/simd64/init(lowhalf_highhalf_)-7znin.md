> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd64/init(lowhalf:highhalf:)-7znin](https://developer.apple.com/documentation/swift/simd64/init(lowhalf:highhalf:)-7znin)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD32<Float16>, highHalf: SIMD32<Float16>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD64<Float16>()
for i in 0..<32 {
  result[i] = lowHalf[i]
  result[32+i] = highHalf[i]
}
```
