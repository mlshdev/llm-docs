> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kuccollatewidthinsensitivemask](https://developer.apple.com/documentation/coreservices/kuccollatewidthinsensitivemask)

# kUCCollateWidthInsensitiveMask

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
var kUCCollateWidthInsensitiveMask: Int { get }
```

<a id="discussion"></a>

## Discussion

If the corresponding bit is set, then fullwidth and halfwidth compatibility forms are treated as equivalent to the corresponding non-compatibility characters. This option is among those set by the `kUCCollateStandardOptions` constant, as described in [Standard Options Mask](carbon_core/unicode_utilities/1390444-standard_options_mask.md).
