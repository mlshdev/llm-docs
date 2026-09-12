> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444426-fsisaliasfile](https://developer.apple.com/documentation/coreservices/1444426-fsisaliasfile)

# FSIsAliasFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Determines whether a file system object is an alias file, a data file, or a folder.

> Use [CFURLCopyResourcePropertyForKey(\_:\_:\_:\_:)](../corefoundation/cfurlcopyresourcepropertyforkey%28________%29.md) with [kCFURLIsAliasFileKey](../corefoundation/kcfurlisaliasfilekey.md) instead.

## Declaration

```objectivec
OSErr FSIsAliasFile(const FSRef *fileRef, Boolean *aliasFileFlag, Boolean *folderFlag);
```

## Parameters

- `fileRef`: A pointer to the file system object to test.
- `aliasFileFlag`: A pointer to a Boolean variable. On return, a value of `TRUE` indicates that the object specified in the `fileRef` parameter is an alias file. A value of `FALSE` indicates that the object is not an alias file.
- `folderFlag`: A pointer to a Boolean variable. On return, a value of `TRUE` indicates that the object specified in the `fileRef` parameter is a folder. A value of `FALSE` indicates that the object is a file.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

[Table 1](1444426-fsisaliasfile.md#1966543) summarizes the information that this function provides about the object specified in the `fileRef` parameter: 

| Alias flag | Folder flag | Object kind |
| --- | --- | --- |
| T | F | Alias file |
| F | F | Data file |
| F | T | Folder |

Note that if `fileRef` is an alias file, this function does not provide any information about the object to which the alias refers. To find out whether this object is a file or a folder, you can use [FSResolveAliasFile](1444372-fsresolvealiasfile.md).

## See Also

### Working With Finder Alias Files

- [FSFollowFinderAlias](1444287-fsfollowfinderalias.md): Deprecated. Resolves an alias record obtained from a Finder alias file.
- [FSResolveAliasFile](1444372-fsresolvealiasfile.md): Deprecated. Resolves an alias contained in an alias file.
- [FSResolveAliasFileWithMountFlags](1444327-fsresolvealiasfilewithmountflags.md): Deprecated. Resolves an alias contained in an alias file.
