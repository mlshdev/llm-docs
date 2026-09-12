> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/write(_:)](https://developer.apple.com/documentation/appkit/nspasteboard/write(_:))

# write(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the serialized contents of the specified file wrapper to the pasteboard.

## Declaration

```swift
func write(_ wrapper: FileWrapper) -> Bool
```

## Parameters

- `wrapper`: The file wrapper to write to the pasteboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Writes the serialized contents of the file wrapper `wrapper` to the receiver and declares the data to be of type `NSFileContentsPboardType` and also of a type appropriate for the file’s extension (as returned by the `NSCreateFileContentsPboardType` function when passed the files extension), if it has one. If `wrapper` does not have a preferred filename, this method raises an exception.

## See Also

### Writing data (macOS 10.5 and earlier)

- [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes(\_:owner:)](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents(\_:)](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.

# writeFileWrapper: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the serialized contents of the specified file wrapper to the pasteboard.

## Declaration

```objectivec
- (BOOL) writeFileWrapper:(NSFileWrapper *) wrapper;
```

## Parameters

- `wrapper`: The file wrapper to write to the pasteboard.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was successfully written, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Writes the serialized contents of the file wrapper `wrapper` to the receiver and declares the data to be of type `NSFileContentsPboardType` and also of a type appropriate for the file’s extension (as returned by the `NSCreateFileContentsPboardType` function when passed the files extension), if it has one. If `wrapper` does not have a preferred filename, this method raises an exception.

## See Also

### Writing data (macOS 10.5 and earlier)

- [declareTypes:owner:](declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes:owner:](addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents:](writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
