> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/regularfilecontents](https://developer.apple.com/documentation/foundation/filewrapper/regularfilecontents)

# regularFileContents (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents of the file-system node associated with a regular-file file wrapper.

## Declaration

```swift
var regularFileContents: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property may contain `nil` if the user modifies the file after you call [read(from:options:)](read%28from_options_%29.md) or [init(url:options:)](init%28url_options_%29-70161.md) but before [FileWrapper](../filewrapper.md) has read the contents of the file. Use the [immediate](readingoptions/immediate.md) reading option to reduce the likelihood of that problem.

<a id="Special-Considerations"></a>

### Special Considerations

This property raises `NSInternalInconsistencyException` if the file wrapper object is not a regular-file file wrapper.

## See Also

### Related Documentation

- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [init(regularFileWithContents:)](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.

### Accessing Files

- [filename](filename.md): The filename of the file wrapper object
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](fileattributes.md): A dictionary of file attributes.

# regularFileContents (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contents of the file-system node associated with a regular-file file wrapper.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * regularFileContents;
```

<a id="Discussion"></a>

## Discussion

This property may contain `nil` if the user modifies the file after you call [readFromURL:options:error:](read%28from_options_%29.md) or [initWithURL:options:error:](init%28url_options_%29-70161.md) but before [NSFileWrapper](../filewrapper.md) has read the contents of the file. Use the [NSFileWrapperReadingImmediate](readingoptions/immediate.md) reading option to reduce the likelihood of that problem.

<a id="Special-Considerations"></a>

### Special Considerations

This property raises `NSInternalInconsistencyException` if the file wrapper object is not a regular-file file wrapper.

## See Also

### Related Documentation

- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
- [initRegularFileWithContents:](init%28regularfilewithcontents_%29.md): Initializes the receiver as a regular-file file wrapper.

### Accessing Files

- [filename](filename.md): The filename of the file wrapper object
- [preferredFilename](preferredfilename.md): The preferred filename for the file wrapper object.
- [fileAttributes](fileattributes.md): A dictionary of file attributes.
