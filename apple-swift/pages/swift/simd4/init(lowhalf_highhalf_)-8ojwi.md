> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd4/init(lowhalf:highhalf:)-8ojwi](https://developer.apple.com/documentation/swift/simd4/init(lowhalf:highhalf:)-8ojwi)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD2<Float16>, highHalf: SIMD2<Float16>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD4<Float16>()
for i in 0..<2 {
  result[i] = lowHalf[i]
  result[2+i] = highHalf[i]
}
```
