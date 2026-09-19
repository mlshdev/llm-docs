> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1471996-translation_manager_attribute_se/gestalttranslationmgrhintorder

# gestaltTranslationMgrHintOrder

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

In earlier versions of the Translation Manager, the scrap hints in the `DoTranslateScrapProcPtr` function were reversed. In later versions, this was fixed. If this bit is true, this bug fix is in effect.

## Declaration

```objectivec
gestaltTranslationMgrHintOrder = 1
```
