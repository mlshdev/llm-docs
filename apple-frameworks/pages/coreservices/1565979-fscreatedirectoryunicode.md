> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565979-fscreatedirectoryunicode](https://developer.apple.com/documentation/coreservices/1565979-fscreatedirectoryunicode)

# FSCreateDirectoryUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSCreateDirectoryUnicode(const FSRef *parentRef, UniCharCount nameLength, const UniChar *name, FSCatalogInfoBitmap whichInfo, const FSCatalogInfo *catalogInfo, FSRef *newRef, FSSpecPtr newSpec, UInt32 *newDirID);
```

## See Also

### Creating Directories

- [PBCreateDirectoryUnicodeSync](1565315-pbcreatedirectoryunicodesync.md): Deprecated.
- [PBCreateDirectoryUnicodeAsync](1565107-pbcreatedirectoryunicodeasync.md): Deprecated.
