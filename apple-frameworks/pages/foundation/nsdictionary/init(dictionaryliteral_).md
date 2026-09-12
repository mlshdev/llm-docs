> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/init(dictionaryliteral:)](https://developer.apple.com/documentation/foundation/nsdictionary/init(dictionaryliteral:))

# init(dictionaryLiteral:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated dictionary from the given key-value pairs.

## Declaration

```swift
required convenience init(dictionaryLiteral elements: (Any, Any)...)
```

## Parameters

- `elements`: A variadic array of two-member tuples, where the first member is a key and the second is its corresponding value.

## See Also

### Creating a Dictionary from Another Dictionary

- [init(dictionary:)](init%28dictionary_%29-9fw1u.md): Initializes a newly allocated dictionary by placing in it the keys and values contained in another given dictionary.
- [init(dictionary:copyItems:)](init%28dictionary_copyitems_%29.md): Initializes a newly allocated dictionary using the objects contained in another given dictionary.
