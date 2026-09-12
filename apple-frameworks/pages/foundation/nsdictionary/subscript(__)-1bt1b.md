> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/subscript(_:)-1bt1b](https://developer.apple.com/documentation/foundation/nsdictionary/subscript(_:)-1bt1b)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the value associated with a given key.

## Declaration

```swift
@objc dynamic subscript(key: Any) -> Any? { get }
```

## Parameters

- `key`: The key whose value you want to retrieve.

<a id="Discussion"></a>

## Discussion

The returned value is `nil` if `key` does not exist in the dictionary.

The listing below creates a new dictionary. It prints the value of a key found in the dictionary (`"Coral"`) and a key not found in the dictionary (`"Cerise"`).

```swift
var hues = NSDictionary(dictionary: ["Heliotrope": 296, "Coral": 16, "Aquamarine": 156])
print(hues["Coral"])
// Prints "Optional(16)"
print(hues["Cerise"])
// Prints "nil"

```

## See Also

### Accessing Keys and Values

- [allKeys](allkeys.md): A new array containing the dictionary’s keys, or an empty array if the dictionary has no entries.
- [allKeys(for:)](allkeys%28for_%29.md): Returns a new array containing the keys corresponding to all occurrences of a given object in the dictionary.
- [allValues](allvalues.md): A new array containing the dictionary’s values, or an empty array if the dictionary has no entries.
- [value(forKey:)](value%28forkey_%29.md): Returns the value associated with a given key.
- [objects(forKeys:notFoundMarker:)](objects%28forkeys_notfoundmarker_%29.md): Returns as a static array the set of objects from the dictionary that corresponds to the specified keys.
- [object(forKey:)](object%28forkey_%29.md): Returns the value associated with a given key.
- [subscript(\_:)](subscript%28__%29-52n56.md): Returns the value associated with a given key.
