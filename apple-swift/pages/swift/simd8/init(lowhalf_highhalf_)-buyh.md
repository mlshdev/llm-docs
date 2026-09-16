> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/simd8/init(lowhalf:highhalf:)-buyh

# init(lowHalf:highHalf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector formed by concatenating lowHalf and highHalf.

## Declaration

```swift
init(lowHalf: SIMD4<Scalar>, highHalf: SIMD4<Scalar>)
```

<a id="discussion"></a>

## Discussion

Equivalent to:

```swift
var result = SIMD8<Scalar>()
for i in 0..<4 {
  result[i] = lowHalf[i]
  result[4+i] = highHalf[i]
}
```
