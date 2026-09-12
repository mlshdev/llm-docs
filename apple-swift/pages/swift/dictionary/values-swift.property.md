> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/values-swift.property](https://developer.apple.com/documentation/swift/dictionary/values-swift.property)

# values

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift 4.0+

A collection containing just the values of the dictionary.

## Declaration

```swift
var values: Dictionary<Key, Value>.Values { get set }
```

<a id="discussion"></a>

## Discussion

When iterated over, values appear in this collection in the same order as they occur in the dictionary’s key-value pairs.

```swift
let countryCodes = ["BR": "Brazil", "GH": "Ghana", "JP": "Japan"]
print(countryCodes)
// Prints "["BR": "Brazil", "JP": "Japan", "GH": "Ghana"]"

for v in countryCodes.values {
    print(v)
}
// Prints "Brazil"
// Prints "Japan"
// Prints "Ghana"
```

## See Also

### Accessing Keys and Values

- [subscript(\_:)](subscript%28__%29-8rfql.md): Conforms when `Key` conforms to `Hashable`. Accesses the value associated with the given key for reading and writing.
- [subscript(\_:default:)](subscript%28__default_%29.md): Conforms when `Key` conforms to `Hashable`. Accesses the value with the given key, falling back to the given default value if the key isn’t found.
- [index(forKey:)](index%28forkey_%29.md): Conforms when `Key` conforms to `Hashable`. Returns the index for the given key.
- [subscript(\_:)](subscript%28__%29-4bhoo.md): Conforms when `Key` conforms to `Hashable`. Accesses the key-value pair at the specified position.
- [keys](keys-swift.property.md): Conforms when `Key` conforms to `Hashable`. A collection containing just the keys of the dictionary.
- [first](first.md): The first element of the collection.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
