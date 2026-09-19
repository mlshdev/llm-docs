> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1565699-fscreatefileandopenforkunicode

# FSCreateFileAndOpenForkUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSCreateFileAndOpenForkUnicode(const FSRef *parentRef, UniCharCount nameLength, const UniChar *name, FSCatalogInfoBitmap whichInfo, const FSCatalogInfo *catalogInfo, UniCharCount forkNameLength, const UniChar *forkName, SInt8 permissions, FSIORefNum *forkRefNum, FSRef *newRef);
```
