> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/dcttransformtype/ii](https://developer.apple.com/documentation/accelerate/vdsp/dcttransformtype/ii)

# vDSP.DCTTransformType.II

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A constant that represents a type-II discrete cosine transform.

## Declaration

```swift
case II
```

<a id="Discussion"></a>

## Discussion

The type-II DCT uses the following operation for a discrete cosine transform:

```c
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = sum(Ir[j] * cos(k * (j+1/2) * pi / N, 0 <= j < N)
```

## See Also

### Discrete Cosine Transform Type Constants

- [vDSP.DCTTransformType.III](iii.md): A constant that represents a type-III discrete cosine transform.
- [vDSP.DCTTransformType.IV](iv.md): A constant that represents a type-IV discrete cosine transform.
