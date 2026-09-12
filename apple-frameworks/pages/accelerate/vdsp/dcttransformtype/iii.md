> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dcttransformtype/iii](https://developer.apple.com/documentation/accelerate/vdsp/dcttransformtype/iii)

# vDSP.DCTTransformType.III

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A constant that represents a type-III discrete cosine transform.

## Declaration

```swift
case III
```

<a id="Discussion"></a>

## Discussion

The type-III DCT uses the following operation for a discrete cosine transform:

```
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = Ir[0]/2
        + sum(Ir[j] * cos((k+1/2) * j * pi / N), 1 <= j < N)
```

## See Also

### Discrete Cosine Transform Type Constants

- [vDSP.DCTTransformType.II](ii.md): A constant that represents a type-II discrete cosine transform.
- [vDSP.DCTTransformType.IV](iv.md): A constant that represents a type-IV discrete cosine transform.
