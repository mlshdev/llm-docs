> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/keyforchildfilewrapper(_:)](https://developer.apple.com/documentation/foundation/filewrapper/keyforchildfilewrapper(_:))

# keyForChildFileWrapper(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary key used by a directory to identify a given file wrapper.

## Declaration

```swift
func keyForChildFileWrapper(_ child: FileWrapper) -> String?
```

## Parameters

- `child`: The child file wrapper for which you want the key.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the file wrapper in the directory’s list of file wrappers. The dictionary key is a unique filename, which may not be the same as the passed-in file wrapper’s preferred filename if more than one file wrapper in the directory’s dictionary of children has the same preferred filename. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure. Returns `nil` if the file wrapper specified in `child` is not a child of the directory.

<a id="Discussion"></a>

## Discussion

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper(\_:)](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFile(withPath:)](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFile(withContents:preferredFilename:)](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [symbolicLinkDestination()](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

# keyForFileWrapper: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary key used by a directory to identify a given file wrapper.

## Declaration

```objectivec
- (NSString *) keyForFileWrapper:(NSFileWrapper *) child;
```

## Parameters

- `child`: The child file wrapper for which you want the key.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the file wrapper in the directory’s list of file wrappers. The dictionary key is a unique filename, which may not be the same as the passed-in file wrapper’s preferred filename if more than one file wrapper in the directory’s dictionary of children has the same preferred filename. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure. Returns `nil` if the file wrapper specified in `child` is not a child of the directory.

<a id="Discussion"></a>

## Discussion

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

## See Also

### Related Documentation

- [filename](filename.md): The filename of the file wrapper object

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper:](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFileWithPath:](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addRegularFileWithContents:preferredFilename:](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [symbolicLinkDestination](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.
