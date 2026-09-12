> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1532216-vdsp_vabs](https://developer.apple.com/documentation/kernel/1532216-vdsp_vabs)

# vDSP_vabs

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Calculates the absolute value of each element in the supplied single-precision vector using the specified stride.

## Declaration

```objectivec
void vDSP_vabs(const float *__A, vDSP_Stride __IA, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: The single-precision real input vector.
- `__IA`: The stride for input vector `A`.
- `__C`: The single-precision real output vector.
- `__IC`: The stride for output vector `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

This function performs the following operation to write the absolute values of the input elements to the corresponding output elements:

![mathematical formula](https://docs-assets.developer.apple.com/published/097ccd4f03/vdsp_81_2x_1efdff35-5ea0-405a-b1a9-9d9a4c7eec65.png)
