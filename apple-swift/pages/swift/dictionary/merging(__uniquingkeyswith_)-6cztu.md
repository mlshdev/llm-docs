> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/merging(_:uniquingkeyswith:)-6cztu](https://developer.apple.com/documentation/swift/dictionary/merging(_:uniquingkeyswith:)-6cztu)

# merging(\_:uniquingKeysWith:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a dictionary by merging key-value pairs in a sequence into the dictionary, using a combining closure to determine the value for duplicate keys.

## Declaration

```swift
func merging<S, E>(_ other: S, uniquingKeysWith combine: (Value, Value) throws(E) -> Value) throws(E) -> [Key : Value] where S : Sequence, E : Error, S.Element == (Key, Value)
```

## Parameters

- `other`: A sequence of key-value pairs.
- `combine`: A closure that takes the current and new values for any duplicate keys. The closure returns the desired value for the final dictionary.

<a id="return-value"></a>

## Return Value

A new dictionary with the combined keys and values of this dictionary and `other`.

<a id="discussion"></a>

## Discussion

Use the `combine` closure to select a value to use in the returned dictionary, or to combine existing and new values. As the key-value pairs are merged with the dictionary, the `combine` closure is called with the current and new values for any duplicate keys that are encountered.

This example shows how to choose the current or new values for any duplicate keys:

```swift
let dictionary = ["a": 1, "b": 2]
let newKeyValues = zip(["a", "b"], [3, 4])

let keepingCurrent = dictionary.merging(newKeyValues) { (current, _) in current }
// ["b": 2, "a": 1]
let replacingCurrent = dictionary.merging(newKeyValues) { (_, new) in new }
// ["b": 4, "a": 3]
```
