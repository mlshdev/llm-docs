> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/filewrappers](https://developer.apple.com/documentation/foundation/filewrapper/filewrappers)

# fileWrappers (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file wrappers contained by a directory file wrapper.

## Declaration

```swift
var fileWrappers: [String : FileWrapper]? { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary contains entries whose values are the file wrappers and whose keys are the unique filenames that have been assigned to each one. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

This property may contain `nil` if the user modifies the directory after you call [read(from:options:)](read%28from_options_%29.md) or [init(url:options:)](init%28url_options_%29-70161.md) but before [FileWrapper](../filewrapper.md) has read the contents of the directory.  Use the [immediate](readingoptions/immediate.md) reading option to reduce the likelihood of that problem.

<a id="Special-Considerations"></a>

### Special Considerations

This property raises `NSInternalInconsistencyException` if the file wrapper object is not a directory file wrapper.

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Accessing File-Wrapper Information

- [addFileWrapper(\_:)](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFile(withPath:)](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFile(withContents:preferredFilename:)](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForChildFileWrapper(\_:)](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination()](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

# fileWrappers (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file wrappers contained by a directory file wrapper.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSFileWrapper *> * fileWrappers;
```

<a id="Discussion"></a>

## Discussion

The dictionary contains entries whose values are the file wrappers and whose keys are the unique filenames that have been assigned to each one. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

This property may contain `nil` if the user modifies the directory after you call [readFromURL:options:error:](read%28from_options_%29.md) or [initWithURL:options:error:](init%28url_options_%29-70161.md) but before [NSFileWrapper](../filewrapper.md) has read the contents of the directory.  Use the [NSFileWrapperReadingImmediate](readingoptions/immediate.md) reading option to reduce the likelihood of that problem.

<a id="Special-Considerations"></a>

### Special Considerations

This property raises `NSInternalInconsistencyException` if the file wrapper object is not a directory file wrapper.

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Accessing File-Wrapper Information

- [addFileWrapper:](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFileWithPath:](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFileWithContents:preferredFilename:](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForFileWrapper:](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.
