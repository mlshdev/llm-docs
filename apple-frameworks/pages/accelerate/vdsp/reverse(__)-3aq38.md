> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/reverse(_:)-3aq38](https://developer.apple.com/documentation/accelerate/vdsp/reverse(_:)-3aq38)

# reverse(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Reverses a vector of double-precision values in-place.

## Declaration

```swift
static func reverse<V>(_ vector: inout V) where V : AccelerateMutableBuffer, V.Element == Double
```

## Parameters

- `vector`: The vector that the function reverses.

<a id="Discussion"></a>

## Discussion

The single- and double-precision [reverse(\_:)](reverse%28__%29-3aq38.md) functions reverse the elements of an array.

The following code reverses the elements in the array `values`:

```swift
var values: [Float] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

vDSP.reverse(&values)

// Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]".
print(values)
```

## See Also

### Vector reversing functions

- [reverse(\_:)](reverse%28__%29-38ptd.md): Reverses a vector of single-precision values in-place.
