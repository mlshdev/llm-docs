> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vbasicops](https://developer.apple.com/documentation/accelerate/vbasicops)

# vBasicOps (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform basic arithmetic and logical functions on 128-bit vectors.

<a id="overview"></a>

## Overview

vBasicOps.h declares a set of basic arithmetic and logical functions on 128-bit vectors, using the integer types from vecLibTypes.h.

The function names begin with “v,” followed by a mnemonic for the type of operation, e.g. “S” or “U” for signed or unsigned, then the width of the operation, then the name of the operation. For example, `vS8Divide` performs division of signed 8-bit values packed into 128-bit vectors.

## Topics

### Shift and Rotate Functions (from vBasicOps.h)

- [vLL128Shift(\_:\_:)](vll128shift%28____%29.md): 128-bit logical left shift.
- [vLR128Shift(\_:\_:)](vlr128shift%28____%29.md): 128-bit logical right shift.
- [vLL64Shift(\_:\_:)](vll64shift%28____%29.md): 64-bit logical left shift.
- [vLL64Shift2(\_:\_:)](vll64shift2%28____%29.md): 64-bit logical left shift with two shift factors.
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
- [vS32HalfMultiply(\_:\_:)](vs32halfmultiply%28____%29.md): Signed 32-bit multiplication; results are same width as multiplicands.
- [vU64HalfMultiply(\_:\_:)](vu64halfmultiply%28____%29.md): Unsigned 64-bit multiplication; results are same width as multiplicands.
- [vS64HalfMultiply(\_:\_:)](vs64halfmultiply%28____%29.md): Signed 64-bit multiplication; results are same width as multiplicands.
- [vU128HalfMultiply(\_:\_:)](vu128halfmultiply%28____%29.md): Unsigned 128-bit multiplication; results are same width as multiplicands.
- [vS128HalfMultiply(\_:\_:)](vs128halfmultiply%28____%29.md): Signed 128-bit multiplication; results are same width as multiplicands.
- [vU32FullMulEven(\_:\_:)](vu32fullmuleven%28____%29.md): Unsigned 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU32FullMulOdd(\_:\_:)](vu32fullmulodd%28____%29.md): Unsigned 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS32FullMulEven(\_:\_:)](vs32fullmuleven%28____%29.md): Signed 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS32FullMulOdd(\_:\_:)](vs32fullmulodd%28____%29.md): Signed 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU64FullMulEven(\_:\_:)](vu64fullmuleven%28____%29.md): Unsigned 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU64FullMulOdd(\_:\_:)](vu64fullmulodd%28____%29.md): Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS64FullMulEven(\_:\_:)](vs64fullmuleven%28____%29.md): Signed 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS64FullMulOdd(\_:\_:)](vs64fullmulodd%28____%29.md): Signed 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU8Divide(\_:\_:\_:)](vu8divide%28______%29.md): Unsigned 8-bit division.
- [vS8Divide(\_:\_:\_:)](vs8divide%28______%29.md): Signed 8-bit division.
- [vU16Divide(\_:\_:\_:)](vu16divide%28______%29.md): Unsigned 16-bit division.
- [vS16Divide(\_:\_:\_:)](vs16divide%28______%29.md): Signed 16-bit division.
- [vU32Divide(\_:\_:\_:)](vu32divide%28______%29.md): Unsigned 32-bit division.
- [vS32Divide(\_:\_:\_:)](vs32divide%28______%29.md): Signed 32-bit division.
- [vU64Divide(\_:\_:\_:)](vu64divide%28______%29.md): Unsigned 64-bit division.
- [vS64Divide(\_:\_:\_:)](vs64divide%28______%29.md): Signed 64-bit division.
- [vU128Divide(\_:\_:\_:)](vu128divide%28______%29.md): Unsigned 128-bit division.
- [vS128Divide(\_:\_:\_:)](vs128divide%28______%29.md): Signed 128-bit division.

# vBasicOps (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform basic arithmetic and logical functions on 128-bit vectors.

