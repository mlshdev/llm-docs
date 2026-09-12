> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readfilewrapper()](https://developer.apple.com/documentation/appkit/nspasteboard/readfilewrapper())

# readFileWrapper() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data representing a file’s contents from the receiver and returns it as a file wrapper.

## Declaration

```swift
func readFileWrapper() -> FileWrapper?
```

<a id="return-value"></a>

## Return Value

A file wrapper containing the pasteboard data, or `nil` if the receiver contained no data of type `NSFileContentsPboardType`.

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and earlier, the file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. In macOS 10.5 and later, using the UTI of a file to represent its contents now replaces this functionality.

## See Also

### Reading data (macOS 10.5 and earlier)

- [readFileContentsType(\_:toFile:)](readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.

# readFileWrapper (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Reads data representing a file’s contents from the receiver and returns it as a file wrapper.

## Declaration

```objectivec
- (NSFileWrapper *) readFileWrapper;
```

<a id="return-value"></a>

## Return Value

A file wrapper containing the pasteboard data, or `nil` if the receiver contained no data of type `NSFileContentsPboardType`.

<a id="Discussion"></a>

## Discussion

In macOS 10.5 and earlier, the file contents pboard type allowed you to synthesize a pboard type for a file’s contents based on the file’s extension. In macOS 10.5 and later, using the UTI of a file to represent its contents now replaces this functionality.

## See Also

### Reading data (macOS 10.5 and earlier)

- [readFileContentsType:toFile:](readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.
