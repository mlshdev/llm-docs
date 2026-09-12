> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/removeall(keepingcapacity:)](https://developer.apple.com/documentation/swift/dictionary/removeall(keepingcapacity:))

# removeAll(keepingCapacity:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all key-value pairs from the dictionary.

## Declaration

```swift
mutating func removeAll(keepingCapacity keepCapacity: Bool = false)
```

## Parameters

- `keepCapacity`: Whether the dictionary should keep its underlying buffer. If you pass `true`, the operation preserves the buffer capacity that the collection has, otherwise the underlying buffer is released.  The default is `false`.

<a id="discussion"></a>

## Discussion

Calling this method invalidates all indices with respect to the dictionary.

> **Complexity**

> O(*n*), where *n* is the number of key-value pairs in the dictionary.

## See Also

### Removing Keys and Values

- [filter(\_:)](filter%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the key-value pairs of the dictionary that satisfy the given predicate.
- [removeValue(forKey:)](removevalue%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Removes the given key and its associated value from the dictionary.
- [remove(at:)](remove%28at_%29.md): Conforms when `Key` conforms to `Hashable`. Removes and returns the key-value pair at the specified index.
