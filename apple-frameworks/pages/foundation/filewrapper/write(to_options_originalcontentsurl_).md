> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/write(to:options:originalcontentsurl:)](https://developer.apple.com/documentation/foundation/filewrapper/write(to:options:originalcontentsurl:))

# write(to:options:originalContentsURL:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Recursively writes the entire contents of a file wrapper to a given file-system URL.

## Declaration

```swift
func write(to url: URL, options: FileWrapper.WritingOptions = [], originalContentsURL: URL?) throws
```

## Parameters

- `url`: URL of the file-system node to which the file wrapper’s contents are written.
- `options`: Option flags for writing to the node located at `url`. See [FileWrapper.WritingOptions](writingoptions.md) for possible values.
- `originalContentsURL`: The location of a previous revision of the contents being written. The default implementation of this method attempts to avoid unnecessary I/O by writing hard links to regular files instead of actually writing out their contents when the contents have not changed.  The child file wrappers must return accurate values when its [filename](filename.md) property is accessed for this to work. Use the `NSFileWrapperWritingWithNameUpdating` writing option to increase the likelihood of that.

  Specify `nil` for this parameter if there is no earlier version of the contents or if you want to ensure that all the contents are written to files.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [filename](filename.md): The filename of the file wrapper object

### Writing Files

- [write(toFile:atomically:updateFilenames:)](write%28tofile_atomically_updatefilenames_%29.md): Deprecated. Writes a file wrapper’s contents to a given file-system node.

# writeToURL:options:originalContentsURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Recursively writes the entire contents of a file wrapper to a given file-system URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url options:(NSFileWrapperWritingOptions) options originalContentsURL:(NSURL *) originalContentsURL error:(NSError **) outError;
```

## Parameters

- `url`: URL of the file-system node to which the file wrapper’s contents are written.
- `options`: Option flags for writing to the node located at `url`. See [NSFileWrapperWritingOptions](writingoptions.md) for possible values.
- `originalContentsURL`: The location of a previous revision of the contents being written. The default implementation of this method attempts to avoid unnecessary I/O by writing hard links to regular files instead of actually writing out their contents when the contents have not changed.  The child file wrappers must return accurate values when its [filename](filename.md) property is accessed for this to work. Use the `NSFileWrapperWritingWithNameUpdating` writing option to increase the likelihood of that.

  Specify `nil` for this parameter if there is no earlier version of the contents or if you want to ensure that all the contents are written to files.
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the write operation is successful. If not successful, returns [false](https://developer.apple.com/documentation/swift/false) after setting `outError` to an `NSError` object that describes the reason why the file wrapper’s contents could not be written.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [filename](filename.md): The filename of the file wrapper object

### Writing Files

- [writeToFile:atomically:updateFilenames:](write%28tofile_atomically_updatefilenames_%29.md): Deprecated. Writes a file wrapper’s contents to a given file-system node.
