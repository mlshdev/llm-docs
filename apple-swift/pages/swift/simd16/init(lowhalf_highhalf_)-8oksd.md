> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd16/init(lowhalf:highhalf:)-8oksd](https://developer.apple.com/documentation/swift/simd16/init(lowhalf:highhalf:)-8oksd)

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD8<Int16>, highHalf: SIMD8<Int16>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD16<Int16>()
for i in 0..<8 {
  result[i] = lowHalf[i]
  result[8+i] = highHalf[i]
}
```
