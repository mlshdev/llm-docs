> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/remove(at:)](https://developer.apple.com/documentation/swift/dictionary/remove(at:))

# remove(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the key-value pair at the specified index.

## Declaration

```swift
@discardableResult mutating func remove(at index: Dictionary<Key, Value>.Index) -> Dictionary<Key, Value>.Element
```

## Parameters

- `index`: The position of the key-value pair to remove. `index` must be a valid index of the dictionary, and must not equal the dictionary’s end index.

<a id="return-value"></a>

## Return Value

The key-value pair that correspond to `index`.

<a id="discussion"></a>

## Discussion

Calling this method invalidates any existing indices for use with this dictionary.

> **Complexity**

> O(*n*), where *n* is the number of key-value pairs in the dictionary.

## See Also

### Removing Keys and Values

- [filter(\_:)](filter%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the key-value pairs of the dictionary that satisfy the given predicate.
- [removeValue(forKey:)](removevalue%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Removes the given key and its associated value from the dictionary.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Key` conforms to `Hashable`. Removes all key-value pairs from the dictionary.
