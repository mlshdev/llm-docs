> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dct_type/ii](https://developer.apple.com/documentation/accelerate/vdsp_dct_type/ii)

# vDSP_DCT_Type.II (Swift)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type II discrete cosine transform.

## Declaration

```swift
case II
```

<a id="Discussion"></a>

## Discussion

The type-II DCT uses the following operation for a discrete cosine transform:

```
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = sum(Ir[j] * cos(k * (j+1/2) * pi / N, 0 <= j < N)
```

## See Also

### Discrete Cosine Transform Types

- [vDSP_DCT_Type.III](iii.md): A constant that specifies a type III discrete cosine transform.
- [vDSP_DCT_Type.IV](iv.md): A constant that specifies a type IV discrete cosine transform.

# vDSP_DCT_II (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type II discrete cosine transform.

## Declaration

```objectivec
vDSP_DCT_II
```

<a id="Discussion"></a>

## Discussion

The type-II DCT uses the following operation for a discrete cosine transform:

```
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = sum(Ir[j] * cos(k * (j+1/2) * pi / N, 0 <= j < N)
```

## See Also

### Discrete Cosine Transform Types

- [vDSP_DCT_III](iii.md): A constant that specifies a type III discrete cosine transform.
- [vDSP_DCT_IV](iv.md): A constant that specifies a type IV discrete cosine transform.
