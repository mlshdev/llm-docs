> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/write(from:atoffset:)](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/write(from:atoffset:))

# write(from:atOffset:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Writes data at the supplied offset from the specified buffer, not exceeding the buffer’s allocated size.

## Declaration

```swift
func write(from buffer: UnsafeRawBufferPointer, atOffset offset: Int64) throws -> Int
```

## Parameters

- `buffer`: The data buffer that the operation uses as a source for the data.
- `offset`: The stream position of the segment that the operation writes.

<a id="return-value"></a>

## Return Value

The number of bytes written by the stream.

## See Also

### Reading and Writing Data

- [read(into:)](read%28into_%29.md): Reads data to the specified buffer, not exceeding the buffer’s previously allocated size.
- [read(into:atOffset:)](read%28into_atoffset_%29.md): Reads data at the supplied offset to the specified buffer, not exceeding the buffer’s previously allocated size.
- [write(from:)](write%28from_%29.md): Writes data from the specified buffer, not exceeding the buffer’s allocated size.
