> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(directorywithfilewrappers:)](https://developer.apple.com/documentation/foundation/filewrapper/init(directorywithfilewrappers:))

# init(directoryWithFileWrappers:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a directory file wrapper, with a given file-wrapper list.

## Declaration

```swift
init(directoryWithFileWrappers childrenByPreferredName: [String : FileWrapper])
```

## Parameters

- `childrenByPreferredName`: Key-value dictionary of file wrappers with which to initialize the receiver. The dictionary must contain entries whose values are the file wrappers that are to become children and whose keys are filenames. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

<a id="return-value"></a>

## Return Value

Initialized file wrapper for `fileWrappers`.

<a id="Discussion"></a>

## Discussion

After initialization, the file wrapper is not associated with a file-system node until you save it using [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md).

The receiver is initialized with open permissions: anyone can read, write, or modify the directory on disk.

If any file wrapper in the directory doesn’t have a preferred filename, its preferred name is automatically set to its corresponding key in the `childrenByPreferredName` dictionary.

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [init(url:options:)](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [init(path:)](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [init(symbolicLinkWithDestination:)](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# initDirectoryWithFileWrappers: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a directory file wrapper, with a given file-wrapper list.

## Declaration

```objectivec
- (instancetype) initDirectoryWithFileWrappers:(NSDictionary<NSString *,NSFileWrapper *> *) childrenByPreferredName;
```

## Parameters

- `childrenByPreferredName`: Key-value dictionary of file wrappers with which to initialize the receiver. The dictionary must contain entries whose values are the file wrappers that are to become children and whose keys are filenames. See [Accessing File Wrapper Identities](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileWrappers/FileWrappers.html#//apple_ref/doc/uid/TP40010672-CH13-SW1) in [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672) for more information about the file-wrapper list structure.

<a id="return-value"></a>

## Return Value

Initialized file wrapper for `fileWrappers`.

<a id="Discussion"></a>

## Discussion

After initialization, the file wrapper is not associated with a file-system node until you save it using [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md).

The receiver is initialized with open permissions: anyone can read, write, or modify the directory on disk.

If any file wrapper in the directory doesn’t have a preferred filename, its preferred name is automatically set to its corresponding key in the `childrenByPreferredName` dictionary.

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [initWithURL:options:error:](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [initWithPath:](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [initSymbolicLinkWithDestination:](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
