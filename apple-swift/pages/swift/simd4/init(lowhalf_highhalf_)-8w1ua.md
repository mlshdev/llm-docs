> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd4/init(lowhalf:highhalf:)-8w1ua](https://developer.apple.com/documentation/swift/simd4/init(lowhalf:highhalf:)-8w1ua)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD2<UInt8>, highHalf: SIMD2<UInt8>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD4<UInt8>()
for i in 0..<2 {
  result[i] = lowHalf[i]
  result[2+i] = highHalf[i]
}
```
