> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/write(from:)](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/write(from:))

# write(from:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes data from the specified buffer, not exceeding the buffer’s allocated size.

## Declaration

```swift
func write(from buffer: UnsafeRawBufferPointer) throws -> Int
```

## Parameters

- `buffer`: The data buffer that the operation uses as a source for the data.

<a id="return-value"></a>

## Return Value

The number of bytes written by the stream.

<a id="Discussion"></a>

## Discussion

This function increments the internal stream position by the number of bytes written by the stream.

## See Also

### Reading and Writing Data

- [read(into:)](read%28into_%29.md): Reads data to the specified buffer, not exceeding the buffer’s previously allocated size.
- [read(into:atOffset:)](read%28into_atoffset_%29.md): Reads data at the supplied offset to the specified buffer, not exceeding the buffer’s previously allocated size.
- [write(from:atOffset:)](write%28from_atoffset_%29.md): Writes data at the supplied offset from the specified buffer, not exceeding the buffer’s allocated size.
