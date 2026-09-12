> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/init(uniquekeyswithvalues:)](https://developer.apple.com/documentation/swift/dictionary/init(uniquekeyswithvalues:))

# init(uniqueKeysWithValues:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new dictionary from the key-value pairs in the given sequence.

## Declaration

```swift
init<S>(uniqueKeysWithValues keysAndValues: S) where S : Sequence, S.Element == (Key, Value)
```

## Parameters

- `keysAndValues`: A sequence of key-value pairs to use for the new dictionary. Every key in `keysAndValues` must be unique.

<a id="return-value"></a>

## Return Value

A new dictionary initialized with the elements of `keysAndValues`.

<a id="discussion"></a>

## Discussion

You use this initializer to create a dictionary when you have a sequence of key-value tuples with unique keys. Passing a sequence with duplicate keys to this initializer results in a runtime error. If your sequence might have duplicate keys, use the `Dictionary(_:uniquingKeysWith:)` initializer instead.

The following example creates a new dictionary using an array of strings as the keys and the integers in a countable range as the values:

```swift
let digitWords = ["one", "two", "three", "four", "five"]
let wordToValue = Dictionary(uniqueKeysWithValues: zip(digitWords, 1...5))
print(wordToValue["three"]!)
// Prints "3"
print(wordToValue)
// Prints "["three": 3, "four": 4, "five": 5, "one": 1, "two": 2]"
```

> **Precondition**

> The sequence must not have duplicate keys.

## See Also

### Creating a Dictionary

- [init()](init%28%29.md): Creates an empty dictionary.
- [init(minimumCapacity:)](init%28minimumcapacity_%29.md): Creates an empty dictionary with preallocated space for at least the specified number of elements.
- [init(\_:uniquingKeysWith:)](init%28__uniquingkeyswith_%29.md): Creates a new dictionary from the key-value pairs in the given sequence, using a combining closure to determine the value for any duplicate keys.
- [init(grouping:by:)](init%28grouping_by_%29.md): Creates a new dictionary whose keys are the groupings returned by the given closure and whose values are arrays of the elements that returned each key.
