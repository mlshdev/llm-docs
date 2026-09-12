> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd64/init(lowhalf:highhalf:)-6op80](https://developer.apple.com/documentation/swift/simd64/init(lowhalf:highhalf:)-6op80)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD32<UInt64>, highHalf: SIMD32<UInt64>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD64<UInt64>()
for i in 0..<32 {
  result[i] = lowHalf[i]
  result[32+i] = highHalf[i]
}
```
