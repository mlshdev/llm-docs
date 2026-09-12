> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/writefilecontents(_:)](https://developer.apple.com/documentation/appkit/nspasteboard/writefilecontents(_:))

# writeFileContents(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the specified file to the pasteboard.

## Declaration

```swift
func writeFileContents(_ filename: String) -> Bool
```

## Parameters

- `filename`: The name of the file to write to the pasteboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Writes the contents of the file `filename` to the receiver and declares the data to be of type `NSFileContentsPboardType` and also of a type appropriate for the file’s extension (as returned by the `NSCreateFileContentsPboardType` function when passed the files extension), if it has one.

## See Also

### Related Documentation

- [readFileContentsType(\_:toFile:)](readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.

### Writing data (macOS 10.5 and earlier)

- [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes(\_:owner:)](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [write(\_:)](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.

# writeFileContents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of the specified file to the pasteboard.

## Declaration

```objectivec
- (BOOL) writeFileContents:(NSString *) filename;
```

## Parameters

- `filename`: The name of the file to write to the pasteboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Writes the contents of the file `filename` to the receiver and declares the data to be of type `NSFileContentsPboardType` and also of a type appropriate for the file’s extension (as returned by the `NSCreateFileContentsPboardType` function when passed the files extension), if it has one.

## See Also

### Related Documentation

- [readFileContentsType:toFile:](readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.

### Writing data (macOS 10.5 and earlier)

- [declareTypes:owner:](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes:owner:](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileWrapper:](write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.
