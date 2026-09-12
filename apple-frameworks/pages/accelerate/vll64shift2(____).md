> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vll64shift2(_:_:)](https://developer.apple.com/documentation/accelerate/vll64shift2(_:_:))

# vLL64Shift2(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

64-bit logical left shift with two shift factors.

## Declaration

```swift
func vLL64Shift2(_ vA: vUInt32, _ vShiftFactor: vUInt8) -> vUInt32
```

## Parameters

- `vA`: The vector to shift.
- `vShiftFactor`: The number of bits to shift the vector.

<a id="return-value"></a>

## Return Value

Returns the shifted vector.

<a id="Discussion"></a>

## Discussion

This function treats the vector as a pair of 64-bit values to shift.

## See Also

### Shift and Rotate Functions (from vBasicOps.h)

- [vLL128Shift(\_:\_:)](vll128shift%28____%29.md): 128-bit logical left shift.
- [vLR128Shift(\_:\_:)](vlr128shift%28____%29.md): 128-bit logical right shift.
- [vLL64Shift(\_:\_:)](vll64shift%28____%29.md): 64-bit logical left shift.
- [vLR64Shift(\_:\_:)](vlr64shift%28____%29.md): 64-bit logical right shift.
- [vLR64Shift2(\_:\_:)](vlr64shift2%28____%29.md): 64-bit logical right shift with two shift factors.
- [vA64Shift(\_:\_:)](va64shift%28____%29.md): 64-bit arithmetic (signed) shift.
- [vA64Shift2(\_:\_:)](va64shift2%28____%29.md): 64-bit arithmetic (signed) shift with two shift factors.
- [vA128Shift(\_:\_:)](va128shift%28____%29.md): 128-bit arithmetic (signed) shift.
- [vL64Rotate(\_:\_:)](vl64rotate%28____%29.md): 64-bit left rotate.
- [vR64Rotate(\_:\_:)](vr64rotate%28____%29.md): 64-bit right rotate.
- [vL64Rotate2(\_:\_:)](vl64rotate2%28____%29.md): 64-bit left rotate with two rotation factors.
- [vR64Rotate2(\_:\_:)](vr64rotate2%28____%29.md): 64-bit right rotate with two rotation factors.
- [vL128Rotate(\_:\_:)](vl128rotate%28____%29.md): 128-bit left rotate.
- [vR128Rotate(\_:\_:)](vr128rotate%28____%29.md): 128-bit right rotate.

# vLL64Shift2 (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

64-bit logical left shift with two shift factors.

## Declaration

```objectivec
extern vUInt32 vLL64Shift2(vUInt32 vA, vUInt8 vShiftFactor);
```

## Parameters

- `vA`: The vector to shift.
- `vShiftFactor`: The number of bits to shift the vector.

<a id="return-value"></a>

## Return Value

Returns the shifted vector.

<a id="Discussion"></a>

## Discussion

This function treats the vector as a pair of 64-bit values to shift.

## See Also

### Shift and Rotate Functions (from vBasicOps.h)

- [vLL128Shift](vll128shift%28____%29.md): 128-bit logical left shift.
- [vLR128Shift](vlr128shift%28____%29.md): 128-bit logical right shift.
- [vLL64Shift](vll64shift%28____%29.md): 64-bit logical left shift.
- [vLR64Shift](vlr64shift%28____%29.md): 64-bit logical right shift.
- [vLR64Shift2](vlr64shift2%28____%29.md): 64-bit logical right shift with two shift factors.
- [vA64Shift](va64shift%28____%29.md): 64-bit arithmetic (signed) shift.
- [vA64Shift2](va64shift2%28____%29.md): 64-bit arithmetic (signed) shift with two shift factors.
- [vA128Shift](va128shift%28____%29.md): 128-bit arithmetic (signed) shift.
- [vL64Rotate](vl64rotate%28____%29.md): 64-bit left rotate.
- [vR64Rotate](vr64rotate%28____%29.md): 64-bit right rotate.
- [vL64Rotate2](vl64rotate2%28____%29.md): 64-bit left rotate with two rotation factors.
- [vR64Rotate2](vr64rotate2%28____%29.md): 64-bit right rotate with two rotation factors.
- [vL128Rotate](vl128rotate%28____%29.md): 128-bit left rotate.
- [vR128Rotate](vr128rotate%28____%29.md): 128-bit right rotate.
