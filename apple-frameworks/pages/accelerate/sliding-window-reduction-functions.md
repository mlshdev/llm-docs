> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/sliding-window-reduction-functions](https://developer.apple.com/documentation/accelerate/sliding-window-reduction-functions)

# Sliding-window reduction functions (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Calculate maximum values and sums of values in a sliding window.

## Topics

### Sliding-window summation functions

The functions in this group calculate a sliding-window sum for a vector.

- [slidingWindowSum(\_:usingWindowLength:)](vdsp/slidingwindowsum%28__usingwindowlength_%29-2t1dc.md): Returns the double-precision sliding window sum of a vector.
- [slidingWindowSum(\_:usingWindowLength:)](vdsp/slidingwindowsum%28__usingwindowlength_%29-reb8.md): Returns the single-precision sliding window sum of a vector.
- [slidingWindowSum(\_:usingWindowLength:result:)](vdsp/slidingwindowsum%28__usingwindowlength_result_%29-i972.md): Calculates the double-precision sliding window sum of a vector.
- [slidingWindowSum(\_:usingWindowLength:result:)](vdsp/slidingwindowsum%28__usingwindowlength_result_%29-5tg0h.md): Calculates the single-precision sliding window sum of a vector.

# Sliding-window reduction functions (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Calculate maximum values and sums of values in a sliding window.

## Topics

### Sliding-window maximum functions

The functions in this group find the maximum value in a sliding window within an input vector.

- [vDSP_vswmax](vdsp_vswmax.md): Finds the maximum value in a sliding window at each possible position in a single-precision input vector.
- [vDSP_vswmaxD](vdsp_vswmaxd.md): Finds the maximum value in a sliding window at each possible position in a double-precision input vector.

### Sliding-window summation functions

The functions in this group calculate a sliding-window sum for a vector.

- [vDSP_vswsum](vdsp_vswsum.md): Finds the sum of values in a sliding window at each possible position in a single-precision input vector.
- [vDSP_vswsumD](vdsp_vswsumd.md): Finds the sum of values in a sliding window at each possible position in a double-precision input vector.
