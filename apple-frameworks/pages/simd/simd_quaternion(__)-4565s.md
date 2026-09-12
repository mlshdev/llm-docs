> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quaternion(_:)-4565s](https://developer.apple.com/documentation/simd/simd_quaternion(_:)-4565s)

# simd_quaternion(\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_quaternion(_ xyzr: simd_half4) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Constructs a quaternion from a four-element vector.

Note that the imaginary (vector) part of the quaternion comes from lanes 0, 1, and 2 of the vector, and the real (scalar) part comes from lane 3.

# simd_quaternion (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_quaternion(simd_half4 xyzr);
```

<a id="discussion"></a>

## Discussion

Constructs a quaternion from a four-element vector.

Note that the imaginary (vector) part of the quaternion comes from lanes 0, 1, and 2 of the vector, and the real (scalar) part comes from lane 3.
