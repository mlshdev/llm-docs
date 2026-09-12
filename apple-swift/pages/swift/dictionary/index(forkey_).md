> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/index(forkey:)](https://developer.apple.com/documentation/swift/dictionary/index(forkey:))

# index(forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index for the given key.

## Declaration

```swift
func index(forKey key: Key) -> Dictionary<Key, Value>.Index?
```

## Parameters

- `key`: The key to find in the dictionary.

<a id="return-value"></a>

## Return Value

The index for `key` and its associated value if `key` is in the dictionary; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

If the given key is found in the dictionary, this method returns an index into the dictionary that corresponds with the key-value pair.

```swift
let countryCodes = ["BR": "Brazil", "GH": "Ghana", "JP": "Japan"]
let index = countryCodes.index(forKey: "JP")

print("Country code for \(countryCodes[index!].value): '\(countryCodes[index!].key)'.")
// Prints "Country code for Japan: 'JP'."
```

## See Also

### Accessing Keys and Values

- [subscript(\_:)](subscript%28__%29-8rfql.md): Conforms when `Key` conforms to `Hashable`. Accesses the value associated with the given key for reading and writing.
- [subscript(\_:default:)](subscript%28__default_%29.md): Conforms when `Key` conforms to `Hashable`. Accesses the value with the given key, falling back to the given default value if the key isn’t found.
- [subscript(\_:)](subscript%28__%29-4bhoo.md): Conforms when `Key` conforms to `Hashable`. Accesses the key-value pair at the specified position.
- [keys](keys-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the keys of the dictionary.
- [values](values-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the values of the dictionary.
- [first](first.md): The first element of the collection.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
