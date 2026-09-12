> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/updatevalue(_:forkey:)](https://developer.apple.com/documentation/swift/dictionary/updatevalue(_:forkey:))

# updateValue(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the value stored in the dictionary for the given key, or adds a new key-value pair if the key does not exist.

## Declaration

```swift
@discardableResult mutating func updateValue(_ value: Value, forKey key: Key) -> Value?
```

## Parameters

- `value`: The new value to add to the dictionary.
- `key`: The key to associate with `value`. If `key` already exists in the dictionary, `value` replaces the existing associated value. If `key` isn’t already a key of the dictionary, the `(key, value)` pair is added.

<a id="return-value"></a>

## Return Value

The value that was replaced, or `nil` if a new key-value pair was added.

<a id="discussion"></a>

## Discussion

Use this method instead of key-based subscripting when you need to know whether the new value supplants the value of an existing key. If the value of an existing key is updated, `updateValue(_:forKey:)` returns the original value.

```swift
var hues = ["Heliotrope": 296, "Coral": 16, "Aquamarine": 156]

if let oldValue = hues.updateValue(18, forKey: "Coral") {
    print("The old value of \(oldValue) was replaced with a new one.")
}
// Prints "The old value of 16 was replaced with a new one."
```

If the given key is not present in the dictionary, this method adds the key-value pair and returns `nil`.

```swift
if let oldValue = hues.updateValue(330, forKey: "Cerise") {
    print("The old value of \(oldValue) was replaced with a new one.")
} else {
    print("No value was found in the dictionary for that key.")
}
// Prints "No value was found in the dictionary for that key."
```

## See Also

### Adding Keys and Values

- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Conforms when `Key` conforms to `Hashable`. Reserves enough space to store the specified number of key-value pairs.
