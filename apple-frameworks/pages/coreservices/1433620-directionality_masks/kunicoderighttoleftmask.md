> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433620-directionality_masks/kunicoderighttoleftmask](https://developer.apple.com/documentation/coreservices/1433620-directionality_masks/kunicoderighttoleftmask)

# kUnicodeRightToLeftMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeRightToLeftMask = kUnicodeRightToLeft << kUnicodeDirectionalityBits
```

<a id="discussion"></a>

## Discussion

The value `kUnicodeRightToLeftMask` tells the converter that the base paragraph direction is right to left. This determines which direction the converter should use for resolution of neutral coded characters, such as spaces that occur between sets of coded characters having different directions—for example, between Latin and Arabic characters—rendering ambiguous the direction of the space character.
