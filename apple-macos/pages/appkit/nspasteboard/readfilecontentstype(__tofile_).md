> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readfilecontentstype(_:tofile:)](https://developer.apple.com/documentation/appkit/nspasteboard/readfilecontentstype(_:tofile:))

# readFileContentsType(\_:toFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data representing a file’s contents from the receiver and writes it to the specified file.

## Declaration

```swift
func readFileContentsType(_ type: NSPasteboard.PasteboardType?, toFile filename: String) -> String?
```

## Parameters

- `type`: The pasteboard data type to read. You should generally specify a value for this parameter. If you specify `nil`, the filename extension (in combination with the `NSCreateFileContentsPboardType` function) is used to determine the type.
- `filename`: The file to receive the pasteboard data.

<a id="return-value"></a>

## Return Value

The name of the file into which the data was actually written.

<a id="Discussion"></a>

## Discussion

Data of any file contents type should only be read using this method. If data matching the specified type is not found on the pasteboard, data of type `NSFileContentsPboardType` is requested.

> **Mac OS 10.6 and later**

>  In macOS 10.5 and earlier, the file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. In macOS 10.5 and later, using the UTI of a file to represent its contents now replaces this functionality.

<a id="Special-Considerations"></a>

### Special Considerations

You must send an [availableType(from:)](availabletype%28from_%29.md) or [types](types.md) message before invoking [readFileContentsType(\_:toFile:)](readfilecontentstype%28__tofile_%29.md).

## See Also

### Related Documentation

- [writeFileContents(\_:)](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.

### Reading data (macOS 10.5 and earlier)

- [readFileWrapper()](readfilewrapper%28%29.md): Reads data representing a file’s contents from the receiver and returns it as a file wrapper.

# readFileContentsType:toFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data representing a file’s contents from the receiver and writes it to the specified file.

## Declaration

```objectivec
- (NSString *) readFileContentsType:(NSPasteboardType) type toFile:(NSString *) filename;
```

## Parameters

- `type`: The pasteboard data type to read. You should generally specify a value for this parameter. If you specify `nil`, the filename extension (in combination with the `NSCreateFileContentsPboardType` function) is used to determine the type.
- `filename`: The file to receive the pasteboard data.

<a id="return-value"></a>

## Return Value

The name of the file into which the data was actually written.

<a id="Discussion"></a>

## Discussion

Data of any file contents type should only be read using this method. If data matching the specified type is not found on the pasteboard, data of type `NSFileContentsPboardType` is requested.

> **Mac OS 10.6 and later**

>  In macOS 10.5 and earlier, the file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. In macOS 10.5 and later, using the UTI of a file to represent its contents now replaces this functionality.

<a id="Special-Considerations"></a>

### Special Considerations

You must send an [availableTypeFromArray:](availabletype%28from_%29.md) or [types](types.md) message before invoking [readFileContentsType:toFile:](readfilecontentstype%28__tofile_%29.md).

## See Also

### Related Documentation

- [writeFileContents:](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.

### Reading data (macOS 10.5 and earlier)

- [readFileWrapper](readfilewrapper%28%29.md): Reads data representing a file’s contents from the receiver and returns it as a file wrapper.
