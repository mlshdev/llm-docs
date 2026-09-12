> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/closefile()](https://developer.apple.com/documentation/foundation/filehandle/closefile())

# closeFile() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

> Use [close()](close%28%29.md) to handle errors when closing a file.

## Declaration

```swift
func closeFile()
```

<a id="Discussion"></a>

## Discussion

If the file handle object owns its file descriptor, it automatically closes that descriptor when it is deallocated. If you initialized the file handle object using the [init(fileDescriptor:)](init%28filedescriptor_%29.md) method, or you initialized it using the [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md) and passed [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter, you can use this method to close the file descriptor; otherwise, you must close the file descriptor yourself.

After calling this method, you may still use the file handle object but must not attempt to read or write data or use the object to operate on the file descriptor. Attempts to read or write a closed file descriptor raise an exception.

## See Also

### Deprecated

- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toFileOffset:)](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [synchronizeFile()](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFile(atOffset:)](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# closeFile (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

> Use [closeAndReturnError:](close%28%29.md) to handle errors when closing a file.

## Declaration

```objectivec
- (void) closeFile;
```

<a id="Discussion"></a>

## Discussion

If the file handle object owns its file descriptor, it automatically closes that descriptor when it is deallocated. If you initialized the file handle object using the [initWithFileDescriptor:](init%28filedescriptor_%29.md) method, or you initialized it using the [initWithFileDescriptor:closeOnDealloc:](init%28filedescriptor_closeondealloc_%29.md) and passed [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter, you can use this method to close the file descriptor; otherwise, you must close the file descriptor yourself.

After calling this method, you may still use the file handle object but must not attempt to read or write data or use the object to operate on the file descriptor. Attempts to read or write a closed file descriptor raise an exception.

## See Also

### Deprecated

- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataOfLength:](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [writeData:](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToFileOffset:](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [synchronizeFile](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFileAtOffset:](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
