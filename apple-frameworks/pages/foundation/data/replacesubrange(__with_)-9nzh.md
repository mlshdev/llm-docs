> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/replacesubrange(_:with:)-9nzh](https://developer.apple.com/documentation/foundation/data/replacesubrange(_:with:)-9nzh)

# replaceSubrange(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces a region of bytes in the data with new bytes from a buffer.

## Declaration

```swift
mutating func replaceSubrange<SourceType>(_ subrange: Range<Data.Index>, with buffer: UnsafeBufferPointer<SourceType>)
```

## Parameters

- `subrange`: The range in the data to replace.
- `buffer`: The replacement bytes.

<a id="Discussion"></a>

## Discussion

This will resize the data if required, to fit the entire contents of `buffer`.

Precondition: The bounds of `subrange` must be valid indices of the collection.

## See Also

### Replacing a Range of Bytes

- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-9u7ry.md): Replaces a region of bytes in the data with new bytes from a collection.
- [replaceSubrange(\_:with:count:)](replacesubrange%28__with_count_%29.md): Replaces a region of bytes in the data with bytes from memory.
