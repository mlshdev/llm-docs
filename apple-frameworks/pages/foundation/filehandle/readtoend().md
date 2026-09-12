> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/readtoend()](https://developer.apple.com/documentation/foundation/filehandle/readtoend())

# readToEnd()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Reads the available data synchronously up to the end of file or maximum number of bytes.

## Declaration

```swift
func readToEnd() throws -> Data?
```

<a id="return-value"></a>

## Return Value

The data available through the file handle up to the maximum size that can be represented by an [NSData](../nsdata.md) object or, if a communications channel, until an end-of-file indicator is returned.

<a id="Discussion"></a>

## Discussion

This method invokes [readData(ofLength:)](readdata%28oflength_%29.md) as part of its implementation.

## See Also

### Reading from a file handle synchronously

- [availableData](availabledata.md): The data currently available in the receiver.
- [read(upToCount:)](read%28uptocount_%29.md): Reads data synchronously up to the specified number of bytes.
