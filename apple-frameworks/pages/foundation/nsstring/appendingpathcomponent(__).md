> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/appendingpathcomponent(_:)](https://developer.apple.com/documentation/foundation/nsstring/appendingpathcomponent(_:))

# appendingPathComponent(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by appending to the receiver a given string.

## Declaration

```swift
func appendingPathComponent(_ str: String) -> String
```

## Parameters

- `str`: The path component to append to the receiver.

<a id="return-value"></a>

## Return Value

A new string made by appending `aString` to the receiver, preceded if necessary by a path separator.

<a id="Discussion"></a>

## Discussion

The following table illustrates the effect of this method on a variety of different paths, assuming that `aString` is supplied as “`scratch.tiff`”:

| Receiver’s String Value | Resulting String |
| --- | --- |
| “`/tmp`” | “`/tmp/scratch.tiff`” |
| “`/tmp/`” | “`/tmp/scratch.tiff`” |
| “`/`” | “`/scratch.tiff`” |
| “” (an empty string) | “`scratch.tiff`” |

Note that this method only works with file paths (not, for example, string representations of URLs).

## See Also

### Working with Paths

- [path(withComponents:)](path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [completePath(into:caseSensitive:matchesInto:filterTypes:)](completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](filesystemrepresentation.md): A file system-specific representation of the receiver.
- [getFileSystemRepresentation(\_:maxLength:)](getfilesystemrepresentation%28__maxlength_%29.md): Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.
- [isAbsolutePath](isabsolutepath.md): A Boolean value that indicates whether the receiver represents an absolute path.
- [lastPathComponent](lastpathcomponent.md): The last path component of the receiver.
- [pathExtension](pathextension.md): The path extension, if any, of the string as interpreted as a path.
- [abbreviatingWithTildeInPath](abbreviatingwithtildeinpath.md): A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [deletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [deletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [expandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [standardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.

# stringByAppendingPathComponent: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by appending to the receiver a given string.

## Declaration

```objectivec
- (NSString *) stringByAppendingPathComponent:(NSString *) str;
```

## Parameters

- `str`: The path component to append to the receiver.

<a id="return-value"></a>

## Return Value

A new string made by appending `aString` to the receiver, preceded if necessary by a path separator.

<a id="Discussion"></a>

## Discussion

The following table illustrates the effect of this method on a variety of different paths, assuming that `aString` is supplied as “`scratch.tiff`”:

| Receiver’s String Value | Resulting String |
| --- | --- |
| “`/tmp`” | “`/tmp/scratch.tiff`” |
| “`/tmp/`” | “`/tmp/scratch.tiff`” |
| “`/`” | “`/scratch.tiff`” |
| “” (an empty string) | “`scratch.tiff`” |

Note that this method only works with file paths (not, for example, string representations of URLs).

## See Also

### Working with Paths

- [pathWithComponents:](path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [completePathIntoString:caseSensitive:matchesIntoArray:filterTypes:](completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](filesystemrepresentation.md): A file system-specific representation of the receiver.
- [getFileSystemRepresentation:maxLength:](getfilesystemrepresentation%28__maxlength_%29.md): Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.
- [absolutePath](isabsolutepath.md): A Boolean value that indicates whether the receiver represents an absolute path.
- [lastPathComponent](lastpathcomponent.md): The last path component of the receiver.
- [pathExtension](pathextension.md): The path extension, if any, of the string as interpreted as a path.
- [stringByAbbreviatingWithTildeInPath](abbreviatingwithtildeinpath.md): A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.
- [stringByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [stringByDeletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [stringByDeletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [stringByExpandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [stringByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [stringByStandardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.
