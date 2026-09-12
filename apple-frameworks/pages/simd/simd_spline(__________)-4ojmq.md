> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_spline(_:_:_:_:_:)-4ojmq](https://developer.apple.com/documentation/simd/simd_spline(_:_:_:_:_:)-4ojmq)

# simd_spline(\_:\_:\_:\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_spline(_ q0: simd_quath, _ q1: simd_quath, _ q2: simd_quath, _ q3: simd_quath, _ t: Float16) -> simd_quath
```

<a id="discussion"></a>

## Discussion

Interpolate between quaternions along a spherical cubic spline.

The function interpolates between q1 and q2. q0 is the left endpoint of the previous interval, and q3 is the right endpoint of the next interval. Use this function to smoothly interpolate between a sequence of rotations.

# simd_spline (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_spline(simd_quath q0, simd_quath q1, simd_quath q2, simd_quath q3, _Float16 t);
```

<a id="discussion"></a>

## Discussion

Interpolate between quaternions along a spherical cubic spline.

The function interpolates between q1 and q2. q0 is the left endpoint of the previous interval, and q3 is the right endpoint of the next interval. Use this function to smoothly interpolate between a sequence of rotations.
