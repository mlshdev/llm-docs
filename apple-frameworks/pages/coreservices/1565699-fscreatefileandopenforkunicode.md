> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565699-fscreatefileandopenforkunicode](https://developer.apple.com/documentation/coreservices/1565699-fscreatefileandopenforkunicode)

# FSCreateFileAndOpenForkUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSCreateFileAndOpenForkUnicode(const FSRef *parentRef, UniCharCount nameLength, const UniChar *name, FSCatalogInfoBitmap whichInfo, const FSCatalogInfo *catalogInfo, UniCharCount forkNameLength, const UniChar *forkName, SInt8 permissions, FSIORefNum *forkRefNum, FSRef *newRef);
```
