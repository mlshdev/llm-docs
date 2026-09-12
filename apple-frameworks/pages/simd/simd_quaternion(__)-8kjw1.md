> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quaternion(_:)-8kjw1](https://developer.apple.com/documentation/simd/simd_quaternion(_:)-8kjw1)

# simd_quaternion(\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_quaternion(_ xyzr: UnsafePointer<Float16>!) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Constructs a quaternion from an array of four scalars.

Note that the imaginary part of the quaternion comes from array elements 0, 1, and 2, and the real part comes from element 3.

# simd_quaternion (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_quaternion(const _Float16 xyzr[4]);
```

<a id="discussion"></a>

## Discussion

Constructs a quaternion from an array of four scalars.

Note that the imaginary part of the quaternion comes from array elements 0, 1, and 2, and the real part comes from element 3.
