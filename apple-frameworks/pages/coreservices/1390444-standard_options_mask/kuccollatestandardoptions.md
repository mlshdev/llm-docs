> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390444-standard_options_mask/kuccollatestandardoptions](https://developer.apple.com/documentation/coreservices/1390444-standard_options_mask/kuccollatestandardoptions)

# kUCCollateStandardOptions

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kUCCollateStandardOptions = kUCCollateComposeInsensitiveMask | kUCCollateWidthInsensitiveMask
```

<a id="discussion"></a>

## Discussion

If the `kUCCollateComposeInsensitiveMask` and `kUCCollateWidthInsensitiveMask` bits are set, then (1) precomposed and decomposed representations of the same text element will be treated as equivalent, and (2) fullwidth and halfwidth compatibility forms will be treated as equivalent to the corresponding non-compatibility characters.
