> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/truncatefile(atoffset:)](https://developer.apple.com/documentation/foundation/filehandle/truncatefile(atoffset:))

# truncateFile(atOffset:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

> Use [truncate(atOffset:)](truncate%28atoffset_%29.md) to handle errors when truncating or extending the file.

## Declaration

```swift
func truncateFile(atOffset offset: UInt64)
```

## Parameters

- `offset`: The offset within the file that marks the new end of the file.

<a id="Discussion"></a>

## Discussion

If the file is extended (if `offset` is beyond the current end of file), the added characters are null bytes.

> **Important**

>  This method raises [fileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if the operation failed.

## See Also

### Deprecated

- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toFileOffset:)](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile()](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# truncateFileAtOffset: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

> Use [truncateAtOffset:error:](truncate%28atoffset_%29.md) to handle errors when truncating or extending the file.

## Declaration

```objectivec
- (void) truncateFileAtOffset:(unsigned long long) offset;
```

## Parameters

- `offset`: The offset within the file that marks the new end of the file.

<a id="Discussion"></a>

## Discussion

If the file is extended (if `offset` is beyond the current end of file), the added characters are null bytes.

> **Important**

>  This method raises [NSFileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if the operation failed.

## See Also

### Deprecated

- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataOfLength:](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [writeData:](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToFileOffset:](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
