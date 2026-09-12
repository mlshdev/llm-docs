> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/subscript(_:)-8rfql](https://developer.apple.com/documentation/swift/dictionary/subscript(_:)-8rfql)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the value associated with the given key for reading and writing.

## Declaration

```swift
subscript(key: Key) -> Value? { get set }
```

## Parameters

- `key`: The key to find in the dictionary.

<a id="return-value"></a>

## Return Value

The value associated with `key` if `key` is in the dictionary; otherwise, `nil`.

<a id="overview"></a>

## Overview

This *key-based* subscript returns the value for the given key if the key is found in the dictionary, or `nil` if the key is not found.

The following example creates a new dictionary and prints the value of a key found in the dictionary (`"Coral"`) and a key not found in the dictionary (`"Cerise"`).

```swift
var hues = ["Heliotrope": 296, "Coral": 16, "Aquamarine": 156]
print(hues["Coral"])
// Prints "Optional(16)"
print(hues["Cerise"])
// Prints "nil"
```

When you assign a value for a key and that key already exists, the dictionary overwrites the existing value. If the dictionary doesn’t contain the key, the key and value are added as a new key-value pair.

Here, the value for the key `"Coral"` is updated from `16` to `18` and a new key-value pair is added for the key `"Cerise"`.

```swift
hues["Coral"] = 18
print(hues["Coral"])
// Prints "Optional(18)"

hues["Cerise"] = 330
print(hues["Cerise"])
// Prints "Optional(330)"
```

If you assign `nil` as the value for the given key, the dictionary removes that key and its associated value.

In the following example, the key-value pair for the key `"Aquamarine"` is removed from the dictionary by assigning `nil` to the key-based subscript.

```swift
hues["Aquamarine"] = nil
print(hues)
// Prints "["Coral": 18, "Heliotrope": 296, "Cerise": 330]"
```

## See Also

### Accessing Keys and Values

- [subscript(\_:default:)](subscript%28__default_%29.md): Conforms when `Key` conforms to `Hashable`. Accesses the value with the given key, falling back to the given default value if the key isn’t found.
- [index(forKey:)](index%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Returns the index for the given key.
- [subscript(\_:)](subscript%28__%29-4bhoo.md): Conforms when `Key` conforms to `Hashable`. Accesses the key-value pair at the specified position.
- [keys](keys-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the keys of the dictionary.
- [values](values-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the values of the dictionary.
- [first](first.md): The first element of the collection.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
