> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/init(url:options:)-70161](https://developer.apple.com/documentation/foundation/filewrapper/init(url:options:)-70161)

# init(url:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.

## Declaration

```swift
init(url: URL, options: FileWrapper.ReadingOptions = []) throws
```

## Parameters

- `url`: URL of the file-system node the file wrapper is to represent.
- `options`: Option flags for reading the node located at `url`. See [FileWrapper.ReadingOptions](readingoptions.md) for possible values.

<a id="return-value"></a>

## Return Value

File wrapper for the file-system node at `url`. May be a directory, file, or symbolic link, depending on what is located at the URL. Returns [false](https://developer.apple.com/documentation/swift/false) (0) if reading is not successful.

<a id="Discussion"></a>

## Discussion

If `url` is a directory, this method recursively creates file wrappers for each node within that directory. Use the [fileWrappers](filewrappers.md) property to get the file wrappers of the nodes contained by the directory.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [filename](filename.md): The filename of the file wrapper object
- [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672)
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [init(path:)](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [init(directoryWithFileWrappers:)](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [init(symbolicLinkWithDestination:)](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [init(symbolicLinkWithDestinationURL:)](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [init(serializedRepresentation:)](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.

# initWithURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url options:(NSFileWrapperReadingOptions) options error:(NSError **) outError;
```

## Parameters

- `url`: URL of the file-system node the file wrapper is to represent.
- `options`: Option flags for reading the node located at `url`. See [NSFileWrapperReadingOptions](readingoptions.md) for possible values.
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

File wrapper for the file-system node at `url`. May be a directory, file, or symbolic link, depending on what is located at the URL. Returns [false](https://developer.apple.com/documentation/swift/false) (0) if reading is not successful.

<a id="Discussion"></a>

## Discussion

If `url` is a directory, this method recursively creates file wrappers for each node within that directory. Use the [fileWrappers](filewrappers.md) property to get the file wrappers of the nodes contained by the directory.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [filename](filename.md): The filename of the file wrapper object
- [File System Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010672)
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Creating File Wrappers

- [initWithPath:](init%28path_%29.md): Deprecated. Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the path.
- [initDirectoryWithFileWrappers:](init%28directorywithfilewrappers_%29.md): Initializes the receiver as a directory file wrapper, with a given file-wrapper list.
- [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.
- [initSymbolicLinkWithDestination:](init%28symboliclinkwithdestination_%29.md): Deprecated. Initializes the receiver as a symbolic-link file wrapper.
- [initSymbolicLinkWithDestinationURL:](init%28symboliclinkwithdestinationurl_%29.md): Initializes the receiver as a symbolic-link file wrapper that links to a specified file.
- [initWithSerializedRepresentation:](init%28serializedrepresentation_%29.md): Initializes the receiver as a regular-file file wrapper from given serialized data.
