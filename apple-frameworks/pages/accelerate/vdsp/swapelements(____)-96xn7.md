> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/swapelements(_:_:)-96xn7](https://developer.apple.com/documentation/accelerate/vdsp/swapelements(_:_:)-96xn7)

# swapElements(\_:\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Swaps the elements of two single-precision vectors.

## Declaration

```swift
static func swapElements<T, U>(_ vectorA: inout T, _ vectorB: inout U) where T : AccelerateMutableBuffer, U : AccelerateMutableBuffer, T.Element == Float, U.Element == Float
```

## Parameters

- `vectorA`: The first vector.
- `vectorB`: The second vector.

<a id="Discussion"></a>

## Discussion

The following code swaps the elements in `vectorA` with those in `vectorB`:

```swift
var vectorA: [Float] = [1, 3, 5, 7]
var vectorB: [Float] = [2, 4, 6, 8]

vDSP.swapElements(&vectorA,
                  &vectorB)

// Prints "[2.0, 4.0, 6.0, 8.0]".
print(vectorA)

// Prints "[1.0, 3.0, 5.0, 7.0]".
print(vectorB)
```

## See Also

### Vector-to-vector element swapping functions

- [swapElements(\_:\_:)](swapelements%28____%29-62wvt.md): Swaps the elements of two double-precision vectors.
