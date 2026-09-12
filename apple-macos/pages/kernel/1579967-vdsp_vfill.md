> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1579967-vdsp_vfill](https://developer.apple.com/documentation/kernel/1579967-vdsp_vfill)

# vDSP_vfill

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Populates a single-precision vector with a specified scalar value.

## Declaration

```objectivec
void vDSP_vfill(const float *__A, float *__C, vDSP_Stride __IC, vDSP_Length __N);
```

## Parameters

- `__A`: Pointer to single-precision real input scalar.
- `__C`: Single-precision real output vector.
- `__IC`: Address stride for `C`.
- `__N`: The number of elements to process.

<a id="discussion"></a>

## Discussion

The functions in this group populate a vector with a specified scalar value. 

The following code shows how to clear the array c, setting the value of each element to pi:

<a id="3921239"></a>

**Listing 1**

```swift
let n = vDSP_Length(10)
let stride = vDSP_Stride(1)

var a = Float.pi

var c = [Float](repeating: .nan,
                count: Int(n))

vDSP_vfill(&a,
           &c,
           stride,
           n)

// Prints "[3.1415925, 3.1415925, 3.1415925,
//          3.1415925, 3.1415925, 3.1415925,
//          3.1415925, 3.1415925, 3.1415925,
//          3.1415925]"
print(c)
```
