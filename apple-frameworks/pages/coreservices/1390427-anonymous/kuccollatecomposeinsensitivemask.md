> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1390427-anonymous/kuccollatecomposeinsensitivemask

# kUCCollateComposeInsensitiveMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCCollateComposeInsensitiveMask = 1L << 1
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then precomposed and decomposed representations of the same text element are treated as equivalent. This option is among those set by the `kUCCollateStandardOptions` constant, as described in [Standard Options Mask](../1390444-standard_options_mask.md).
