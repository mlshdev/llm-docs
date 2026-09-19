> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1411109-vu64fullmulodd

# vU64FullMulOdd

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Unsigned 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.  Note the big-endian convention: the leftmost element is element 0.

## Declaration

```objectivec
vUInt32 vU64FullMulOdd(vUInt32 vA, vUInt32 vB);
```
