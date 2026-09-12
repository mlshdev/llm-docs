> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/read(from:options:)](https://developer.apple.com/documentation/foundation/filewrapper/read(from:options:))

# read(from:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Recursively rereads the entire contents of a file wrapper from the specified location on disk.

## Declaration

```swift
func read(from url: URL, options: FileWrapper.ReadingOptions = []) throws
```

## Parameters

- `url`: URL of the file-system node corresponding to the file wrapper.
- `options`: Option flags for reading the node located at `url`. See [FileWrapper.ReadingOptions](readingoptions.md) for possible values.

<a id="Discussion"></a>

## Discussion

When reading a directory, children are added and removed as necessary to match the file system.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [init(url:options:)](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.

### Updating File Wrappers

- [needsToBeUpdated(fromPath:)](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContents(of:)](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [update(fromPath:)](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.

# readFromURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Recursively rereads the entire contents of a file wrapper from the specified location on disk.

## Declaration

```objectivec
- (BOOL) readFromURL:(NSURL *) url options:(NSFileWrapperReadingOptions) options error:(NSError **) outError;
```

## Parameters

- `url`: URL of the file-system node corresponding to the file wrapper.
- `options`: Option flags for reading the node located at `url`. See [NSFileWrapperReadingOptions](readingoptions.md) for possible values.
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful. If not successful, returns [false](https://developer.apple.com/documentation/swift/false) after setting `outError` to an `NSError` object that describes the reason why the file wrapper could not be reread.

<a id="Discussion"></a>

## Discussion

When reading a directory, children are added and removed as necessary to match the file system.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [fileWrappers](filewrappers.md): The file wrappers contained by a directory file wrapper.
- [initWithURL:options:error:](init%28url_options_%29-70161.md): Initializes a file wrapper instance whose kind is determined by the type of file-system node located by the URL.
- [filename](filename.md): The filename of the file wrapper object
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
- [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md): Recursively writes the entire contents of a file wrapper to a given file-system URL.

### Updating File Wrappers

- [needsToBeUpdatedFromPath:](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContentsOfURL:](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [updateFromPath:](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
