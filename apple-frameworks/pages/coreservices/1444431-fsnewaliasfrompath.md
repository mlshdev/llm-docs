> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444431-fsnewaliasfrompath](https://developer.apple.com/documentation/coreservices/1444431-fsnewaliasfrompath)

# FSNewAliasFromPath

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Creates a new alias record, given the pathname of the target file or directory.

> Use [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md) instead.

## Declaration

```objectivec
OSStatus FSNewAliasFromPath(const char *fromFilePath, const char *targetPath, OptionBits flags, AliasHandle *inAlias, Boolean *isDirectory);
```

## Parameters

- `fromFilePath`: A C string that specifies the starting point for a relative search. The string should contain a UTF-8 pathname. You may pass `NULL` if you do not need relative search information in the alias record.
- `targetPath`: A C string that contains the full UTF-8 pathname of the target object.
- `flags`: Reserved for future use. Currently, you should pass 0.
- `inAlias`: A pointer to an alias handle. On output, this handle refers to the newly created alias record.
- `isDirectory`: A pointer to a Boolean value. On input, if the target does not exist, set the value to `true` if the target is a directory or `false` if it is not. (Pass `NULL` if you are not sure whether the target is a directory.) On output, if the target exists, the value is `true` if the target is a directory, `false` if it is not.

<a id="return_value"></a>

## Return Value

A result code. For more information, see the Discussion.

<a id="discussion"></a>

## Discussion

If the specified target exists, this function creates an alias record for the target and returns `noErr`. If the parent directory specified in the target pathname exists but the target itself does not exist, this function creates an alias record for the target and returns `fnfErr`. Any other return value indicates that this function did not create an alias record.

## See Also

### Creating and Updating Alias Records

- [FSNewAlias](1444363-fsnewalias.md): Deprecated. Creates a new alias record, given a target file or directory.
- [FSNewAliasUnicode](1444376-fsnewaliasunicode.md): Deprecated. Creates a new alias record, given the Unicode name and parent directory of the target.
- [FSNewAliasMinimal](1444337-fsnewaliasminimal.md): Deprecated. Creates a new minimal alias record, given a target file or directory.
- [FSNewAliasMinimalUnicode](1444409-fsnewaliasminimalunicode.md): Deprecated. Creates a minimal alias, given the Unicode name and parent directory of the target.
- [FSUpdateAlias](1444399-fsupdatealias.md): Deprecated. Updates an alias record for a specified target.
