> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vll256shift(_:_:_:)](https://developer.apple.com/documentation/accelerate/vll256shift(_:_:_:))

# vLL256Shift(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

256-bit logical left shift.

## Declaration

```swift
func vLL256Shift(_ a: UnsafePointer<vU256>, _ shiftAmount: UInt32, _ result: UnsafeMutablePointer<vU256>)
```

## See Also

### Shifting and rotating large integers

- [vLR256Shift(\_:\_:\_:)](vlr256shift%28______%29.md): 256-bit logical right shift.
- [vA256Shift(\_:\_:\_:)](va256shift%28______%29.md): 256-bit arithmetic shift.
- [vLL512Shift(\_:\_:\_:)](vll512shift%28______%29.md): 512-bit logical left shift.
- [vLR512Shift(\_:\_:\_:)](vlr512shift%28______%29.md): 512-bit logical right shift .
- [vA512Shift(\_:\_:\_:)](va512shift%28______%29.md): 512-bit arithmetic shift.
- [vLL1024Shift(\_:\_:\_:)](vll1024shift%28______%29.md): 1024-bit logical left shift.
- [vLR1024Shift(\_:\_:\_:)](vlr1024shift%28______%29.md): 1024-bit logical right shift .
- [vA1024Shift(\_:\_:\_:)](va1024shift%28______%29.md): 1024-bit arithmetic shift.
- [vL256Rotate(\_:\_:\_:)](vl256rotate%28______%29.md): 256-bit left rotate.
- [vR256Rotate(\_:\_:\_:)](vr256rotate%28______%29.md): 256-bit right rotate.
- [vL512Rotate(\_:\_:\_:)](vl512rotate%28______%29.md): 512-bit left rotate.
- [vR512Rotate(\_:\_:\_:)](vr512rotate%28______%29.md): 512-bit right rotate.
- [vL1024Rotate(\_:\_:\_:)](vl1024rotate%28______%29.md): 1024-bit left rotate.
- [vR1024Rotate(\_:\_:\_:)](vr1024rotate%28______%29.md): 1024-bit right rotate.

# vLL256Shift (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

256-bit logical left shift.

## Declaration

```objectivec
extern void vLL256Shift(const vU256 *a, uint32_t shiftAmount, vU256 *result);
```

## See Also

### Shifting and rotating large integers

- [vLR256Shift](vlr256shift%28______%29.md): 256-bit logical right shift.
- [vA256Shift](va256shift%28______%29.md): 256-bit arithmetic shift.
- [vLL512Shift](vll512shift%28______%29.md): 512-bit logical left shift.
- [vLR512Shift](vlr512shift%28______%29.md): 512-bit logical right shift .
- [vA512Shift](va512shift%28______%29.md): 512-bit arithmetic shift.
- [vLL1024Shift](vll1024shift%28______%29.md): 1024-bit logical left shift.
- [vLR1024Shift](vlr1024shift%28______%29.md): 1024-bit logical right shift .
- [vA1024Shift](va1024shift%28______%29.md): 1024-bit arithmetic shift.
- [vL256Rotate](vl256rotate%28______%29.md): 256-bit left rotate.
- [vR256Rotate](vr256rotate%28______%29.md): 256-bit right rotate.
- [vL512Rotate](vl512rotate%28______%29.md): 512-bit left rotate.
- [vR512Rotate](vr512rotate%28______%29.md): 512-bit right rotate.
- [vL1024Rotate](vl1024rotate%28______%29.md): 1024-bit left rotate.
- [vR1024Rotate](vr1024rotate%28______%29.md): 1024-bit right rotate.
