> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quaternion(_:)-9c4np](https://developer.apple.com/documentation/simd/simd_quaternion(_:)-9c4np)

# simd_quaternion(\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_quaternion(_ matrix: simd_half4x4) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Construct a quaternion from a 4x4 rotation `matrix`.

The last row and column of the matrix are ignored. This function is equivalent to calling simd_quaternion with the upper-left 3x3 submatrix                .

# simd_quaternion (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_quaternion(simd_half4x4 matrix);
```

<a id="discussion"></a>

## Discussion

Construct a quaternion from a 4x4 rotation `matrix`.

The last row and column of the matrix are ignored. This function is equivalent to calling simd_quaternion with the upper-left 3x3 submatrix                .
