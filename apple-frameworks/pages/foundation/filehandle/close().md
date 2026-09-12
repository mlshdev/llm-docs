> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/close()](https://developer.apple.com/documentation/foundation/filehandle/close())

# close() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

## Declaration

```swift
func close() throws
```

<a id="Discussion"></a>

## Discussion

If the file handle object owns its file descriptor, it automatically closes that descriptor when deallocated. If you initialized the file handle object using the [init(fileDescriptor:)](init%28filedescriptor_%29.md) method, or you initialized it using the [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md) and passed [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter, you can use this method to close the file descriptor; otherwise, you must close the file descriptor yourself.

After calling this method, you may still use the file handle object, but you must not attempt to read or write data or use the object to operate on the file descriptor. Attempts to read or write a closed file descriptor raise an exception.

## See Also

### Operating on a file

- [synchronize()](synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.
- [truncate(atOffset:)](truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.

# closeAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

## Declaration

```objectivec
- (BOOL) closeAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

If the file handle object owns its file descriptor, it automatically closes that descriptor when deallocated. If you initialized the file handle object using the [initWithFileDescriptor:](init%28filedescriptor_%29.md) method, or you initialized it using the [initWithFileDescriptor:closeOnDealloc:](init%28filedescriptor_closeondealloc_%29.md) and passed [false](https://developer.apple.com/documentation/swift/false) for the `flag` parameter, you can use this method to close the file descriptor; otherwise, you must close the file descriptor yourself.

After calling this method, you may still use the file handle object, but you must not attempt to read or write data or use the object to operate on the file descriptor. Attempts to read or write a closed file descriptor raise an exception.

## See Also

### Operating on a file

- [synchronizeAndReturnError:](synchronize%28%29.md): Causes all in-memory data and attributes of the file represented by the file handle to write to permanent storage.
- [truncateAtOffset:error:](truncate%28atoffset_%29.md): Truncates or extends the file represented by the file handle to a specified offset within the file and puts the file pointer at that position.
