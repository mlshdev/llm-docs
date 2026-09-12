> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/copybytes(to:from:)-8qk4r](https://developer.apple.com/documentation/foundation/data/copybytes(to:from:)-8qk4r)

# copyBytes(to:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a subset of the contents of the data to memory.

## Declaration

```swift
func copyBytes(to pointer: UnsafeMutablePointer<UInt8>, from range: Range<Data.Index>)
```

## Parameters

- `pointer`: A pointer to the buffer you wish to copy the bytes into.
- `range`: The range in the `Data` to copy.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  This method does not verify that the contents at pointer have enough space to hold the required number of bytes.

## See Also

### Accessing Underlying Memory

- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Deprecated. Accesses the raw bytes in the data’s buffer.
- [withUnsafeMutableBytes(\_:)](withunsafemutablebytes%28__%29-7ac1g.md): Deprecated. Mutates the raw bytes in the data’s buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29.md): Copies the contents of the data to memory.
- [copyBytes(to:from:)](copybytes%28to_from_%29-4o6zj.md): Copies the bytes in a range from the data into a buffer.
