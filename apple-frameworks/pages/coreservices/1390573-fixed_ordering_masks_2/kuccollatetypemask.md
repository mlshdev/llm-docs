> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390573-fixed_ordering_masks_2/kuccollatetypemask

# kUCCollateTypeMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

You can use this mask to directly test bits 24-31 of a `UCCollateOptions` value.

## Declaration

```objectivec
kUCCollateTypeMask = (UInt32)kUCCollateTypeSourceMask << kUCCollateTypeShiftBits
```
