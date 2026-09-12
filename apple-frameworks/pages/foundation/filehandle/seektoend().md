> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/seektoend()](https://developer.apple.com/documentation/foundation/filehandle/seektoend())

# seekToEnd()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.

## Declaration

```swift
@discardableResult func seekToEnd() throws -> UInt64
```

<a id="return-value"></a>

## Return Value

The file offset with the file pointer at the end of the file. This is therefore equal to the size of the file.

<a id="Discussion"></a>

## Discussion

Throws an error if called a file handle representing a pipe or socket, or if the file descriptor is closed.

## See Also

### Seeking within a file

- [offset()](offset%28%29.md): Gets the position of the file pointer within the file.
- [seek(toOffset:)](seek%28tooffset_%29.md): Moves the file pointer to the specified offset within the file.
