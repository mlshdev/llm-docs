> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8/init(lowhalf:highhalf:)-i4ty](https://developer.apple.com/documentation/swift/simd8/init(lowhalf:highhalf:)-i4ty)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD4<Int64>, highHalf: SIMD4<Int64>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD8<Int64>()
for i in 0..<4 {
  result[i] = lowHalf[i]
  result[4+i] = highHalf[i]
}
```
