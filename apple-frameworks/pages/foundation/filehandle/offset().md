> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/filehandle/offset()

# offset()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

Gets the position of the file pointer within the file.

## Declaration

```swift
func offset() throws -> UInt64
```

<a id="return-value"></a>

## Return Value

The position of the file pointer within the file.

<a id="Discussion"></a>

## Discussion

Throws an error if called on a file handle representing a pipe or socket, or if the file descriptor is closed.

## See Also

### Seeking within a file

- [seekToEnd()](seektoend%28%29.md): Places the file pointer at the end of the file referenced by the file handle and returns the new file offset.
- [seek(toOffset:)](seek%28tooffset_%29.md): Moves the file pointer to the specified offset within the file.
