> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/copybytes(to:from:)-4o6zj](https://developer.apple.com/documentation/foundation/data/copybytes(to:from:)-4o6zj)

# copyBytes(to:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the bytes in a range from the data into a buffer.

## Declaration

```swift
func copyBytes<DestinationType>(to buffer: UnsafeMutableBufferPointer<DestinationType>, from range: Range<Data.Index>? = nil) -> Int
```

## Parameters

- `buffer`: A buffer to copy the data into.
- `range`: A range in the data to copy into the buffer. If the range is empty, this function will return 0 without copying anything. If the range is nil, as much data as will fit into `buffer` is copied.

<a id="return-value"></a>

## Return Value

Number of bytes copied into the destination buffer.

<a id="Discussion"></a>

## Discussion

If the count of the range is greater than `MemoryLayout<DestinationType>.stride * buffer.count` then only the first `N` bytes will be copied into the buffer.Precondition: The range must be within the bounds of the data. Otherwise `fatalError` is called.

## See Also

### Accessing Underlying Memory

- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Deprecated. Accesses the raw bytes in the data’s buffer.
- [withUnsafeMutableBytes(\_:)](withunsafemutablebytes%28__%29-7ac1g.md): Deprecated. Mutates the raw bytes in the data’s buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29.md): Copies the contents of the data to memory.
- [copyBytes(to:from:)](copybytes%28to_from_%29-8qk4r.md): Copies a subset of the contents of the data to memory.