<a id="overview"></a>

## Overview

vBasicOps.h declares a set of basic arithmetic and logical functions on 128-bit vectors, using the integer types from vecLibTypes.h.

The function names begin with “v,” followed by a mnemonic for the type of operation, e.g. “S” or “U” for signed or unsigned, then the width of the operation, then the name of the operation. For example, `vS8Divide` performs division of signed 8-bit values packed into 128-bit vectors.

## Topics

### Shift and Rotate Functions (from vBasicOps.h)

- [vLL128Shift](vll128shift%28____%29.md): 128-bit logical left shift.
- [vLR128Shift](vlr128shift%28____%29.md): 128-bit logical right shift.
- [vLL64Shift](vll64shift%28____%29.md): 64-bit logical left shift.
- [vLL64Shift2](vll64shift2%28____%29.md): 64-bit logical left shift with two shift factors.
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
- [vS128SubS](vs128subs%28____%29.md): Signed 128-bit subtraction with saturation (clipping).
- [vU8HalfMultiply](vu8halfmultiply%28____%29.md): Unsigned 8-bit multiplication; results are same width as multiplicands.
- [vS8HalfMultiply](vs8halfmultiply%28____%29.md): Signed 8-bit multiplication; results are same width as multiplicands.
- [vU16HalfMultiply](vu16halfmultiply.md): Unsigned 16-bit multiplication; results are same width as multiplicands.
- [vS16HalfMultiply](vs16halfmultiply.md): Signed 16-bit multiplication; results are same width as multiplicands.
- [vU32HalfMultiply](vu32halfmultiply%28____%29.md): Unsigned 32-bit multiplication; results are same width as multiplicands.
- [vS32HalfMultiply](vs32halfmultiply%28____%29.md): Signed 32-bit multiplication; results are same width as multiplicands.
- [vU64HalfMultiply](vu64halfmultiply%28____%29.md): Unsigned 64-bit multiplication; results are same width as multiplicands.
- [vS64HalfMultiply](vs64halfmultiply%28____%29.md): Signed 64-bit multiplication; results are same width as multiplicands.
- [vU128HalfMultiply](vu128halfmultiply%28____%29.md): Unsigned 128-bit multiplication; results are same width as multiplicands.
- [vS128HalfMultiply](vs128halfmultiply%28____%29.md): Signed 128-bit multiplication; results are same width as multiplicands.
- [vU32FullMulEven](vu32fullmuleven%28____%29.md): Unsigned 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU32FullMulOdd](vu32fullmulodd%28____%29.md): Unsigned 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS32FullMulEven](vs32fullmuleven%28____%29.md): Signed 32-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS32FullMulOdd](vs32fullmulodd%28____%29.md): Signed 32-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU64FullMulEven](vu64fullmuleven%28____%29.md): Unsigned 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU64FullMulOdd](vu64fullmulodd%28____%29.md): Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS64FullMulEven](vs64fullmuleven%28____%29.md): Signed 64-bit multiplication; results are twice as wide as multiplicands, even-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vS64FullMulOdd](vs64fullmulodd%28____%29.md): Signed 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used. Note the big-endian convention: the leftmost element is element 0.
- [vU8Divide](vu8divide%28______%29.md): Unsigned 8-bit division.
- [vS8Divide](vs8divide%28______%29.md): Signed 8-bit division.
- [vU16Divide](vu16divide%28______%29.md): Unsigned 16-bit division.
- [vS16Divide](vs16divide%28______%29.md): Signed 16-bit division.
- [vU32Divide](vu32divide%28______%29.md): Unsigned 32-bit division.
- [vS32Divide](vs32divide%28______%29.md): Signed 32-bit division.
- [vU64Divide](vu64divide%28______%29.md): Unsigned 64-bit division.
- [vS64Divide](vs64divide%28______%29.md): Signed 64-bit division.
- [vU128Divide](vu128divide%28______%29.md): Unsigned 128-bit division.
- [vS128Divide](vs128divide%28______%29.md): Signed 128-bit division.
