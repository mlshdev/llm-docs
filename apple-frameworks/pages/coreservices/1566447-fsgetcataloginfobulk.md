> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566447-fsgetcataloginfobulk](https://developer.apple.com/documentation/coreservices/1566447-fsgetcataloginfobulk)

# FSGetCatalogInfoBulk

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

> In macOS 10.8 and later, use [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](../foundation/filemanager/contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md) or [enumeratorAtPath:](../foundation/filemanager/enumerator%28atpath_%29.md) instead.

## Declaration

```objectivec
OSErr FSGetCatalogInfoBulk(FSIterator iterator, ItemCount maximumObjects, ItemCount *actualObjects, Boolean *containerChanged, FSCatalogInfoBitmap whichInfo, FSCatalogInfo *catalogInfos, FSRef *refs, FSSpecPtr specs, HFSUniStr255 *names);
```

<a id="discussion"></a>

## Discussion

> **Important**

> [FSGetCatalogInfoBulk](1566447-fsgetcataloginfobulk.md) returns directory entries in a different order on APFS and HFS+ volumes. Don't rely on any specific ordering of returned values; instead, explicitly sort directory entries as necessary.

## See Also

### Obtaining File and Directory Information Using a Catalog Iterator on HFS Plus Volumes

- [PBGetCatalogInfoBulkSync](1565707-pbgetcataloginfobulksync.md): Deprecated.
- [PBGetCatalogInfoBulkAsync](1566399-pbgetcataloginfobulkasync.md): Deprecated.
