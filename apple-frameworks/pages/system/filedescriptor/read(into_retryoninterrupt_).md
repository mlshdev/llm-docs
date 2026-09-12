> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/read(into:retryoninterrupt:)](https://developer.apple.com/documentation/system/filedescriptor/read(into:retryoninterrupt:))

# read(into:retryOnInterrupt:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Reads bytes at the current file offset into a buffer.

## Declaration

```swift
func read(into buffer: UnsafeMutableRawBufferPointer, retryOnInterrupt: Bool = true) throws -> Int
```

## Parameters

- `buffer`: The region of memory to read into.
- `retryOnInterrupt`: Whether to retry the read operation if it throws [interrupted](../errno/interrupted.md). The default is `true`. Pass `false` to try only once and throw an error upon interruption.

<a id="return-value"></a>

## Return Value

The number of bytes that were read.

## Mentioned In

- [Adopting Swift File Operations](../adopting-file-operations.md)

<a id="discussion"></a>

## Discussion

The [count](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/count) property of `buffer` determines the maximum number of bytes that are read into that buffer.

After reading, this method increments the file’s offset by the number of bytes read. To change the file’s offset, call the [seek(offset:from:)](seek%28offset_from_%29.md) method.

The corresponding C function is `read`.

## See Also

### Reading From a File

- [read(fromAbsoluteOffset:into:retryOnInterrupt:)](read%28fromabsoluteoffset_into_retryoninterrupt_%29.md): Reads bytes at the specified offset into a buffer.
