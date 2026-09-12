> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/writeall(_:)](https://developer.apple.com/documentation/system/filedescriptor/writeall(_:))

# writeAll(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Writes a sequence of bytes to the current offset and then updates the offset.

## Declaration

```swift
@discardableResult func writeAll<S>(_ sequence: S) throws -> Int where S : Sequence, S.Element == UInt8
```

## Parameters

- `sequence`: The bytes to write.

<a id="return-value"></a>

## Return Value

The number of bytes written, equal to the number of elements in `sequence`.

<a id="discussion"></a>

## Discussion

This method either writes the entire contents of `sequence`, or throws an error if only part of the content was written.

Writes to the position associated with this file descriptor, and increments that position by the number of bytes written. See also [seek(offset:from:)](seek%28offset_from_%29.md).

If `sequence` doesn’t implement the [withContiguousStorageIfAvailable(\_:)](https://developer.apple.com/documentation/swift/sequence/withcontiguousstorageifavailable%28_:%29) method, temporary space will be allocated as needed.

## See Also

### Writing To A File

- [write(\_:retryOnInterrupt:)](write%28__retryoninterrupt_%29.md): Writes the contents of a buffer at the current file offset.
- [write(toAbsoluteOffset:\_:retryOnInterrupt:)](write%28toabsoluteoffset___retryoninterrupt_%29.md): Writes the contents of a buffer at the specified offset.
- [writeAll(toAbsoluteOffset:\_:)](writeall%28toabsoluteoffset___%29.md): Writes a sequence of bytes to the given offset.
