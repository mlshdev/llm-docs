> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444363-fsnewalias](https://developer.apple.com/documentation/coreservices/1444363-fsnewalias)

# FSNewAlias

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a new alias record, given a target file or directory.

> Use [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md) instead.

## Declaration

```objectivec
OSErr FSNewAlias(const FSRef *fromFile, const FSRef *target, AliasHandle *inAlias);
```

## Parameters

- `fromFile`: A pointer to the starting point for a relative search. You may pass `NULL` if you do not need relative search information in the alias record. The files or directories specified in the `fromFile` and `target` parameters must reside on the same volume.
- `target`: A pointer to the target file or directory of the alias.
- `inAlias`: A pointer to an alias handle. On return, this handle refers to the newly created alias record. If the function fails to create an alias record, it sets `inAlias` to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. If the specified target is valid, this function creates an alias record for the target and returns `noErr`. Any other return value indicates that this function did not create an alias record.

<a id="discussion"></a>

## Discussion

The `FSNewAlias` function creates an alias record that describes the specified target. It allocates the storage, fills in the record, and puts a record handle to that storage in the `inAlias` parameter. `FSNewAlias` records the full pathname of the target and a collection of other information relevant to locating the target, verifying the target, and mounting the target’s volume, if necessary. You can have `FSNewAlias` store relative search information as well by supplying a starting point for a relative search.

## See Also

### Creating and Updating Alias Records

- [FSNewAliasUnicode](1444376-fsnewaliasunicode.md): Deprecated. Creates a new alias record, given the Unicode name and parent directory of the target.
- [FSNewAliasFromPath](1444431-fsnewaliasfrompath.md): Deprecated. Creates a new alias record, given the pathname of the target file or directory.
- [FSNewAliasMinimal](1444337-fsnewaliasminimal.md): Deprecated. Creates a new minimal alias record, given a target file or directory.
- [FSNewAliasMinimalUnicode](1444409-fsnewaliasminimalunicode.md): Deprecated. Creates a minimal alias, given the Unicode name and parent directory of the target.
- [FSUpdateAlias](1444399-fsupdatealias.md): Deprecated. Updates an alias record for a specified target.
