> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/indices](https://developer.apple.com/documentation/swift/dictionary/indices)

# Dictionary.Indices

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents the indices that are valid for subscripting the collection, in ascending order.

## Declaration

```swift
typealias Indices = DefaultIndices<Dictionary<Key, Value>>
```

## See Also

### Supporting Types

- [Dictionary.Keys](keys-swift.struct.md): Conforms when `Key` conforms to `Hashable`. A view of a dictionary’s keys.
- [Dictionary.Values](values-swift.struct.md): Conforms when `Key` conforms to `Hashable`. A view of a dictionary’s values.
- [Dictionary.Index](index.md): Conforms when `Key` conforms to `Hashable`. The position of a key-value pair in a dictionary.
- [Dictionary.Iterator](iterator.md): Conforms when `Key` conforms to `Hashable`. An iterator over the members of a `Dictionary<Key, Value>`.
