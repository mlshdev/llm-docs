> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vbignum](https://developer.apple.com/documentation/accelerate/vbignum)

# vBigNum (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Perform arithmetic and logical functions on large integers.

<a id="overview"></a>

## Overview

The vBigNum module provides arithmetic and logical operations on large integers with lengths of 128, 256, 512, or 1024 bits.

vBigNum includes data types that represent large integer quantities, such as [vS512](vs512.md), which defines a 512-bit signed integer. The function names begin with the data type, followed by the name of the operation. For example, [vS512Add(\_:\_:\_:)](vs512add%28______%29.md) performs the addition of two 512-bit signed integers.

## Topics

### Shifting and rotating large integers

- [vLL256Shift(\_:\_:\_:)](vll256shift%28______%29.md): 256-bit logical left shift.
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

### Performing arithmetic operations on large integers

- [vU256Add(\_:\_:\_:)](vu256add%28______%29.md): Unsigned 256-bit addition (modular arithmetic).
- [vU256AddS(\_:\_:\_:)](vu256adds%28______%29.md): Unsigned 256-bit addition with saturation (clipping).
- [vS256Add(\_:\_:\_:)](vs256add%28______%29.md): Signed 256-bit addition (modular arithmetic).
- [vS256AddS(\_:\_:\_:)](vs256adds%28______%29.md): Signed 256-bit addition with saturation (clipping).
- [vU512Add(\_:\_:\_:)](vu512add%28______%29.md): Unsigned 512-bit addition (modular arithmetic).
- [vU512AddS(\_:\_:\_:)](vu512adds%28______%29.md): Unsigned 512-bit addition with saturation (clipping).
- [vS512Add(\_:\_:\_:)](vs512add%28______%29.md): Signed 512-bit addition (modular arithmetic).
- [vS512AddS(\_:\_:\_:)](vs512adds%28______%29.md): Signed 512-bit addition with saturation (clipping).
- [vU1024Add(\_:\_:\_:)](vu1024add%28______%29.md): Unsigned 1024-bit addition (modular arithmetic).
- [vU1024AddS(\_:\_:\_:)](vu1024adds%28______%29.md): Unsigned 1024-bit addition with saturation (clipping).
- [vS1024Add(\_:\_:\_:)](vs1024add%28______%29.md): Signed 1024-bit addition (modular arithmetic).
- [vS1024AddS(\_:\_:\_:)](vs1024adds%28______%29.md): Signed 1024-bit addition with saturation (clipping).
- [vU256Sub(\_:\_:\_:)](vu256sub%28______%29.md): Unsigned 256-bit subtraction (modular arithmetic).
- [vU256SubS(\_:\_:\_:)](vu256subs%28______%29.md): Unsigned 256-bit subtraction with saturation (clipping).
- [vS256Sub(\_:\_:\_:)](vs256sub%28______%29.md): Signed 256-bit subtraction (modular arithmetic).
- [vS256SubS(\_:\_:\_:)](vs256subs%28______%29.md): Signed 256-bit subtraction with saturation (clipping).
- [vU512Sub(\_:\_:\_:)](vu512sub%28______%29.md): Unsigned 512-bit subtraction (modular arithmetic).
- [vU512SubS(\_:\_:\_:)](vu512subs%28______%29.md): Unsigned 512-bit subtraction with saturation (clipping).
- [vS512Sub(\_:\_:\_:)](vs512sub%28______%29.md): Signed 512-bit subtraction (modular arithmetic).
- [vS512SubS(\_:\_:\_:)](vs512subs%28______%29.md): Signed 512-bit subtraction with saturation (clipping).
- [vU1024Sub(\_:\_:\_:)](vu1024sub%28______%29.md): Unsigned 1024-bit subtraction (modular arithmetic).
- [vU1024SubS(\_:\_:\_:)](vu1024subs%28______%29.md): Unsigned 1024-bit subtraction with saturation (clipping).
- [vS1024Sub(\_:\_:\_:)](vs1024sub%28______%29.md): Signed 1024-bit subtraction (modular arithmetic).
- [vS1024SubS(\_:\_:\_:)](vs1024subs%28______%29.md): Signed 1024-bit subtraction with saturation (clipping).
- [vU64Neg(\_:)](vu64neg%28__%29.md): Unsigned 64-bit negation.
- [vU128Neg(\_:)](vu128neg%28__%29.md): Unsigned 128-bit negation.
- [vU256Neg(\_:\_:)](vu256neg%28____%29.md): Unsigned 256-bit negation.
- [vS64Neg(\_:)](vs64neg%28__%29.md): Signed 64-bit negation.
- [vS128Neg(\_:)](vs128neg%28__%29.md): Signed 128-bit negation.
- [vS256Neg(\_:\_:)](vs256neg%28____%29.md): Signed 256-bit negation.
- [vU512Neg(\_:\_:)](vu512neg%28____%29.md): Unsigned 512-bit negation.
- [vS512Neg(\_:\_:)](vs512neg%28____%29.md): Signed 512-bit negation.
- [vU1024Neg(\_:\_:)](vu1024neg%28____%29.md): Unsigned 1024-bit negation.
- [vS1024Neg(\_:\_:)](vs1024neg%28____%29.md): Signed 1024-bit negation.
- [vU256Mod(\_:\_:\_:)](vu256mod%28______%29.md): Unsigned 256-bit mod.
- [vS256Mod(\_:\_:\_:)](vs256mod%28______%29.md): Signed 256-bit mod.
- [vU512Mod(\_:\_:\_:)](vu512mod%28______%29.md): Unsigned 512-bit mod.
- [vS512Mod(\_:\_:\_:)](vs512mod%28______%29.md): Signed 512-bit mod.
- [vU1024Mod(\_:\_:\_:)](vu1024mod%28______%29.md): Unsigned 1024-bit mod.
- [vS1024Mod(\_:\_:\_:)](vs1024mod%28______%29.md): Signed 256-bit Mod.
- [vU256HalfMultiply(\_:\_:\_:)](vu256halfmultiply%28______%29.md): Unsigned 256-bit multiplication; result is the same width as multiplicands.
- [vS256HalfMultiply(\_:\_:\_:)](vs256halfmultiply%28______%29.md): Signed 256-bit multiplication; result is the same width as multiplicands.
- [vU512HalfMultiply(\_:\_:\_:)](vu512halfmultiply%28______%29.md): Unsigned 512-bit multiplication; result is the same width as multiplicands.
- [vS512HalfMultiply(\_:\_:\_:)](vs512halfmultiply%28______%29.md): Signed 512-bit multiplication; result is the same width as multiplicands.
- [vU1024HalfMultiply(\_:\_:\_:)](vu1024halfmultiply%28______%29.md): Unsigned 1024-bit multiplication; result is the same width as multiplicands.
- [vS1024HalfMultiply(\_:\_:\_:)](vs1024halfmultiply%28______%29.md): Signed 1024-bit multiplication; result is the same width as multiplicands.
- [vU128FullMultiply(\_:\_:\_:)](vu128fullmultiply%28______%29.md): Unsigned 128-bit multiplication; result is twice as wide as multiplicands.
- [vS128FullMultiply(\_:\_:\_:)](vs128fullmultiply%28______%29.md): Signed 128-bit multiplication; result is twice as wide as multiplicands.
- [vU256FullMultiply(\_:\_:\_:)](vu256fullmultiply%28______%29.md): Unsigned 256-bit multiplication; result is twice as wide as multiplicands.
- [vS256FullMultiply(\_:\_:\_:)](vs256fullmultiply%28______%29.md): Signed 256-bit multiplication; result is twice as wide as multiplicands.
- [vU512FullMultiply(\_:\_:\_:)](vu512fullmultiply%28______%29.md): Unsigned 512-bit multiplication; result is twice as wide as multiplicands.
- [vS512FullMultiply(\_:\_:\_:)](vs512fullmultiply%28______%29.md): Signed 512-bit multiplication; result is twice as wide as multiplicands.
- [vU256Divide(\_:\_:\_:\_:)](vu256divide%28________%29.md): Unsigned 256-bit division.
- [vS256Divide(\_:\_:\_:\_:)](vs256divide%28________%29.md): Computes the signed 256-bit division.
- [vU512Divide(\_:\_:\_:\_:)](vu512divide%28________%29.md): Computes the unsigned 512-bit division.
- [vS512Divide(\_:\_:\_:\_:)](vs512divide%28________%29.md): Signed 512-bit division.
- [vU1024Divide(\_:\_:\_:\_:)](vu1024divide%28________%29.md): Unsigned 1024-bit division.
- [vS1024Divide(\_:\_:\_:\_:)](vs1024divide%28________%29.md): Signed 1024-bit division.

### Data types

- [vU128](vu128.md): A union containing one `vUInt32` vector or four 32-bit integers, representing a 128-bit unsigned integer.
- [vS128](vs128.md): A union containing one `vSInt32` vector or four 32-bit integers, representing a 128-bit signed integer.
- [vU256](vu256.md): A union containing an array or structure of two `vUInt32` vectors or eight 32-bit integers, representing a 256-bit unsigned integer.
- [vS256](vs256.md): A union containing an array or structure of two `vUInt32` vectors or eight 32-bit integers, representing a 256-bit signed integer.
- [vU512](vu512.md): A union containing an array or structure of four `vUInt32` vectors or sixteen 32-bit integers, representing a 256-bit unsigned integer.
- [vS512](vs512.md): A union containing an array or structure of four `vUInt32` vectors or sixteen 32-bit integers, representing a 256-bit signed integer.
- [vU1024](vu1024.md): A union containing an array or structure of eight `vUInt32` vectors or thirty-two 32-bit integers, representing a 1024-bit unsigned integer.
- [vS1024](vs1024.md): A union containing an array or structure of eight `vUInt32` vectors or thirty-two 32-bit integers, representing a 1024-bit signed integer.

# vBigNum (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Perform arithmetic and logical functions on large integers.

<a id="overview"></a>

## Overview

The vBigNum module provides arithmetic and logical operations on large integers with lengths of 128, 256, 512, or 1024 bits.

vBigNum includes data types that represent large integer quantities, such as [vS512](vs512.md), which defines a 512-bit signed integer. The function names begin with the data type, followed by the name of the operation. For example, [vS512Add](vs512add%28______%29.md) performs the addition of two 512-bit signed integers.

## Topics

### Shifting and rotating large integers

- [vLL256Shift](vll256shift%28______%29.md): 256-bit logical left shift.
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

### Performing arithmetic operations on large integers

- [vU256Add](vu256add%28______%29.md): Unsigned 256-bit addition (modular arithmetic).
- [vU256AddS](vu256adds%28______%29.md): Unsigned 256-bit addition with saturation (clipping).
- [vS256Add](vs256add%28______%29.md): Signed 256-bit addition (modular arithmetic).
- [vS256AddS](vs256adds%28______%29.md): Signed 256-bit addition with saturation (clipping).
- [vU512Add](vu512add%28______%29.md): Unsigned 512-bit addition (modular arithmetic).
- [vU512AddS](vu512adds%28______%29.md): Unsigned 512-bit addition with saturation (clipping).
- [vS512Add](vs512add%28______%29.md): Signed 512-bit addition (modular arithmetic).
- [vS512AddS](vs512adds%28______%29.md): Signed 512-bit addition with saturation (clipping).
- [vU1024Add](vu1024add%28______%29.md): Unsigned 1024-bit addition (modular arithmetic).
- [vU1024AddS](vu1024adds%28______%29.md): Unsigned 1024-bit addition with saturation (clipping).
- [vS1024Add](vs1024add%28______%29.md): Signed 1024-bit addition (modular arithmetic).
- [vS1024AddS](vs1024adds%28______%29.md): Signed 1024-bit addition with saturation (clipping).
- [vU256Sub](vu256sub%28______%29.md): Unsigned 256-bit subtraction (modular arithmetic).
- [vU256SubS](vu256subs%28______%29.md): Unsigned 256-bit subtraction with saturation (clipping).
- [vS256Sub](vs256sub%28______%29.md): Signed 256-bit subtraction (modular arithmetic).
- [vS256SubS](vs256subs%28______%29.md): Signed 256-bit subtraction with saturation (clipping).
- [vU512Sub](vu512sub%28______%29.md): Unsigned 512-bit subtraction (modular arithmetic).
- [vU512SubS](vu512subs%28______%29.md): Unsigned 512-bit subtraction with saturation (clipping).
- [vS512Sub](vs512sub%28______%29.md): Signed 512-bit subtraction (modular arithmetic).
- [vS512SubS](vs512subs%28______%29.md): Signed 512-bit subtraction with saturation (clipping).
- [vU1024Sub](vu1024sub%28______%29.md): Unsigned 1024-bit subtraction (modular arithmetic).
- [vU1024SubS](vu1024subs%28______%29.md): Unsigned 1024-bit subtraction with saturation (clipping).
- [vS1024Sub](vs1024sub%28______%29.md): Signed 1024-bit subtraction (modular arithmetic).
- [vS1024SubS](vs1024subs%28______%29.md): Signed 1024-bit subtraction with saturation (clipping).
- [vU64Neg](vu64neg%28__%29.md): Unsigned 64-bit negation.
- [vU128Neg](vu128neg%28__%29.md): Unsigned 128-bit negation.
- [vU256Neg](vu256neg%28____%29.md): Unsigned 256-bit negation.
- [vS64Neg](vs64neg%28__%29.md): Signed 64-bit negation.
- [vS128Neg](vs128neg%28__%29.md): Signed 128-bit negation.
- [vS256Neg](vs256neg%28____%29.md): Signed 256-bit negation.
- [vU512Neg](vu512neg%28____%29.md): Unsigned 512-bit negation.
- [vS512Neg](vs512neg%28____%29.md): Signed 512-bit negation.
- [vU1024Neg](vu1024neg%28____%29.md): Unsigned 1024-bit negation.
- [vS1024Neg](vs1024neg%28____%29.md): Signed 1024-bit negation.
- [vU256Mod](vu256mod%28______%29.md): Unsigned 256-bit mod.
- [vS256Mod](vs256mod%28______%29.md): Signed 256-bit mod.
- [vU512Mod](vu512mod%28______%29.md): Unsigned 512-bit mod.
- [vS512Mod](vs512mod%28______%29.md): Signed 512-bit mod.
- [vU1024Mod](vu1024mod%28______%29.md): Unsigned 1024-bit mod.
- [vS1024Mod](vs1024mod%28______%29.md): Signed 256-bit Mod.
- [vU256HalfMultiply](vu256halfmultiply%28______%29.md): Unsigned 256-bit multiplication; result is the same width as multiplicands.
- [vS256HalfMultiply](vs256halfmultiply%28______%29.md): Signed 256-bit multiplication; result is the same width as multiplicands.
- [vU512HalfMultiply](vu512halfmultiply%28______%29.md): Unsigned 512-bit multiplication; result is the same width as multiplicands.
- [vS512HalfMultiply](vs512halfmultiply%28______%29.md): Signed 512-bit multiplication; result is the same width as multiplicands.
- [vU1024HalfMultiply](vu1024halfmultiply%28______%29.md): Unsigned 1024-bit multiplication; result is the same width as multiplicands.
- [vS1024HalfMultiply](vs1024halfmultiply%28______%29.md): Signed 1024-bit multiplication; result is the same width as multiplicands.
- [vU128FullMultiply](vu128fullmultiply%28______%29.md): Unsigned 128-bit multiplication; result is twice as wide as multiplicands.
- [vS128FullMultiply](vs128fullmultiply%28______%29.md): Signed 128-bit multiplication; result is twice as wide as multiplicands.
- [vU256FullMultiply](vu256fullmultiply%28______%29.md): Unsigned 256-bit multiplication; result is twice as wide as multiplicands.
- [vS256FullMultiply](vs256fullmultiply%28______%29.md): Signed 256-bit multiplication; result is twice as wide as multiplicands.
- [vU512FullMultiply](vu512fullmultiply%28______%29.md): Unsigned 512-bit multiplication; result is twice as wide as multiplicands.
- [vS512FullMultiply](vs512fullmultiply%28______%29.md): Signed 512-bit multiplication; result is twice as wide as multiplicands.
- [vU256Divide](vu256divide%28________%29.md): Unsigned 256-bit division.
- [vS256Divide](vs256divide%28________%29.md): Computes the signed 256-bit division.
- [vU512Divide](vu512divide%28________%29.md): Computes the unsigned 512-bit division.
- [vS512Divide](vs512divide%28________%29.md): Signed 512-bit division.
- [vU1024Divide](vu1024divide%28________%29.md): Unsigned 1024-bit division.
- [vS1024Divide](vs1024divide%28________%29.md): Signed 1024-bit division.

### Data types

- [vU128](vu128.md): A union containing one `vUInt32` vector or four 32-bit integers, representing a 128-bit unsigned integer.
- [vS128](vs128.md): A union containing one `vSInt32` vector or four 32-bit integers, representing a 128-bit signed integer.
- [vU256](vu256.md): A union containing an array or structure of two `vUInt32` vectors or eight 32-bit integers, representing a 256-bit unsigned integer.
- [vS256](vs256.md): A union containing an array or structure of two `vUInt32` vectors or eight 32-bit integers, representing a 256-bit signed integer.
- [vU512](vu512.md): A union containing an array or structure of four `vUInt32` vectors or sixteen 32-bit integers, representing a 256-bit unsigned integer.
- [vS512](vs512.md): A union containing an array or structure of four `vUInt32` vectors or sixteen 32-bit integers, representing a 256-bit signed integer.
- [vU1024](vu1024.md): A union containing an array or structure of eight `vUInt32` vectors or thirty-two 32-bit integers, representing a 1024-bit unsigned integer.
- [vS1024](vs1024.md): A union containing an array or structure of eight `vUInt32` vectors or thirty-two 32-bit integers, representing a 1024-bit signed integer.
