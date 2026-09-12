> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/subscript(_:)-4bhoo](https://developer.apple.com/documentation/swift/dictionary/subscript(_:)-4bhoo)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the key-value pair at the specified position.

## Declaration

```swift
subscript(position: Dictionary<Key, Value>.Index) -> Dictionary<Key, Value>.Element { get }
```

## Parameters

- `position`: The position of the key-value pair to access. `position` must be a valid index of the dictionary and not equal to `endIndex`.

<a id="return-value"></a>

## Return Value

A two-element tuple with the key and value corresponding to `position`.

<a id="overview"></a>

## Overview

This subscript takes an index into the dictionary, instead of a key, and returns the corresponding key-value pair as a tuple. When performing collection-based operations that return an index into a dictionary, use this subscript with the resulting value.

For example, to find the key for a particular value in a dictionary, use the `firstIndex(where:)` method.

```swift
let countryCodes = ["BR": "Brazil", "GH": "Ghana", "JP": "Japan"]
if let index = countryCodes.firstIndex(where: { $0.value == "Japan" }) {
    print(countryCodes[index])
    print("Japan's country code is '\(countryCodes[index].key)'.")
} else {
    print("Didn't find 'Japan' as a value in the dictionary.")
}
// Prints "(key: "JP", value: "Japan")"
// Prints "Japan's country code is 'JP'."
```

## See Also

### Accessing Keys and Values

- [subscript(\_:)](subscript%28__%29-8rfql.md): Conforms when `Key` conforms to `Hashable`. Accesses the value associated with the given key for reading and writing.
- [subscript(\_:default:)](subscript%28__default_%29.md): Conforms when `Key` conforms to `Hashable`. Accesses the value with the given key, falling back to the given default value if the key isn’t found.
- [index(forKey:)](index%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Returns the index for the given key.
- [keys](keys-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the keys of the dictionary.
- [values](values-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the values of the dictionary.
- [first](first.md): The first element of the collection.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
