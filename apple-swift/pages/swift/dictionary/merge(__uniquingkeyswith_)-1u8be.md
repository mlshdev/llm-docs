> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/merge(_:uniquingkeyswith:)-1u8be](https://developer.apple.com/documentation/swift/dictionary/merge(_:uniquingkeyswith:)-1u8be)

# merge(\_:uniquingKeysWith:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Merges the given dictionary into this dictionary, using a combining closure to determine the value for any duplicate keys.

## Declaration

```swift
mutating func merge<E>(_ other: [Key : Value], uniquingKeysWith combine: (Value, Value) throws(E) -> Value) throws(E) where E : Error
```

## Parameters

- `other`: A dictionary to merge.
- `combine`: A closure that takes the current and new values for any duplicate keys. The closure returns the desired value for the final dictionary.

<a id="discussion"></a>

## Discussion

Use the `combine` closure to select a value to use in the updated dictionary, or to combine existing and new values. As the key-values pairs in `other` are merged with this dictionary, the `combine` closure is called with the current and new values for any duplicate keys that are encountered.

This example shows how to choose the current or new values for any duplicate keys:

```swift
var dictionary = ["a": 1, "b": 2]

// Keeping existing value for key "a":
dictionary.merge(["a": 3, "c": 4]) { (current, _) in current }
// ["b": 2, "a": 1, "c": 4]

// Taking the new value for key "a":
dictionary.merge(["a": 5, "d": 6]) { (_, new) in new }
// ["b": 2, "a": 5, "c": 4, "d": 6]
```
