> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/writeall(toabsoluteoffset:_:)](https://developer.apple.com/documentation/system/filedescriptor/writeall(toabsoluteoffset:_:))

# writeAll(toAbsoluteOffset:\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Writes a sequence of bytes to the given offset.

## Declaration

```swift
@discardableResult func writeAll<S>(toAbsoluteOffset offset: Int64, _ sequence: S) throws -> Int where S : Sequence, S.Element == UInt8
```

## Parameters

- `offset`: The file offset where writing begins.
- `sequence`: The bytes to write.

<a id="return-value"></a>

## Return Value

The number of bytes written, equal to the number of elements in `sequence`.

<a id="discussion"></a>

## Discussion

This method either writes the entire contents of `sequence`, or throws an error if only part of the content was written. Unlike [writeAll(\_:)](writeall%28__%29.md), this method preserves the file descriptor’s existing offset.

If `sequence` doesn’t implement the [withContiguousStorageIfAvailable(\_:)](https://developer.apple.com/documentation/swift/sequence/withcontiguousstorageifavailable%28_:%29) method, temporary space will be allocated as needed.

## See Also

### Writing To A File

- [write(\_:retryOnInterrupt:)](write%28__retryoninterrupt_%29.md): Writes the contents of a buffer at the current file offset.
- [write(toAbsoluteOffset:\_:retryOnInterrupt:)](write%28toabsoluteoffset___retryoninterrupt_%29.md): Writes the contents of a buffer at the specified offset.
- [writeAll(\_:)](writeall%28__%29.md): Writes a sequence of bytes to the current offset and then updates the offset.
