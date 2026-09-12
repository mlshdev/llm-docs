> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readdata(oflength:)](https://developer.apple.com/documentation/foundation/filehandle/readdata(oflength:))

# readData(ofLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Reads data synchronously up to the specified number of bytes.

> To handle errors when reading data from the file handle, use [read(upToCount:)](read%28uptocount_%29.md) in Swift and [readDataUpToLength:error:](../nsfilehandle/readdatauptolength_error_.md) in Objective-C.

## Declaration

```swift
func readData(ofLength length: Int) -> Data
```

## Parameters

- `length`: The number of bytes to read from the file handle.

<a id="return-value"></a>

## Return Value

The data available through the receiver up to a maximum of `length` bytes, or the maximum size that can be represented by an [NSData](../nsdata.md) object, whichever is the smaller.

<a id="Discussion"></a>

## Discussion

If the handle represents a file, this method returns the data obtained by reading `length` bytes starting at the current file pointer. If `length` bytes aren’t available, this method returns the data from the current file pointer to the end of the file. If the handle represents a communications channel, the method reads up to `length` bytes from the channel. Returns an empty `NSData` object if the handle is at the file’s end or if the communications channel returns an end-of-file indicator.

> **Important**

>  This method raises [fileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if attempts to determine the file-handle type fail or if attempts to read from the file or channel fail.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.

### Deprecated

- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile()](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toFileOffset:)](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile()](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFile(atOffset:)](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.

# readDataOfLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Reads data synchronously up to the specified number of bytes.

> To handle errors when reading data from the file handle, use [read(upToCount:)](read%28uptocount_%29.md) in Swift and [readDataUpToLength:error:](../nsfilehandle/readdatauptolength_error_.md) in Objective-C.

## Declaration

```objectivec
- (NSData *) readDataOfLength:(NSUInteger) length;
```

## Parameters

- `length`: The number of bytes to read from the file handle.

<a id="return-value"></a>

## Return Value

The data available through the receiver up to a maximum of `length` bytes, or the maximum size that can be represented by an [NSData](../nsdata.md) object, whichever is the smaller.

<a id="Discussion"></a>

## Discussion

If the handle represents a file, this method returns the data obtained by reading `length` bytes starting at the current file pointer. If `length` bytes aren’t available, this method returns the data from the current file pointer to the end of the file. If the handle represents a communications channel, the method reads up to `length` bytes from the channel. Returns an empty `NSData` object if the handle is at the file’s end or if the communications channel returns an end-of-file indicator.

> **Important**

>  This method raises [NSFileHandleOperationException](../nsexceptionname/filehandleoperationexception.md) if attempts to determine the file-handle type fail or if attempts to read from the file or channel fail.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.

### Deprecated

- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [writeData:](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.
- [offsetInFile](offsetinfile.md): Deprecated. The position of the file pointer within the file represented by the file handle.
- [seekToEndOfFile](seektoendoffile%28%29.md): Deprecated. Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seekToFileOffset:](seek%28tofileoffset_%29.md): Deprecated. Moves the file pointer to the specified offset within the file represented by the receiver.
- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.
- [synchronizeFile](synchronizefile%28%29.md): Deprecated. Causes all in-memory data and attributes of the file represented by the handle to write to permanent storage.
- [truncateFileAtOffset:](truncatefile%28atoffset_%29.md): Deprecated. Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
- [NSFileHandleNotificationMonitorModes](../nsfilehandlenotificationmonitormodes.md): Deprecated. Currently unused.
