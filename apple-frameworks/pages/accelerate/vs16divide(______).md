> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vs16divide(_:_:_:)](https://developer.apple.com/documentation/accelerate/vs16divide(_:_:_:))

# vS16Divide(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Signed 16-bit division.

## Declaration

```swift
func vS16Divide(_ vN: vSInt16, _ vD: vSInt16, _ vRemainder: UnsafeMutablePointer<vSInt16>?) -> vSInt16
```

## See Also

### Integer Arithmetic Functions (from vBasicOps.h)

- [vU64AddS(\_:\_:)](vu64adds%28____%29.md): Unsigned 64-bit addition with saturation (clipping).
- [vS64AddS(\_:\_:)](vs64adds%28____%29.md): Signed 64-bit addition with saturation (clipping).
- [vU128Add(\_:\_:)](vu128add%28____%29.md): Unsigned 128-bit addition (modular arithmetic).
- [vU128AddS(\_:\_:)](vu128adds%28____%29.md): Unsigned 128-bit addition with saturation (clipping).
- [vS128Add(\_:\_:)](vs128add%28____%29.md): Signed 128-bit addition (modular arithmetic).
- [vS128AddS(\_:\_:)](vs128adds%28____%29.md): Signed 128-bit addition with saturation (clipping).
- [vU64SubS(\_:\_:)](vu64subs%28____%29.md): Unsigned 64-bit subtraction with saturation (clipping).
- [vS64SubS(\_:\_:)](vs64subs%28____%29.md): Signed 64-bit subtraction with saturation (clipping).
- [vU128Sub(\_:\_:)](vu128sub%28____%29.md): Unsigned 128-bit subtraction (modular arithmetic).
- [vU128SubS(\_:\_:)](vu128subs%28____%29.md): Unsigned 128-bit subtraction with saturation (clipping).
- [vS128Sub(\_:\_:)](vs128sub%28____%29.md): Signed 128-bit subtraction (modular arithmetic).
- [vS128SubS(\_:\_:)](vs128subs%28____%29.md): Signed 128-bit subtraction with saturation (clipping).
- [vU8HalfMultiply(\_:\_:)](vu8halfmultiply%28____%29.md): Unsigned 8-bit multiplication; results are same width as multiplicands.
- [vS8HalfMultiply(\_:\_:)](vs8halfmultiply%28____%29.md): Signed 8-bit multiplication; results are same width as multiplicands.
- [vU32HalfMultiply(\_:\_:)](vu32halfmultiply%28____%29.md): Unsigned 32-bit multiplication; results are same width as multiplicands.

# vS16Divide (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Signed 16-bit division.

## Declaration

```objectivec
extern vSInt16 vS16Divide(vSInt16 vN, vSInt16 vD, vSInt16 *vRemainder);
```

## See Also

### Integer Arithmetic Functions (from vBasicOps.h)

- [vU64Add](vu64add.md): Unsigned 64-bit addition (modular arithmetic).
- [vU64AddS](vu64adds%28____%29.md): Unsigned 64-bit addition with saturation (clipping).
- [vS64Add](vs64add.md): Signed 64-bit addition (modular arithmetic).
- [vS64AddS](vs64adds%28____%29.md): Signed 64-bit addition with saturation (clipping).
- [vU128Add](vu128add%28____%29.md): Unsigned 128-bit addition (modular arithmetic).
- [vU128AddS](vu128adds%28____%29.md): Unsigned 128-bit addition with saturation (clipping).
- [vS128Add](vs128add%28____%29.md): Signed 128-bit addition (modular arithmetic).
- [vS128AddS](vs128adds%28____%29.md): Signed 128-bit addition with saturation (clipping).
- [vU64Sub](vu64sub.md): Unsigned 64-bit subtraction (modular arithmetic).
- [vU64SubS](vu64subs%28____%29.md): Unsigned 64-bit subtraction with saturation (clipping).
- [vS64Sub](vs64sub.md): Signed 64-bit subtraction (modular arithmetic).
- [vS64SubS](vs64subs%28____%29.md): Signed 64-bit subtraction with saturation (clipping).
- [vU128Sub](vu128sub%28____%29.md): Unsigned 128-bit subtraction (modular arithmetic).
- [vU128SubS](vu128subs%28____%29.md): Unsigned 128-bit subtraction with saturation (clipping).
- [vS128Sub](vs128sub%28____%29.md): Signed 128-bit subtraction (modular arithmetic).
