> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/append(_:)-xtlw](https://developer.apple.com/documentation/foundation/data/append(_:)-xtlw)

# append(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Append a buffer of bytes to the data.

## Declaration

```swift
mutating func append<SourceType>(_ buffer: UnsafeBufferPointer<SourceType>)
```

## Parameters

- `buffer`: The buffer of bytes to append. The size is calculated from `SourceType` and `buffer.count`.

## See Also

### Adding Bytes

- [append(\_:)](append%28__%29-vjwy.md): Appends the specified data to the end of this data.
- [append(\_:count:)](append%28__count_%29.md): Appends the specified bytes from memory to the end of the data.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.
