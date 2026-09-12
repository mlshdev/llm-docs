> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1399897-encoding_variants_for_unicode/kunicodehfspluscompvariant](https://developer.apple.com/documentation/coreservices/1399897-encoding_variants_for_unicode/kunicodehfspluscompvariant)

# kUnicodeHFSPlusCompVariant

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.2+

## Declaration

```objectivec
kUnicodeHFSPlusCompVariant = 9
```

<a id="discussion"></a>

## Discussion

Specifies canonical composition according to Unicode 3.2 rules, but using the HFS+ decomposition exclusions. You can use ths option when converting HFS file names. You should use this form when you want to obtain a composed form that can be converted to and from the decomposed form specified by `kUnicodeHFSPlusDecompVariant`. This is the recommended way to request decompositions with HFS+ exclusions, instead of using `mappingVersion = kUnicodeUseHFSPlusMapping`.
