> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444287-fsfollowfinderalias](https://developer.apple.com/documentation/coreservices/1444287-fsfollowfinderalias)

# FSFollowFinderAlias

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Resolves an alias record obtained from a Finder alias file.

> First use [CFURLCreateBookmarkDataFromFile(\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdatafromfile%28______%29.md), then use [CFURLCreateByResolvingBookmarkData(\_:\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebyresolvingbookmarkdata%28______________%29.md).

## Declaration

```objectivec
OSErr FSFollowFinderAlias(FSRef *fromFile, AliasHandle alias, Boolean logon, FSRef *target, Boolean *wasChanged);
```

## Parameters

- `fromFile`: A pointer to the file to use for a first attempt at a relative resolution; pass a pointer to the alias file's `FSRef` for this parameter.
- `alias`: A handle to the alias record taken from the alias file's resources.
- `logon`: If `true`, the Alias Manager attempts to mount a volume if necessary to complete the resolution of the alias.
- `target`: A pointer to an `FSRef` structure. On return, this `FSRef` refers to the target found by the resolution.
- `wasChanged`: A pointer to a Boolean value. `FSFollowFinderAlias` sets this value to `true` if it has updated the alias record.

<a id="return_value"></a>

## Return Value

A result code.

## See Also

### Working With Finder Alias Files

- [FSIsAliasFile](1444426-fsisaliasfile.md): Deprecated. Determines whether a file system object is an alias file, a data file, or a folder.
- [FSResolveAliasFile](1444372-fsresolvealiasfile.md): Deprecated. Resolves an alias contained in an alias file.
- [FSResolveAliasFileWithMountFlags](1444327-fsresolvealiasfilewithmountflags.md): Deprecated. Resolves an alias contained in an alias file.
