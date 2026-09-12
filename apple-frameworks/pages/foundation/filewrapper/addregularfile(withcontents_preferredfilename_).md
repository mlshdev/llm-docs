> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/addregularfile(withcontents:preferredfilename:)](https://developer.apple.com/documentation/foundation/filewrapper/addregularfile(withcontents:preferredfilename:))

# addRegularFile(withContents:preferredFilename:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.

## Declaration

```swift
func addRegularFile(withContents data: Data, preferredFilename fileName: String) -> String
```

## Parameters

- `data`: Contents for the new regular-file file wrapper.
- `fileName`: Preferred filename for the new regular-file file wrapper.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the new file wrapper in the directory’s list of file wrappers. The dictionary key is a unique filename, which is the same as the passed-in file wrapper’s preferred filename unless that name is already in use as a key in the directory’s dictionary of children. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

<a id="Discussion"></a>

## Discussion

This is a convenience method. The default implementation allocates a new file wrapper, initializes it with [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md), set its [preferredFilename](preferredfilename.md) property, adds it to the directory with [addFileWrapper(\_:)](addfilewrapper%28__%29.md), and returns what [addFileWrapper(\_:)](addfilewrapper%28__%29.md) returned.

<a id="Special-Considerations"></a>

### Special Considerations

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

This method raises `NSInvalidArgumentException` if you pass `nil` or an empty value for `filename`.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper(\_:)](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper(\_:)](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFile(withPath:)](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLink(withDestination:preferredFilename:)](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForChildFileWrapper(\_:)](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination()](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.

# addRegularFileWithContents:preferredFilename: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a regular-file file wrapper with the given contents and adds it to the receiver, which must be a directory file wrapper.

## Declaration

```objectivec
- (NSString *) addRegularFileWithContents:(NSData *) data preferredFilename:(NSString *) fileName;
```

## Parameters

- `data`: Contents for the new regular-file file wrapper.
- `fileName`: Preferred filename for the new regular-file file wrapper.

<a id="return-value"></a>

## Return Value

Dictionary key used to store the new file wrapper in the directory’s list of file wrappers. The dictionary key is a unique filename, which is the same as the passed-in file wrapper’s preferred filename unless that name is already in use as a key in the directory’s dictionary of children. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

<a id="Discussion"></a>

## Discussion

This is a convenience method. The default implementation allocates a new file wrapper, initializes it with [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md), set its [preferredFilename](preferredfilename.md) property, adds it to the directory with [addFileWrapper:](addfilewrapper%28__%29.md), and returns what [addFileWrapper:](addfilewrapper%28__%29.md) returned.

<a id="Special-Considerations"></a>

### Special Considerations

This method raises `NSInternalInconsistencyException` if the receiver is not a directory file wrapper.

This method raises `NSInvalidArgumentException` if you pass `nil` or an empty value for `filename`.

## See Also

### Accessing File-Wrapper Information

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [addFileWrapper:](addfilewrapper%28__%29.md): Adds a child file wrapper to the receiver, which must be a directory file wrapper.
- [removeFileWrapper:](removefilewrapper%28__%29.md): Removes a child file wrapper from the receiver, which must be a directory file wrapper.
- [addFileWithPath:](addfile%28withpath_%29.md): Deprecated. Creates a file wrapper from a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [addSymbolicLinkWithDestination:preferredFilename:](addsymboliclink%28withdestination_preferredfilename_%29.md): Deprecated. Creates a symbolic-link file wrapper pointing to a given file-system node and adds it to the receiver, which must be a directory file wrapper.
- [keyForFileWrapper:](keyforchildfilewrapper%28__%29.md): Returns the dictionary key used by a directory to identify a given file wrapper.
- [symbolicLinkDestination](symboliclinkdestination%28%29.md): Deprecated. Provides the pathname referenced by the file wrapper object, which must be a symbolic-link file wrapper.
- [symbolicLinkDestinationURL](symboliclinkdestinationurl.md): The URL referenced by the file wrapper object, which must be a symbolic-link file wrapper.
