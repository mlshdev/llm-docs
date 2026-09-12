> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444372-fsresolvealiasfile](https://developer.apple.com/documentation/coreservices/1444372-fsresolvealiasfile)

# FSResolveAliasFile

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Resolves an alias contained in an alias file.

> First use [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdatafromfile%28______%29.md), then use [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebyresolvingbookmarkdata%28______________%29.md).

## Declaration

```objectivec
OSErr FSResolveAliasFile(FSRef *theRef, Boolean resolveAliasChains, Boolean *targetIsFolder, Boolean *wasAliased);
```

## Parameters

- `theRef`: A pointer to the alias file you plan to open. If the function completes successfully, this `FSRef` describes to the file or the directory referred to by the alias file.
- `resolveAliasChains`: A Boolean value. Set this parameter to `TRUE` if you want `FSResolveAliasFile` to resolve all aliases in a chain (for example, an alias file that refers to an alias file and so on), stopping only when it reaches the target file. Set this parameter to `FALSE` if you want to resolve only one alias file, even if the target is another alias file.
- `targetIsFolder`: A pointer to a Boolean value. The `FSResolveAliasFile` function returns `TRUE` in this parameter if the `FSRef` in the parameter `theRef` points to a directory or a volume; otherwise, `FSResolveAliasFile` returns `FALSE` in this parameter.
- `wasAliased`: A pointer to a Boolean value. The `FSResolveAliasFile` function returns `TRUE` in this parameter if the `FSRef` in the parameter `theRef` points to an alias; otherwise, `FSResolveAliasFile` returns `FALSE` in this parameter.

<a id="return_value"></a>

## Return Value

A result code. When it finds the specified volume and parent directory but fails to find the target file or directory in that location, `FSResolveAliasFile` returns `fnfErr`.

<a id="discussion"></a>

## Discussion

If your application bypasses the Finder when manipulating documents, it should check for and resolve aliases itself by using the `FSResolveAliasFile` function.

The `FSResolveAliasFile` function first checks the catalog file for the file or directory specified in the parameter `theRef` to determine whether it is an alias and whether it is a file or a directory. If the object is not an alias, `FSResolveAliasFile` leaves `theRef` unchanged, sets the `targetIsFolder` parameter to `TRUE` for a directory or volume and `FALSE` for a file, sets `wasAliased` to `FALSE`, and returns `noErr`. If the object is an alias, `FSResolveAliasFile` resolves it, places the target in the parameter `theRef`, and sets the `wasAliased` flag to `TRUE`.

If `FSResolveAliasFile` receives an error code while resolving an alias, it leaves the input parameters as they are and exits, returning an error code. `FSResolveAliasFile` can return any Resource Manager or File Manager errors.

## See Also

### Working With Finder Alias Files

- [FSFollowFinderAlias](1444287-fsfollowfinderalias.md): Deprecated. Resolves an alias record obtained from a Finder alias file.
- [FSIsAliasFile](1444426-fsisaliasfile.md): Deprecated. Determines whether a file system object is an alias file, a data file, or a folder.
- [FSResolveAliasFileWithMountFlags](1444327-fsresolvealiasfilewithmountflags.md): Deprecated. Resolves an alias contained in an alias file.
