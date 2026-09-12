> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archivebytestreamprotocol/read(into:)](https://developer.apple.com/documentation/applearchive/archivebytestreamprotocol/read(into:))

# read(into:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Reads data to the specified buffer, not exceeding the buffer’s previously allocated size.

## Declaration

```swift
func read(into buffer: UnsafeMutableRawBufferPointer) throws -> Int
```

## Parameters

- `buffer`: The data buffer that the operation fills with the read bytes.

<a id="return-value"></a>

## Return Value

The number of bytes read and stored by the stream.

<a id="Discussion"></a>

## Discussion

This function increments the internal stream position by the number of bytes read by the stream.

## See Also

### Reading and Writing Data

- [read(into:atOffset:)](read%28into_atoffset_%29.md): Reads data at the supplied offset to the specified buffer, not exceeding the buffer’s previously allocated size.
- [write(from:)](write%28from_%29.md): Writes data from the specified buffer, not exceeding the buffer’s allocated size.
- [write(from:atOffset:)](write%28from_atoffset_%29.md): Writes data at the supplied offset from the specified buffer, not exceeding the buffer’s allocated size.
