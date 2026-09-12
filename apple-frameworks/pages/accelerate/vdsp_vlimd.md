> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_vlimd](https://developer.apple.com/documentation/accelerate/vdsp_vlimd)

# vDSP_vlimD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates the double-precision vector test limit using the specified stride.

## Declaration

```objectivec
extern void vDSP_vlimD(const double *__A, vDSP_Stride __IA, const double *__B, const double *__C, double *__D, vDSP_Stride __ID, vDSP_Length __N);
```

<a id="Discussion"></a>

## Discussion

This function is the same as [vDSP_vlim](vdsp_vlim.md), except for the types of vectors `A`, `B`, `C`, and `D`.

## See Also

### Limit Operations

- [vDSP_vlim](vdsp_vlim.md): Calculates the single-precision vector test limit using the specified stride.
