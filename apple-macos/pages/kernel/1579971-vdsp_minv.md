> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579971-vdsp_minv](https://developer.apple.com/documentation/kernel/1579971-vdsp_minv)

# vDSP_minv

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Calculates the minimum value in a single-precision vector.

## Declaration

```objectivec
void vDSP_minv(const float *__A, vDSP_Stride __IA, float *__C, vDSP_Length __N);
```

## Parameters

- `__A`: Single-precision real input vector.
- `__I`: Stride for `A.`
- `__C`: Output scalar.
- `__N`: The number of elements to process. If `N` is zero (`0`), this function returns `-INFINITY`.

<a id="discussion"></a>

## Discussion

This function calculates the minimum value of the first `N` elements of `A `and writes the result to `C`:

![A diagram showing the operation of the vDSP_minv function. There are three rows. The top row represents the input, vector A. The second row represents the minimum value operation. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the operation and from the operation to the output vector indicating the relationships between the input and output.](https://docs-assets.developer.apple.com/published/4b5b1320bd/ecc1829f-9f36-47ce-a44d-9aa2019feb13.png)

The operation is: 

<a id="3921209"></a>

**Listing 1**

```other
*C = +INFINITY;
for (n = 0; n < N; ++n)
    if (*C > A[n*I])
        *C = A[n*I];
```

The following code shows an example of using [vDSP_minv](https://developer.apple.com/documentation/accelerate/vdsp_minv).

<a id="3921219"></a>

**Listing 2**

```swift
let stride = vDSP_Stride(1)

let a: [Float] = [-1.5, 2.25, 3.6,
                  0.2, -0.1, -4.3]
let n = vDSP_Length(a.count)

var c: Float = .nan

vDSP_minv(a,
          stride,
          &c,
          n)

print("min", c) // Prints "min -4.3"
```
