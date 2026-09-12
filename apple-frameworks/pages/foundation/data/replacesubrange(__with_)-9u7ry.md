> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/replacesubrange(_:with:)-9u7ry](https://developer.apple.com/documentation/foundation/data/replacesubrange(_:with:)-9u7ry)

# replaceSubrange(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces a region of bytes in the data with new bytes from a collection.

## Declaration

```swift
@abi(func repalceSubrangeFast(_ subrange: Range<Data.Index>, with newElements: some Collection<UInt8>)) mutating func replaceSubrange(_ subrange: Range<Data.Index>, with newElements: some Collection<UInt8>)
```

## Parameters

- `subrange`: The range in the data to replace.
- `newElements`: The replacement bytes.

<a id="Discussion"></a>

## Discussion

This will resize the data if required, to fit the entire contents of `newElements`.

Precondition: The bounds of `subrange` must be valid indices of the collection.

## See Also

### Replacing a Range of Bytes

- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-9nzh.md): Replaces a region of bytes in the data with new bytes from a buffer.
- [replaceSubrange(\_:with:count:)](replacesubrange%28__with_count_%29.md): Replaces a region of bytes in the data with bytes from memory.
