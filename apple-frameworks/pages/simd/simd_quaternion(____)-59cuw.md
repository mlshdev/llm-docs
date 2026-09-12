> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/simd/simd_quaternion(_:_:)-59cuw](https://developer.apple.com/documentation/simd/simd_quaternion(_:_:)-59cuw)

# simd_quaternion(\_:\_:) (Swift)

**Framework:** simd  
**Kind:** Function

## Declaration

```swift
func simd_quaternion(_ from: simd_half3, _ to: simd_half3) -> simd_quath
```

## Parameters

- `from`: A normalized three-element vector.
- `to`: A normalized three-element vector.

<a id="discussion"></a>

## Discussion

Construct a quaternion that rotates from one vector to another.

The rotation axis is `simd_cross(from, to)`. If `from` and `to` point in opposite directions (to within machine precision), an arbitrary rotation axis is chosen, and the angle is pi radians.

# simd_quaternion (Objective-C)

**Framework:** simd  
**Kind:** Function

## Declaration

```objectivec
static simd_quath simd_quaternion(simd_half3 from, simd_half3 to);
```

## Parameters

- `from`: A normalized three-element vector.
- `to`: A normalized three-element vector.

<a id="discussion"></a>

## Discussion

Construct a quaternion that rotates from one vector to another.

The rotation axis is `simd_cross(from, to)`. If `from` and `to` point in opposite directions (to within machine precision), an arbitrary rotation axis is chosen, and the angle is pi radians.
