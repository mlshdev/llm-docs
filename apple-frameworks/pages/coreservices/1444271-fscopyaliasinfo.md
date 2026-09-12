> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444271-fscopyaliasinfo](https://developer.apple.com/documentation/coreservices/1444271-fscopyaliasinfo)

# FSCopyAliasInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Returns information from an alias handle.

> Use [CFURLCreateResourcePropertiesForKeysFromBookmarkData(\_:\_:\_:)](../corefoundation/cfurlcreateresourcepropertiesforkeysfrombookmarkdata%28______%29.md) or [CFURLCreateResourcePropertyForKeyFromBookmarkData(\_:\_:\_:)](../corefoundation/cfurlcreateresourcepropertyforkeyfrombookmarkdata%28______%29.md).

## Declaration

```objectivec
OSStatus FSCopyAliasInfo(AliasHandle inAlias, HFSUniStr255 *targetName, HFSUniStr255 *volumeName, CFStringRef *pathString, FSAliasInfoBitmap *whichInfo, FSAliasInfo *info);
```

## Parameters

- `inAlias`: A handle to the alias record from which to get information.
- `targetName`: A pointer to a string that, on return, contains the name of the target item. Pass `NULL` if you do not want this information returned.
- `volumeName`: A pointer to a string that, on return, contains the name of the volume the target resides on. Pass `NULL` if you do not want this information returned.
- `pathString`: A pointer a CFString that, on return, contains the POSIX path to the target. Pass `NULL` if you do not want this information returned.
- `whichInfo`: A pointer to a variable of type `FSAliasInfoBitmap`. On return, this field indicates which fields in the alias information block, specified in the `info` parameter, contain valid data. See [FSAliasInfoBitmap](fsaliasinfobitmap.md) for a description of the values that may be returned here. This parameter may be `NULL`.
- `info`: A pointer to a structure of type [FSAliasInfo](fsaliasinfo.md). On return, this structure contains information about the alias. Pass `NULL` if you do not want this information returned.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

This function returns the requested information from the alias handle passed in the `inAlias` parameter. The information is gathered only from the alias record, so it may not match what is on disk. No disk input/output is performed.

The `FSCopyAliasInfo` function adds support for unicode filenames and filenames longer than 32 bytes. It replaces the `GetAliasInfo` function.

## See Also

### Resolving and Reading Alias Records

- [FSMatchAliasBulk](1444389-fsmatchaliasbulk.md): Deprecated. Identifies a list of possible matches for an alias.
- [FSResolveAlias](1444297-fsresolvealias.md): Deprecated. Returns an `FSRef` to the single most likely target of an alias record.
- [FSResolveAliasWithMountFlags](1444279-fsresolvealiaswithmountflags.md): Deprecated. Returns an `FSRef` to the target of an alias.
