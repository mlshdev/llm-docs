> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kuccollatestandardoptions

# kUCCollateStandardOptions

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollateStandardOptions: Int { get }
```

<a id="discussion"></a>

## Discussion

If the `kUCCollateComposeInsensitiveMask` and `kUCCollateWidthInsensitiveMask` bits are set, then (1) precomposed and decomposed representations of the same text element will be treated as equivalent, and (2) fullwidth and halfwidth compatibility forms will be treated as equivalent to the corresponding non-compatibility characters.
