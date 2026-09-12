> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/closeafter(_:)](https://developer.apple.com/documentation/system/filedescriptor/closeafter(_:))

# closeAfter(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Runs a closure and then closes the file descriptor, even if an error occurs.

## Declaration

```swift
func closeAfter<R>(_ body: () throws -> R) throws -> R
```

## Parameters

- `body`: The closure to run. If the closure throws an error, this method closes the file descriptor before it rethrows that error.

<a id="return-value"></a>

## Return Value

The value returned by the closure.

<a id="discussion"></a>

## Discussion

If `body` throws an error or an error occurs while closing the file descriptor, this method rethrows that error.

## See Also

### Closing a File

- [close()](close%28%29.md): Deletes a file descriptor.
