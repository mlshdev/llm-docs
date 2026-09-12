> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1411122-vs64fullmulodd](https://developer.apple.com/documentation/kernel/1411122-vs64fullmulodd)

# vS64FullMulOdd

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Signed 64-bit multiplication; results are twice as wide as multiplicands, odd-numbered elements of multiplicand vectors are used.  Note the big-endian convention: the leftmost element is element 0.

## Declaration

```objectivec
vSInt32 vS64FullMulOdd(vSInt32 vA, vSInt32 vB);
```
