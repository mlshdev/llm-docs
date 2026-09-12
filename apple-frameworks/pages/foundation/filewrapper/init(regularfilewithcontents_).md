> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(regularfilewithcontents:)](https://developer.apple.com/documentation/foundation/filewrapper/init(regularfilewithcontents:))

# init(regularFileWithContents:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a regular-file file wrapper.

## Declaration

```swift
init(regularFileWithContents contents: Data)
```

## Parameters

- `contents`: Contents of the file.

<a id="return-value"></a>

## Return Value

Initialized regular-file file wrapper containing `contents`.

<a id="Discussion"></a>

## Discussion

After initialization, the file wrapper is not associated with a file-system node until you save it using [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md).

The file wrapper is initialized with open permissions: anyone can write to or read the file wrapper.

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

### Creating File Wrappers

- [init(url:options:)](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [init(path:)](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [init(directoryWithFileWrappers:)](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [init(symbolicLinkWithDestination:)](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# initRegularFileWithContents: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a regular-file file wrapper.

## Declaration

```objectivec
- (instancetype) initRegularFileWithContents:(NSData *) contents;
```

## Parameters

- `contents`: Contents of the file.

<a id="return-value"></a>

## Return Value

Initialized regular-file file wrapper containing `contents`.

<a id="Discussion"></a>

## Discussion

After initialization, the file wrapper is not associated with a file-system node until you save it using [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md).

The file wrapper is initialized with open permissions: anyone can write to or read the file wrapper.

## See Also

### Related Documentation

- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [regularFileContents](regularfilecontents.md): The contents of the file-system node associated with a regular-file file wrapper.

### Creating File Wrappers

- [initWithURL:options:error:](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [initWithPath:](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [initDirectoryWithFileWrappers:](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [initSymbolicLinkWithDestination:](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
