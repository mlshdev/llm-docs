> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/seek(tofileoffset:)](https://developer.apple.com/documentation/foundation/filehandle/seek(tofileoffset:))

# seek(toFileOffset:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Moves the file pointer to the specified offset within the file represented by the receiver.

> Use [seek(toOffset:)](seek%28tooffset_%29.md) to handle errors when seeking to an offset in the file.

## Declaration

```swift
func seek(toFileOffset offset: UInt64)
```

## Parameters

- `offset`: The offset to seek to.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

Raises [fileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if any other error occurs.

## See Also

### Deprecated

- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile()](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFile(atOffset:)](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# seekToFileOffset: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Moves the file pointer to the specified offset within the file represented by the receiver.

> Use [seekToOffset:error:](seek%28tooffset_%29.md) to handle errors when seeking to an offset in the file.

## Declaration

```objectivec
- (void) seekToFileOffset:(unsigned long long) offset;
```

## Parameters

- `offset`: The offset to seek to.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

Raises [NSFileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if called on a file handle representing a pipe or socket, if the file descriptor is closed, or if any other error occurs.

## See Also

### Deprecated

- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataOfLength:](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [writeData:](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFileAtOffset:](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
