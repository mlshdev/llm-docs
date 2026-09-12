> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dct_type/iv](https://developer.apple.com/documentation/accelerate/vdsp_dct_type/iv)

# vDSP_DCT_Type.IV (Swift)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type IV discrete cosine transform.

## Declaration

```swift
case IV
```

<a id="Discussion"></a>

## Discussion

The type-IV DCT uses the following operation for a discrete cosine transform:

```
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = sum(Ir[j] * cos((k+1/2) * (j+1/2) * pi / N, 0 <= j < N)
```

## See Also

### Discrete Cosine Transform Types

- [vDSP_DCT_Type.II](ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_Type.III](iii.md): A constant that specifies a type III discrete cosine transform.

# vDSP_DCT_IV (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that specifies a type IV discrete cosine transform.

## Declaration

```objectivec
vDSP_DCT_IV
```

<a id="Discussion"></a>

## Discussion

The type-IV DCT uses the following operation for a discrete cosine transform:

```
// `N` is the length given in the setup.
// `h` is the input array that contains real numbers.
// `H` is the output array that contains real numbers.

For 0 <= k < N
    Or[k] = sum(Ir[j] * cos((k+1/2) * (j+1/2) * pi / N, 0 <= j < N)
```

## See Also

### Discrete Cosine Transform Types

- [vDSP_DCT_II](ii.md): A constant that specifies a type II discrete cosine transform.
- [vDSP_DCT_III](iii.md): A constant that specifies a type III discrete cosine transform.
