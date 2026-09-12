> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dct_type/iii](https://developer.apple.com/documentation/accelerate/vdsp_dct_type/iii)

# vDSP_DCT_Type.III (Swift)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type III discrete cosine transform.

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

### Discrete Cosine Transform Types

- [vDSP_DCT_Type.II](ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_Type.IV](iv.md): A constant that specifies a type IV discrete cosine transform.

# vDSP_DCT_III (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type III discrete cosine transform.

## Declaration

```objectivec
vDSP_DCT_III
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

### Discrete Cosine Transform Types

- [vDSP_DCT_II](ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_IV](iv.md): A constant that specifies a type IV discrete cosine transform.
