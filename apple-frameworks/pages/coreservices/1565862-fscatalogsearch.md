> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565862-fscatalogsearch](https://developer.apple.com/documentation/coreservices/1565862-fscatalogsearch)

# FSCatalogSearch

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSCatalogSearch(FSIterator iterator, const FSSearchParams *searchCriteria, ItemCount maximumObjects, ItemCount *actualObjects, Boolean *containerChanged, FSCatalogInfoBitmap whichInfo, FSCatalogInfo *catalogInfos, FSRef *refs, FSSpecPtr specs, HFSUniStr255 *names);
```

## See Also

### Searching a Volume Using a Catalog Iterator

- [PBCatalogSearchSync](1565713-pbcatalogsearchsync.md): Deprecated.
- [PBCatalogSearchAsync](1566401-pbcatalogsearchasync.md): Deprecated.
