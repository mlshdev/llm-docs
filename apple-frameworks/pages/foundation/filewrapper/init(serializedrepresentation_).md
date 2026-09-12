> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(serializedrepresentation:)](https://developer.apple.com/documentation/foundation/filewrapper/init(serializedrepresentation:))

# init(serializedRepresentation:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a regular-file file wrapper from given serialized data.

## Declaration

```swift
init?(serializedRepresentation serializeRepresentation: Data)
```

## Parameters

- `serializeRepresentation`: Serialized representation of a file wrapper in the format used for the `NSFileContentsPboardType` pasteboard type. Data of this format is returned by such methods as [serializedRepresentation](serializedrepresentation.md) and [rtfd(from:documentAttributes:)](../nsattributedstring/rtfd%28from_documentattributes_%29.md) ([NSAttributedString](../nsattributedstring.md)).

<a id="return-value"></a>

## Return Value

Regular-file file wrapper initialized from `serializedRepresentation`.

<a id="Discussion"></a>

## Discussion

The file wrapper is not associated with a file-system node until you save it using [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md).

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
- [init(symbolicLinkWithDestination:)](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.

# initWithSerializedRepresentation: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver as a regular-file file wrapper from given serialized data.

## Declaration

```objectivec
- (instancetype) initWithSerializedRepresentation:(NSData *) serializeRepresentation;
```

## Parameters

- `serializeRepresentation`: Serialized representation of a file wrapper in the format used for the `NSFileContentsPboardType` pasteboard type. Data of this format is returned by such methods as [serializedRepresentation](serializedrepresentation.md) and [RTFDFromRange:documentAttributes:](../nsattributedstring/rtfd%28from_documentattributes_%29.md) ([NSAttributedString](../nsattributedstring.md)).

<a id="return-value"></a>

## Return Value

Regular-file file wrapper initialized from `serializedRepresentation`.

<a id="Discussion"></a>

## Discussion

The file wrapper is not associated with a file-system node until you save it using [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md).

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
- [initSymbolicLinkWithDestination:](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
