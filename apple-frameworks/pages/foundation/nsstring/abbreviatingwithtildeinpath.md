> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/abbreviatingwithtildeinpath](https://developer.apple.com/documentation/foundation/nsstring/abbreviatingwithtildeinpath)

# abbreviatingWithTildeInPath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.

## Declaration

```swift
var abbreviatingWithTildeInPath: String { get }
```

<a id="Discussion"></a>

## Discussion

A new string based on the current string object. If the new string specifies a file in the current home directory, the home directory portion of the path is replaced with a tilde (`~`) character. If the string does not specify a file in the current home directory, this method returns a new string object whose path is unchanged from the path in the current string.

Note that this method only works with file paths. It does not work for string representations of URLs.

For sandboxed apps in macOS, the current home directory is not the same as the user’s home directory. For a sandboxed app, the home directory is the app’s home directory. So if you specified a path of `/Users/`*\<current_user\>*`/file.txt` for a sandboxed app, the returned path would be unchanged from the original. However, if you specified the same path for an app not in a sandbox, this method would replace the `/Users/`*\<current_user\>* portion of the path with a tilde.

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
- [appendingPathComponent(\_:)](appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [appendingPathExtension(\_:)](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [deletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [deletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [expandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [resolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [standardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.

# stringByAbbreviatingWithTildeInPath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new string that replaces the current home directory portion of the current path with a tilde (`~`) character.

## Declaration

```objectivec
@property (copy, readonly) NSString * stringByAbbreviatingWithTildeInPath;
```

<a id="Discussion"></a>

## Discussion

A new string based on the current string object. If the new string specifies a file in the current home directory, the home directory portion of the path is replaced with a tilde (`~`) character. If the string does not specify a file in the current home directory, this method returns a new string object whose path is unchanged from the path in the current string.

Note that this method only works with file paths. It does not work for string representations of URLs.

For sandboxed apps in macOS, the current home directory is not the same as the user’s home directory. For a sandboxed app, the home directory is the app’s home directory. So if you specified a path of `/Users/`*\<current_user\>*`/file.txt` for a sandboxed app, the returned path would be unchanged from the original. However, if you specified the same path for an app not in a sandbox, this method would replace the `/Users/`*\<current_user\>* portion of the path with a tilde.

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
- [stringByAppendingPathComponent:](appendingpathcomponent%28__%29.md): Returns a new string made by appending to the receiver a given string.
- [stringByAppendingPathExtension:](appendingpathextension%28__%29.md): Returns a new string made by appending to the receiver an extension separator followed by a given extension.
- [stringByDeletingLastPathComponent](deletinglastpathcomponent.md): A new string made by deleting the last path component from the receiver, along with any final path separator.
- [stringByDeletingPathExtension](deletingpathextension.md): A new string made by deleting the extension (if any, and only the last) from the receiver.
- [stringByExpandingTildeInPath](expandingtildeinpath.md): A new string made by expanding the initial component of the receiver to its full path value.
- [stringByResolvingSymlinksInPath](resolvingsymlinksinpath.md): A new string made from the receiver by resolving all symbolic links and standardizing path.
- [stringByStandardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.
