> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/append(_:count:)](https://developer.apple.com/documentation/foundation/data/append(_:count:))

# append(\_:count:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Appends the specified bytes from memory to the end of the data.

## Declaration

```swift
mutating func append(_ bytes: UnsafePointer<UInt8>, count: Int)
```

## See Also

### Adding Bytes

- [append(\_:)](append%28__%29-vjwy.md): Appends the specified data to the end of this data.
- [append(\_:)](append%28__%29-xtlw.md): Append a buffer of bytes to the data.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.
