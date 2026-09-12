> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/replacesubrange(_:with:count:)](https://developer.apple.com/documentation/foundation/data/replacesubrange(_:with:count:))

# replaceSubrange(\_:with:count:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces a region of bytes in the data with bytes from memory.

## Declaration

```swift
mutating func replaceSubrange(_ subrange: Range<Data.Index>, with bytes: UnsafeRawPointer, count cnt: Int)
```

## See Also

### Replacing a Range of Bytes

- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-9u7ry.md): Replaces a region of bytes in the data with new bytes from a collection.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-9nzh.md): Replaces a region of bytes in the data with new bytes from a buffer.
