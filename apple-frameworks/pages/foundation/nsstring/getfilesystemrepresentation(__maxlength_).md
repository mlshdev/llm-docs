> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/getfilesystemrepresentation(_:maxlength:)](https://developer.apple.com/documentation/foundation/nsstring/getfilesystemrepresentation(_:maxlength:))

# getFileSystemRepresentation(\_:maxLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.

## Declaration

```swift
func getFileSystemRepresentation(_ cname: UnsafeMutablePointer<CChar>, maxLength max: Int) -> Bool
```

## Parameters

- `cname`: Upon return, contains a C-string that represent the receiver as a system-independent path, plus the `NULL` termination byte. The size of `buffer` must be large enough to contain `maxLength` bytes.
- `max`: The maximum number of bytes in the string to return in `buffer` (including a terminating `NULL` character, which this method adds).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `buffer` is successfully filled with a file-system representation, otherwise [false](https://developer.apple.com/documentation/swift/false) (for example, if `maxLength` would be exceeded or if the receiver can’t be represented in the file system’s encoding).

<a id="Discussion"></a>

## Discussion

This method operates by replacing the abstract path and extension separator characters (’`/`’ and ‘`.`’ respectively) with their equivalents for the operating system. If the system-specific path or extension separator appears in the abstract representation, the characters it is converted to depend on the system (unless they’re identical to the abstract separators).

Note that this method only works with file paths (not, for example, string representations of URLs).

The following example illustrates the use of the `maxLength` argument. The first method invocation returns failure as the file representation of the string (`@"/mach_kernel"`) is 12 bytes long and the value passed as the `maxLength` argument (`12`) does not allow for the addition of a `NULL` termination byte.

```objc
char filenameBuffer[13];
BOOL success;
success = [@"/mach_kernel" getFileSystemRepresentation:filenameBuffer maxLength:12];
// success == NO
// Changing the length to include the NULL character does work
success = [@"/mach_kernel" getFileSystemRepresentation:filenameBuffer maxLength:13];
// success == YES
```

## See Also

### Working with Paths

- [path(withComponents:)](path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [completePath(into:caseSensitive:matchesInto:filterTypes:)](completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](filesystemrepresentation.md): A file system-specific representation of the receiver.
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
- [standardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.

# getFileSystemRepresentation:maxLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Interprets the receiver as a system-independent path and fills a buffer with a C-string in a format and encoding suitable for use with file-system calls.

## Declaration

```objectivec
- (BOOL) getFileSystemRepresentation:(char *) cname maxLength:(NSUInteger) max;
```

## Parameters

- `cname`: Upon return, contains a C-string that represent the receiver as a system-independent path, plus the `NULL` termination byte. The size of `buffer` must be large enough to contain `maxLength` bytes.
- `max`: The maximum number of bytes in the string to return in `buffer` (including a terminating `NULL` character, which this method adds).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `buffer` is successfully filled with a file-system representation, otherwise [false](https://developer.apple.com/documentation/swift/false) (for example, if `maxLength` would be exceeded or if the receiver can’t be represented in the file system’s encoding).

<a id="Discussion"></a>

## Discussion

This method operates by replacing the abstract path and extension separator characters (’`/`’ and ‘`.`’ respectively) with their equivalents for the operating system. If the system-specific path or extension separator appears in the abstract representation, the characters it is converted to depend on the system (unless they’re identical to the abstract separators).

Note that this method only works with file paths (not, for example, string representations of URLs).

The following example illustrates the use of the `maxLength` argument. The first method invocation returns failure as the file representation of the string (`@"/mach_kernel"`) is 12 bytes long and the value passed as the `maxLength` argument (`12`) does not allow for the addition of a `NULL` termination byte.

```objc
char filenameBuffer[13];
BOOL success;
success = [@"/mach_kernel" getFileSystemRepresentation:filenameBuffer maxLength:12];
// success == NO
// Changing the length to include the NULL character does work
success = [@"/mach_kernel" getFileSystemRepresentation:filenameBuffer maxLength:13];
// success == YES
```

## See Also

### Working with Paths

- [pathWithComponents:](path%28withcomponents_%29.md): Returns a string built from the strings in a given array by concatenating them with a path separator between each pair.
- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [completePathIntoString:caseSensitive:matchesIntoArray:filterTypes:](completepath%28into_casesensitive_matchesinto_filtertypes_%29.md): Interprets the receiver as a path in the file system and attempts to perform filename completion, returning a numeric value that indicates whether a match was possible, and by reference the longest path that matches the receiver.
- [fileSystemRepresentation](filesystemrepresentation.md): A file system-specific representation of the receiver.
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
- [stringByStandardizingPath](standardizingpath.md): A new string made by removing extraneous path components from the receiver.
