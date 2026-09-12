> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/close()](https://developer.apple.com/documentation/system/filedescriptor/close())

# close()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Deletes a file descriptor.

## Declaration

```swift
func close() throws
```

## Mentioned In

- [Adopting Swift File Operations](../adopting-file-operations.md)

<a id="discussion"></a>

## Discussion

Deletes the file descriptor from the per-process object reference table. If this is the last reference to the underlying object, the object will be deactivated.

The corresponding C function is `close`.

## See Also

### Closing a File

- [closeAfter(\_:)](closeafter%28__%29.md): Runs a closure and then closes the file descriptor, even if an error occurs.
