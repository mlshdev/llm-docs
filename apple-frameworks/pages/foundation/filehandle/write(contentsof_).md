> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/write(contentsof:)](https://developer.apple.com/documentation/foundation/filehandle/write(contentsof:))

# write(contentsOf:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Writes the specified data synchronously to the file handle.

## Declaration

```swift
func write<T>(contentsOf data: T) throws where T : DataProtocol
```

## Parameters

- `data`: The data to write to the file handle.

<a id="Discussion"></a>

## Discussion

If the handle represents a file, writing takes place at the file pointer’s current position. After it writes the data, the method advances the file pointer by the number of bytes written. This method throws an error if the file descriptor is closed or isn’t valid, if the handle represents an unconnected pipe or socket endpoint, if there isn’t any free space on the file system, or if any other writing error occurs.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.
- [read(upToCount:)](read%28uptocount_%29.md): Reads data synchronously up to the specified number of bytes.
- [readToEnd()](readtoend%28%29.md): Reads the available data synchronously up to the end of file or maximum number of bytes.
