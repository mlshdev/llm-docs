> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444327-fsresolvealiasfilewithmountflags](https://developer.apple.com/documentation/coreservices/1444327-fsresolvealiasfilewithmountflags)

# FSResolveAliasFileWithMountFlags

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Resolves an alias contained in an alias file.

> First use [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdatafromfile%28______%29.md), then use [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebyresolvingbookmarkdata%28______________%29.md).

## Declaration

```objectivec
OSErr FSResolveAliasFileWithMountFlags(FSRef *theRef, Boolean resolveAliasChains, Boolean *targetIsFolder, Boolean *wasAliased, unsigned long mountFlags);
```

## Parameters

- `theRef`: A pointer to the alias file you plan to open. If the function completes successfully, this `FSRef` describes the file or the directory referred to by the alias file.
- `resolveAliasChains`: A Boolean value. Set this parameter to `TRUE` if you want `FSResolveAliasFileWithMountFlags` to resolve all aliases in a chain (for example, an alias file that refers to an alias file and so on), stopping only when it reaches the target file. Set this parameter to `FALSE` if you want to resolve only one alias file, even if the target is another alias file.
- `targetIsFolder`: A pointer to a Boolean value. The `FSResolveAliasFileWithMountFlags` function returns `TRUE` in this parameter if the `FSRef` in the parameter `theRef` points to a directory or a volume; otherwise, `FSResolveAliasFileWithMountFlags` returns `FALSE` in this parameter.
- `wasAliased`: A pointer to a Boolean value. The `FSResolveAliasFileWithMountFlags` function returns `TRUE` in this parameter if the `FSRef` in the parameter `theRef` points to an alias; otherwise, `FSResolveAliasFileWithMountFlags` returns `FALSE` in this parameter.
- `mountFlags`: Options controlling how the alias file is resolved. See [Volume Mount Options](1444436-volume_mount_options.md) for a description of the values you can use here. Set this parameter to `kResolveAliasFileNoUI` to prevent any user interaction, including disk switch alerts, while the alias is being resolved.

<a id="return_value"></a>

## Return Value

A result code.

<a id="discussion"></a>

## Discussion

The function `FSResolveAliasFileWithMountFlags` is identical to [FSResolveAliasFile](1444372-fsresolvealiasfile.md) with the exception that it provides the `mountFlags` parameter, allowing callers additional control over how the alias file is resolved.

## See Also

### Working With Finder Alias Files

- [FSFollowFinderAlias](1444287-fsfollowfinderalias.md): Deprecated. Resolves an alias record obtained from a Finder alias file.
- [FSIsAliasFile](1444426-fsisaliasfile.md): Deprecated. Determines whether a file system object is an alias file, a data file, or a folder.
- [FSResolveAliasFile](1444372-fsresolvealiasfile.md): Deprecated. Resolves an alias contained in an alias file.
