> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444409-fsnewaliasminimalunicode](https://developer.apple.com/documentation/coreservices/1444409-fsnewaliasminimalunicode)

# FSNewAliasMinimalUnicode

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Creates a minimal alias, given the Unicode name and parent directory of the target.

> Use [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md) instead.

## Declaration

```objectivec
OSErr FSNewAliasMinimalUnicode(const FSRef *targetParentRef, UniCharCount targetNameLength, const UniChar *targetName, AliasHandle *inAlias, Boolean *isDirectory);
```

## Parameters

- `targetParentRef`: A pointer to the parent directory of the target.
- `targetNameLength`: The number of Unicode characters in the target's name.
- `targetName`: A pointer to the Unicode name of the target.
- `inAlias`: A pointer to an alias handle. On return, this handle refers to the newly created alias record.
- `isDirectory`: A pointer to a Boolean value. On input, if the target does not exist, set the value to `true` if the target is a directory or `false` if it is not. (Pass `NULL` if you are not sure whether the target is a directory.) On output, if the target exists, the value is `true` if the target is a directory, `false` if it is not.

<a id="return_value"></a>

## Return Value

A result code. For more information, see the Discussion.

<a id="discussion"></a>

## Discussion

If the specified target exists, this function creates an alias record for the target and returns `noErr`. If the parent directory exists but the target itself does not exist, this function creates an alias record for the target and returns `fnfErr`. Any other return value indicates that this function did not create an alias record.

## See Also

### Creating and Updating Alias Records

- [FSNewAlias](1444363-fsnewalias.md): Deprecated. Creates a new alias record, given a target file or directory.
- [FSNewAliasUnicode](1444376-fsnewaliasunicode.md): Deprecated. Creates a new alias record, given the Unicode name and parent directory of the target.
- [FSNewAliasFromPath](1444431-fsnewaliasfrompath.md): Deprecated. Creates a new alias record, given the pathname of the target file or directory.
- [FSNewAliasMinimal](1444337-fsnewaliasminimal.md): Deprecated. Creates a new minimal alias record, given a target file or directory.
- [FSUpdateAlias](1444399-fsupdatealias.md): Deprecated. Updates an alias record for a specified target.
