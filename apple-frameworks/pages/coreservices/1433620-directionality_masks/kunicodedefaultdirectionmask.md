> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433620-directionality_masks/kunicodedefaultdirectionmask](https://developer.apple.com/documentation/coreservices/1433620-directionality_masks/kunicodedefaultdirectionmask)

# kUnicodeDefaultDirectionMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeDefaultDirectionMask = kUnicodeDefaultDirection << kUnicodeDirectionalityBits
```

<a id="discussion"></a>

## Discussion

A mask for setting the global, or base, line direction for the text being converted. The value `kUnicodeDefaultDirectionMask` tells the converter to use the value of the first strong direction character in the string. This determines which direction the converter should use for resolution of neutral coded characters, such as spaces that occur between sets of coded characters having different directions—for example, between Latin and Arabic characters—rendering ambiguous the direction of the space character.
