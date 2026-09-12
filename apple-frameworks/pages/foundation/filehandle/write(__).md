> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/write(_:)](https://developer.apple.com/documentation/foundation/filehandle/write(_:))

# write(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes the specified data synchronously to the file handle.

> To handle errors when writing data to the file handle, use [write(contentsOf:)](write%28contentsof_%29.md) in Swift and [writeData:error:](../nsfilehandle/writedata_error_.md) in Objective-C.

## Declaration

```swift
func write(_ data: Data)
```

## Parameters

- `data`: The data to write to the file handle.

<a id="Discussion"></a>

## Discussion

If the handle represents a file, writing takes place at the file pointer’s current position. After it writes the data, the method advances the file pointer by the number of bytes written.

> **Important**

>  This method raises [fileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if the file descriptor is closed or isn’t valid, if the handle represents an unconnected pipe or socket endpoint, if there isn’t any free space on the file system, or if any other writing error occurs.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.

### Deprecated

- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toFileOffset:)](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile()](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFile(atOffset:)](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# writeData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes the specified data synchronously to the file handle.

> To handle errors when writing data to the file handle, use [write(contentsOf:)](write%28contentsof_%29.md) in Swift and [writeData:error:](../nsfilehandle/writedata_error_.md) in Objective-C.

## Declaration

```objectivec
- (void) writeData:(NSData *) data;
```

## Parameters

- `data`: The data to write to the file handle.

<a id="Discussion"></a>

## Discussion

If the handle represents a file, writing takes place at the file pointer’s current position. After it writes the data, the method advances the file pointer by the number of bytes written.

> **Important**

>  This method raises [NSFileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if the file descriptor is closed or isn’t valid, if the handle represents an unconnected pipe or socket endpoint, if there isn’t any free space on the file system, or if any other writing error occurs.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.

### Deprecated

- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [readDataOfLength:](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToFileOffset:](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFileAtOffset:](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
