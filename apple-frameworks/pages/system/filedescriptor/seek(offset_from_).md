> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/seek(offset:from:)](https://developer.apple.com/documentation/system/filedescriptor/seek(offset:from:))

# seek(offset:from:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Repositions the offset for the given file descriptor.

## Declaration

```swift
@discardableResult func seek(offset: Int64, from whence: FileDescriptor.SeekOrigin) throws -> Int64
```

## Parameters

- `offset`: The new offset for the file descriptor.
- `whence`: The origin of the new offset.

<a id="return-value"></a>

## Return Value

The file’s offset location, in bytes from the beginning of the file.

<a id="discussion"></a>

## Discussion

The corresponding C function is `lseek`.

## See Also

### Changing a File’s Offset

- [FileDescriptor.SeekOrigin](seekorigin.md): Options for specifying what a file descriptor’s offset is relative to.
