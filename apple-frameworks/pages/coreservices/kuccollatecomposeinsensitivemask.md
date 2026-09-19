> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kuccollatecomposeinsensitivemask

# kUCCollateComposeInsensitiveMask

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollateComposeInsensitiveMask: Int { get }
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then precomposed and decomposed representations of the same text element are treated as equivalent. This option is among those set by the `kUCCollateStandardOptions` constant, as described in [Standard Options Mask](carbon_core/unicode_utilities/1390444-standard_options_mask.md).
