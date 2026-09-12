> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444337-fsnewaliasminimal](https://developer.apple.com/documentation/coreservices/1444337-fsnewaliasminimal)

# FSNewAliasMinimal

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Creates a new minimal alias record, given a target file or directory.

> Use [CFURLCreateBookmarkData(\_:\_:\_:\_:\_:\_:)](../corefoundation/cfurlcreatebookmarkdata%28____________%29.md) instead.

## Declaration

```objectivec
OSErr FSNewAliasMinimal(const FSRef *target, AliasHandle *inAlias);
```

## Parameters

- `target`: A pointer to the target of the alias record.
- `inAlias`: A pointer to an alias handle. On return, this handle refers to the newly created alias record. If the function fails to create an alias record, it sets `inAlias` to `NULL`.

<a id="return_value"></a>

## Return Value

A result code. If the specified target is valid, this function creates an alias record for the target and returns `noErr`. Any other return value indicates that this function did not create an alias record.

<a id="discussion"></a>

## Discussion

The `FSNewAliasMinimal` function creates an alias record that contains only the minimum information necessary to describe the target. The `FSNewAliasMinimal` function uses the standard alias record data structure, but it fills in only parts of the record.

The [FSResolveAlias](1444297-fsresolvealias.md) function never updates a minimal alias record.

## See Also

### Creating and Updating Alias Records

- [FSNewAlias](1444363-fsnewalias.md): Deprecated. Creates a new alias record, given a target file or directory.
- [FSNewAliasUnicode](1444376-fsnewaliasunicode.md): Deprecated. Creates a new alias record, given the Unicode name and parent directory of the target.
- [FSNewAliasFromPath](1444431-fsnewaliasfrompath.md): Deprecated. Creates a new alias record, given the pathname of the target file or directory.
- [FSNewAliasMinimalUnicode](1444409-fsnewaliasminimalunicode.md): Deprecated. Creates a minimal alias, given the Unicode name and parent directory of the target.
- [FSUpdateAlias](1444399-fsupdatealias.md): Deprecated. Updates an alias record for a specified target.
