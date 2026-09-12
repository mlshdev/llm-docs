> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/standardizingpath](https://developer.apple.com/documentation/foundation/nsstring/standardizingpath)

# standardizingPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new string made by removing extraneous path components from the receiver.

## Declaration

```swift
var standardizingPath: String { get }
```

<a id="Discussion"></a>

## Discussion

A new string made by performing the following operations:

- Expanding an initial tilde expression using [expandingTildeInPath](expandingtildeinpath.md).
- Removing an initial component of “`/private/var/automount`”, “`/var/automount`”, or “`/private`” from the path, if the result still indicates an existing file or directory (checked by consulting the file system).
- Reducing empty components and references to the current directory (that is, the sequences  “//” and “/./”) to single path separators.
- Removing a trailing slash from the last component.
- For absolute paths only, resolving references to the parent directory (that is, the component “..”) to the real parent directory if possible using [resolvingSymlinksInPath](resolvingsymlinksinpath.md). For relative paths, references to the parent directory are left in place.

Returns `self` if an error occurs.

Note that the path returned by this method may still have symbolic link components in it. Note also that this method only works with file paths (not, for example, string representations of URLs).

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
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [deletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [deletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [expandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.

# stringByStandardizingPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new string made by removing extraneous path components from the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSString * stringByStandardizingPath;
```

<a id="Discussion"></a>

## Discussion

A new string made by performing the following operations:

- Expanding an initial tilde expression using [stringByExpandingTildeInPath](expandingtildeinpath.md).
- Removing an initial component of “`/private/var/automount`”, “`/var/automount`”, or “`/private`” from the path, if the result still indicates an existing file or directory (checked by consulting the file system).
- Reducing empty components and references to the current directory (that is, the sequences  “//” and “/./”) to single path separators.
- Removing a trailing slash from the last component.
- For absolute paths only, resolving references to the parent directory (that is, the component “..”) to the real parent directory if possible using [stringByResolvingSymlinksInPath](resolvingsymlinksinpath.md). For relative paths, references to the parent directory are left in place.

Returns `self` if an error occurs.

Note that the path returned by this method may still have symbolic link components in it. Note also that this method only works with file paths (not, for example, string representations of URLs).

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
- [stringByAppendingPathComponent:](appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [stringByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [stringByDeletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [stringByDeletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [stringByExpandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [stringByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
