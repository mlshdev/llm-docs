> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vfilli](https://developer.apple.com/documentation/accelerate/vdsp_vfilli)

# vDSP_vfilli

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Populates an integer vector with a specified scalar value.

## Declaration

```objectivec
extern void vDSP_vfilli(const int *__A, int *__C, vDSP_Stride __IC, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

The functions in this group populate a vector with a specified scalar value.

The following code shows how to clear the array c, setting the value of each element to pi:

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

## See Also

### Filling Vectors with a Single Scalar Value

- [vDSP_vfill](vdsp_vfill.md): Populates a single-precision vector with a specified scalar value.
- [vDSP_vfillD](vdsp_vfilld.md): Populates a double-precision vector with a specified scalar value.
- [vDSP_zvfill](vdsp_zvfill.md): Populates a complex single-precision vector with a specified scalar value.
- [vDSP_zvfillD](vdsp_zvfilld.md): Populates a complex double-precision vector with a specified scalar value.
