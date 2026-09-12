> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/write(_:retryoninterrupt:)](https://developer.apple.com/documentation/system/filedescriptor/write(_:retryoninterrupt:))

# write(\_:retryOnInterrupt:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Writes the contents of a buffer at the current file offset.

## Declaration

```swift
func write(_ buffer: UnsafeRawBufferPointer, retryOnInterrupt: Bool = true) throws -> Int
```

## Parameters

- `buffer`: The region of memory that contains the data being written.
- `retryOnInterrupt`: Whether to retry the write operation if it throws [interrupted](../errno/interrupted.md). The default is `true`. Pass `false` to try only once and throw an error upon interruption.

<a id="return-value"></a>

## Return Value

The number of bytes that were written.

## Mentioned In

- [Adopting Swift File Operations](../adopting-file-operations.md)

<a id="discussion"></a>

## Discussion

After writing, this method increments the file’s offset by the number of bytes written. To change the file’s offset, call the [seek(offset:from:)](seek%28offset_from_%29.md) method.

The corresponding C function is `write`.

## See Also

### Writing To A File

- [write(toAbsoluteOffset:\_:retryOnInterrupt:)](write%28toabsoluteoffset___retryoninterrupt_%29.md): Writes the contents of a buffer at the specified offset.
- [writeAll(\_:)](writeall%28__%29.md): Writes a sequence of bytes to the current offset and then updates the offset.
- [writeAll(toAbsoluteOffset:\_:)](writeall%28toabsoluteoffset___%29.md): Writes a sequence of bytes to the given offset.
