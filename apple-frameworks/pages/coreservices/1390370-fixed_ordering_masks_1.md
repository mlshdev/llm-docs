> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390370-fixed_ordering_masks_1](https://developer.apple.com/documentation/coreservices/1390370-fixed_ordering_masks_1)

# Fixed Ordering Masks 1

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Set and test the `UCCollateOptions` field that specifies a fixed ordering scheme.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCCollateTypeSourceMask](1390370-fixed_ordering_masks_1/kuccollatetypesourcemask.md): You can use this mask, in conjunction with the `kUCCollateTypeShiftBits` constant, to obtain a value identifying a fixed ordering scheme.
- [kUCCollateTypeShiftBits](1390370-fixed_ordering_masks_1/kuccollatetypeshiftbits.md)
