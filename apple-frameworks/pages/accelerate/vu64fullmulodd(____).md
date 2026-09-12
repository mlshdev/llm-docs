> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vu64fullmulodd(_:_:)](https://developer.apple.com/documentation/accelerate/vu64fullmulodd(_:_:))

# vU64FullMulOdd(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.  Note the big-endian convention: the leftmost element is element 0.

## Declaration

```swift
func vU64FullMulOdd(_ vA: vUInt32, _ vB: vUInt32) -> vUInt32
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

# vU64FullMulOdd (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** macOS 10.0+

Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.  Note the big-endian convention: the leftmost element is element 0.

## Declaration

```objectivec
extern vUInt32 vU64FullMulOdd(vUInt32 vA, vUInt32 vB);
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
