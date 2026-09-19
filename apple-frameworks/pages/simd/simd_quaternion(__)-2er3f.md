> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/simd/simd_quaternion(_:)-2er3f

# simd_quaternion(\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_quaternion(_ matrix: simd_half3x3) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Construct a quaternion from a 3x3 rotation `matrix`.

If `matrix` is not orthogonal with determinant 1, the result is undefined.

# simd_quaternion (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_quaternion(simd_half3x3 matrix);
```

<a id="discussion"></a>

## Discussion

Construct a quaternion from a 3x3 rotation `matrix`.

If `matrix` is not orthogonal with determinant 1, the result is undefined.
