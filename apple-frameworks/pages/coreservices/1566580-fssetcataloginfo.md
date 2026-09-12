> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1566580-fssetcataloginfo](https://developer.apple.com/documentation/coreservices/1566580-fssetcataloginfo)

# FSSetCatalogInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FSSetCatalogInfo(const FSRef *ref, FSCatalogInfoBitmap whichInfo, const FSCatalogInfo *catalogInfo);
```

## See Also

### Accessing Information About Files and Directories

- [PBGetCatalogInfoAsync](1565934-pbgetcataloginfoasync.md): Deprecated.
- [PBGetCatalogInfoSync](1566328-pbgetcataloginfosync.md): Deprecated.
- [PBSetCatalogInfoAsync](1566340-pbsetcataloginfoasync.md): Deprecated.
- [PBSetCatalogInfoSync](1565271-pbsetcataloginfosync.md): Deprecated.
- [FSGetCatalogInfo](1565356-fsgetcataloginfo.md): Deprecated.
