> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471996-translation_manager_attribute_se](https://developer.apple.com/documentation/coreservices/1471996-translation_manager_attribute_se)

# Translation Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Translation Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltTranslationAttr](1471996-translation_manager_attribute_se/gestalttranslationattr.md): The `Gestalt` selector you pass to determine which Translation Manager attributes are present.
- [gestaltTranslationMgrExists](1471996-translation_manager_attribute_se/gestalttranslationmgrexists.md): If `true`, the Translation Manager is present.
- [gestaltTranslationMgrHintOrder](1471996-translation_manager_attribute_se/gestalttranslationmgrhintorder.md): In earlier versions of the Translation Manager, the scrap hints in the `DoTranslateScrapProcPtr` function were reversed. In later versions, this was fixed. If this bit is true, this bug fix is in effect.
- [gestaltTranslationPPCAvail](1471996-translation_manager_attribute_se/gestalttranslationppcavail.md): If `true`, the PowerPC Translation Library is available, and you can call the Translation Manager from native PowerPC code.
- [gestaltTranslationGetPathAPIAvail](1471996-translation_manager_attribute_se/gestalttranslationgetpathapiavail.md): If true, the functions `GetFileTranslationPath` and `GetPathTranslationDialog` are available.
