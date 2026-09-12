> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/reservecapacity(_:)](https://developer.apple.com/documentation/foundation/data/reservecapacity(_:))

# reserveCapacity(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.

## Declaration

```swift
mutating func reserveCapacity(_ minimumCapacity: Int)
```

## Parameters

- `minimumCapacity`: The requested number of elements to store.

<a id="Discussion"></a>

## Discussion

If you will be adding a known number of elements to a collection, use this method to avoid multiple reallocations. A type that conforms to `RangeReplaceableCollection` can choose how to respond when this method is called. Depending on the type, it may make sense to allocate more or less storage than requested or to take no action at all.

## See Also

### Adding Bytes

- [append(\_:)](append%28__%29-vjwy.md): Appends the specified data to the end of this data.
- [append(\_:)](append%28__%29-xtlw.md): Append a buffer of bytes to the data.
- [append(\_:count:)](append%28__count_%29.md): Appends the specified bytes from memory to the end of the data.
