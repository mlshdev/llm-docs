> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579961-vdsp_vclr](https://developer.apple.com/documentation/kernel/1579961-vdsp_vclr)

# vDSP_vclr

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Populates a single-precision vector with zeros.

## Declaration

```objectivec
void vDSP_vclr(float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__C`: Single-precision real output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

The [vDSP_vclr](https://developer.apple.com/documentation/accelerate/vdsp_vclr) and [vDSP_vclrD](https://developer.apple.com/documentation/accelerate/vdsp_vclrd) functions populate a vector with zeros. 

The following code shows how to clear the array c, setting the value of each element to zero:

<a id="3921235"></a>

**Listing 1**

```swift
let n = vDSP_Length(10)
let stride = vDSP_Stride(1)

var c = [Float](repeating: .nan,
                count: Int(n))

vDSP_vclr(&c,
          stride,
          n)

// Prints "[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
print(c)
```
