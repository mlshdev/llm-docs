> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_ypcbcrtoargbmatrix/init(yp:cr_r:cr_g:cb_g:cb_b:)](https://developer.apple.com/documentation/accelerate/vimage_ypcbcrtoargbmatrix/init(yp:cr_r:cr_g:cb_g:cb_b:))

# init(Yp:Cr_R:Cr_G:Cb_G:Cb_B:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3 x 3 matrix for converting Y’CbCr signals to RGB.

## Declaration

```swift
init(Yp: Float, Cr_R: Float, Cr_G: Float, Cb_G: Float, Cb_B: Float)
```

## Parameters

- `Yp`: The `Yp` in the conversion matrix.
- `Cr_R`: The `Cr_R` in the conversion matrix.
- `Cr_G`: The `Cr_G` in the conversion matrix.
- `Cb_G`: The `Cb_G` in the conversion matrix.
- `Cb_B`: The `Cb_B` in the conversion matrix.

<a id="return-value"></a>

## Return Value

A 3 x 3 matrix for converting Y’CbCr signals to RGB.

<a id="Discussion"></a>

## Discussion

The vImage library uses this matrix to convert from YpCbCr to RGB using the following multiplication:

```
                    | R |   | Yp    0     Cr_R |   | Y' |
                    | G | = | Yp   Cb_G   Cr_G | * | Cb |
                    | B |   | Yp   Cb_B     0  |   | Cr |
```

## See Also

### Creating a conversion matrix

- [init()](init%28%29.md): Creates a 3 x 3 zero matrix for converting Y’CbCr signals to RGB.
