> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/removevalue(forkey:)](https://developer.apple.com/documentation/swift/dictionary/removevalue(forkey:))

# removeValue(forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the given key and its associated value from the dictionary.

## Declaration

```swift
@discardableResult mutating func removeValue(forKey key: Key) -> Value?
```

## Parameters

- `key`: The key to remove along with its associated value.

<a id="return-value"></a>

## Return Value

The value that was removed, or `nil` if the key was not present in the dictionary.

<a id="discussion"></a>

## Discussion

If the key is found in the dictionary, this method returns the key’s associated value. On removal, this method invalidates all indices with respect to the dictionary.

```swift
var hues = ["Heliotrope": 296, "Coral": 16, "Aquamarine": 156]
if let value = hues.removeValue(forKey: "Coral") {
    print("The value \(value) was removed.")
}
// Prints "The value 16 was removed."
```

If the key isn’t found in the dictionary, `removeValue(forKey:)` returns `nil`.

```swift
if let value = hues.removeValue(forKey: "Cerise") {
    print("The value \(value) was removed.")
} else {
    print("No value found for that key.")
}
// Prints "No value found for that key."
```

> **Complexity**

> O(*n*), where *n* is the number of key-value pairs in the dictionary.

## See Also

### Removing Keys and Values

- [filter(\_:)](filter%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the key-value pairs of the dictionary that satisfy the given predicate.
- [remove(at:)](remove%28at_%29.md): Conforms when `Key` conforms to `Hashable`. Removes and returns the key-value pair at the specified index.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Key` conforms to `Hashable`. Removes all key-value pairs from the dictionary.
