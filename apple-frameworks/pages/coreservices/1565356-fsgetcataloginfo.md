> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1565356-fsgetcataloginfo](https://developer.apple.com/documentation/coreservices/1565356-fsgetcataloginfo)

# FSGetCatalogInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

> In macOS 10.8 and later, use [resourceValuesForKeys:error:](../foundation/nsurl/resourcevalues%28forkeys_%29.md) instead.

## Declaration

```objectivec
OSErr FSGetCatalogInfo(const FSRef *ref, FSCatalogInfoBitmap whichInfo, FSCatalogInfo *catalogInfo, HFSUniStr255 *outName, FSSpecPtr fsSpec, FSRef *parentRef);
```

<a id="discussion"></a>

## Discussion

> **Important**

> Avoid using this function to determine whether a file has changed. The fractional dates returned by the [FSGetCatalogInfo](1565356-fsgetcataloginfo.md) function don't compare exactly to the fractional dates returned by the [NSURL](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-Foundation-older-but-post-10.8/index.html#//apple_ref/doc/uid/TP40016592-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_20) date properties, because of differences in rounding and precision.
>
> Instead, call the [getResourceValue:forKey:error:](../foundation/nsurl/getresourcevalue%28__forkey_%29.md) method of [NSURL](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-Foundation-older-but-post-10.8/index.html#//apple_ref/doc/uid/TP40016592-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_20) with [NSURLGenerationIdentifierKey](../foundation/urlresourcekey/generationidentifierkey.md). On file systems that don't support generation identifiers, call the [getResourceValue:forKey:error:](../foundation/nsurl/getresourcevalue%28__forkey_%29.md) method with [NSURLContentModificationDateKey](../foundation/urlresourcekey/contentmodificationdatekey.md).

## See Also

### Accessing Information About Files and Directories

- [PBGetCatalogInfoAsync](1565934-pbgetcataloginfoasync.md): Deprecated.
- [PBGetCatalogInfoSync](1566328-pbgetcataloginfosync.md): Deprecated.
- [PBSetCatalogInfoAsync](1566340-pbsetcataloginfoasync.md): Deprecated.
- [PBSetCatalogInfoSync](1565271-pbsetcataloginfosync.md): Deprecated.
- [FSSetCatalogInfo](1566580-fssetcataloginfo.md): Deprecated.
