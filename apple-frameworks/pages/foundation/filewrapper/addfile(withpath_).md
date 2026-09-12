> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/addfile(withpath:)](https://developer.apple.com/documentation/foundation/filewrapper/addfile(withpath:))

# addFile(withPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.

> Use [addFileWrapper(\_:)](addfilewrapper%28__%29.md) instead.

## Declaration

```swift
func addFile(withPath path: String) -> String
```

## Parameters

- `path`: File-System node from which to create the file wrapper to add to the directory.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the new file wrapper in the directory’s list of file wrappers. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Instead of using this method, you can instantiate `NSFileWrapper` with one of the initializers, set its [preferredFilename](preferredfilename.md) property if necessary, and pass the result to [addFileWrapper(\_:)](addfilewrapper%28__%29.md).

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper(\_:)](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addRegularFile(withContents:preferredFilename:)](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForChildFileWrapper(\_:)](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination()](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

# addFileWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.

> Use [addFileWrapper:](addfilewrapper%28__%29.md) instead.

## Declaration

```objectivec
- (NSString *) addFileWithPath:(NSString *) path;
```

## Parameters

- `path`: File-System node from which to create the file wrapper to add to the directory.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the new file wrapper in the directory’s list of file wrappers. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Instead of using this method, you can instantiate `NSFileWrapper` with one of the initializers, set its [preferredFilename](preferredfilename.md) property if necessary, and pass the result to [addFileWrapper:](addfilewrapper%28__%29.md).

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper:](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addRegularFileWithContents:preferredFilename:](addregularfile%28withcontents_preferredfilename_%29.md): Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForFileWrapper:](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.
