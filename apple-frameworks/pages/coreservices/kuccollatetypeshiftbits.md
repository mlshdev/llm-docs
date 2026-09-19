> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kuccollatetypeshiftbits

# kUCCollateTypeShiftBits

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollateTypeShiftBits: Int { get }
```

<a id="discussion"></a>

## Discussion

You can use this value, along with one of the constants described in [Fixed Ordering Scheme](carbon_core/unicode_utilities/1390361-fixed_ordering_scheme.md), to specify a fixed ordering scheme. You can also use this value, in conjunction with the `kUCCollateTypeSourceMask` constant, to obtain a value identifying a fixed ordering scheme.
