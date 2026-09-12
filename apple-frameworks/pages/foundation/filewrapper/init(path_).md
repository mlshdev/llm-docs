> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(path:)](https://developer.apple.com/documentation/foundation/filewrapper/init(path:))

# init(path:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.

> Use [init(url:options:)](init%28url_options_%29-70161.md) instead.

## Declaration

```swift
convenience init?(path: String)
```

## Parameters

- `path`: Pathname of the file-system node the file wrapper is to represent.

<a id="return-value"></a>

## Return Value

File wrapper for `node`.

<a id="Discussion"></a>

## Discussion

If `node` is a directory, this method recursively creates file wrappers for each node within that directory.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [init(url:options:)](init%28url_options_%29-70161.md).

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [init(url:options:)](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [init(directoryWithFileWrappers:)](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [init(symbolicLinkWithDestination:)](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# initWithPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.

> Use [initWithURL:options:error:](init%28url_options_%29-70161.md) instead.

## Declaration

```objectivec
- (id) initWithPath:(NSString *) path;
```

## Parameters

- `path`: Pathname of the file-system node the file wrapper is to represent.

<a id="return-value"></a>

## Return Value

File wrapper for `node`.

<a id="Discussion"></a>

## Discussion

If `node` is a directory, this method recursively creates file wrappers for each node within that directory.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [initWithURL:options:error:](init%28url_options_%29-70161.md).

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [initWithURL:options:error:](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [initDirectoryWithFileWrappers:](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [initSymbolicLinkWithDestination:](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
