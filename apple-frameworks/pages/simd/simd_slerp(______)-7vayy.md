> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_slerp(_:_:_:)-7vayy](https://developer.apple.com/documentation/simd/simd_slerp(_:_:_:)-7vayy)

# simd_slerp(\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_slerp(_ q0: simd_quath, _ q1: simd_quath, _ t: Float16) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Spherical linear interpolation along the shortest arc between quaternions `q0` and `q1`.

# simd_slerp (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_slerp(simd_quath q0, simd_quath q1, _Float16 t);
```

<a id="discussion"></a>

## Discussion

Spherical linear interpolation along the shortest arc between quaternions `q0` and `q1`.
