> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579986-vdsp_svdiv](https://developer.apple.com/documentation/kernel/1579986-vdsp_svdiv)

# vDSP_svdiv

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Divides a single-precision scalar value by a single-precision vector.

## Declaration

```objectivec
void vDSP_svdiv(const float *__A, const float *__B, vDSP_Stride __IB, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Pointer to single-precision real input scalar.
- `__B`: Single-precision real input vector.
- `__IB`: Stride for `B`.
- `__C`: Single-precision real output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

This function calculates the scalar value `A` divied by the first `N` elements of `B`, writing the result to `C`:

![A diagram showing the operation of the vDSP_svdiv function. There are three rows. The top row represents the first input, scalar A. The second row represents the second input, vector B. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the output vector indicating the relationships between the inputs and output.](https://docs-assets.developer.apple.com/published/ee673c6575/fd50e91a-376d-4312-8a10-bde66ff5d1f7.png)

The operation is:

<a id="3921184"></a>

**Listing 1**

```swift
 for (n = 0; n < N; ++n)
    C[n] = A / B[n];
```

The following code shows an example of using [vDSP_vsdiv](https://developer.apple.com/documentation/accelerate/vdsp_vsdiv):

<a id="3921199"></a>

**Listing 2**

```swift
let stride = vDSP_Stride(1)

var a: Float = 2
let b: [Float] = [1, 2, 4, 5]

let n = vDSP_Length(b.count)

var c = [Float](repeating: 0,
                count: b.count)

vDSP_svdiv(&a,
           b, stride,
           &c, stride,
           n)

// Prints "[2, 1, 0.5, 0.4]"
print(c)
```
