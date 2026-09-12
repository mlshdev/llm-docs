> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1433493-conversion_masks/kunicodeloosemappingsmask](https://developer.apple.com/documentation/coreservices/1433493-conversion_masks/kunicodeloosemappingsmask)

# kUnicodeLooseMappingsMask

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
kUnicodeLooseMappingsMask = 1L << kUnicodeLooseMappingsBit
```

<a id="discussion"></a>

## Discussion

A mask that determines whether the Unicode Converter should use the loose-mapping portion of a mapping table for character mapping if the strict mapping portion of the table does not include a destination encoding equivalent for the source text element. 

If you clear this flag, the converter will use only the strict equivalence portion. 

 If set this flag and a conversion for the source text element does not exist in the strict equivalence portion of the mapping table, then the converter uses the loose mapping section.
