> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(symboliclinkwithdestination:)](https://developer.apple.com/documentation/foundation/filewrapper/init(symboliclinkwithdestination:))

# init(symbolicLinkWithDestination:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Initializes the receiver as a symbolic-link file wrapper.

> Use [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md) instead.

## Declaration

```swift
convenience init(symbolicLinkWithDestination path: String)
```

## Parameters

- `path`: Pathname the receiver is to represent.

<a id="return-value"></a>

## Return Value

Initialized symbolic-link file wrapper referencing `node`.

<a id="Discussion"></a>

## Discussion

The receiver is not associated to a file-system node until you save it using [write(toFile:atomically:updateFilenames:)](write%28tofile_atomically_updatefilenames_%29.md). It’s also initialized with open permissions; anyone can read or write the disk representations it saves.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md).

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [init(url:options:)](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [init(path:)](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [init(directoryWithFileWrappers:)](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# initSymbolicLinkWithDestination: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Initializes the receiver as a symbolic-link file wrapper.

> Use [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md) instead.

## Declaration

```objectivec
- (id) initSymbolicLinkWithDestination:(NSString *) path;
```

## Parameters

- `path`: Pathname the receiver is to represent.

<a id="return-value"></a>

## Return Value

Initialized symbolic-link file wrapper referencing `node`.

<a id="Discussion"></a>

## Discussion

The receiver is not associated to a file-system node until you save it using [writeToFile:atomically:updateFilenames:](write%28tofile_atomically_updatefilenames_%29.md). It’s also initialized with open permissions; anyone can read or write the disk representations it saves.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md).

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [initWithURL:options:error:](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [initWithPath:](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [initDirectoryWithFileWrappers:](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
