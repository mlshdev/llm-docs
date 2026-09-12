> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vdivi](https://developer.apple.com/documentation/accelerate/vdsp_vdivi)

# vDSP_vdivi

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Divides two integer vectors.

## Declaration

```objectivec
extern void vDSP_vdivi(const int *__B, vDSP_Stride __IB, const int *__A, vDSP_Stride __IA, int *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__B`: Integer input vector. Note that `B` comes before `A`!
- `__IB`: Stride for `B`.
- `__A`: Integer input vector.
- `__IA`: Stride for `A`.
- `__C`: Integer output vector.
- `__IC`: Stride for `C`.
- `__N`: The number of elements to process.

<a id="Discussion"></a>

## Discussion

This function calculates the first `N` elements of `A` divided by the corresponding element in `B`, writing the result to `C`:

![A diagram showing the operation of the vDSP_vdivi function. There are three rows. The top row represents the first input, vector A. The second row represents the second input, vector B. The bottom row represents the output, vector C. The diagram has connecting lines from the input vectors to the output vector indicating the relationships between the inputs and output.](https://developer.apple.com/images/com.apple.accelerate/media-3110580@2x.png)

The operation is:

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] / B[n];
```

The following code shows an example of using [vDSP_vdiv](vdsp_vdiv.md):

```swift
let stride = vDSP_Stride(1)

let a: [Int32] = [10, 20, 30, 40, 50]
let b: [Int32] = [ 1,  2,  3,  4,  5]

let n = vDSP_Length(a.count)

var c = [Int32](repeating: 0,
                count: a.count)

vDSP_vdivi(b, stride,
           a, stride,
           &c, stride,
           n)

// Prints "[10, 10, 10, 10, 10]"
print(c)
```

## See Also

### Vector-to-Vector Integer Arithmetic

- [vDSP_vaddi](vdsp_vaddi.md): Adds two integer vectors.
- [vDSP_veqvi](vdsp_veqvi.md): Calculates bitwise logical equivalence of two integer vectors.
