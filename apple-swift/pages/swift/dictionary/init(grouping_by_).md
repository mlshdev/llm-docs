> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/init(grouping:by:)](https://developer.apple.com/documentation/swift/dictionary/init(grouping:by:))

# init(grouping:by:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new dictionary whose keys are the groupings returned by the given closure and whose values are arrays of the elements that returned each key.

## Declaration

```swift
init<S, E>(grouping values: S, by keyForValue: (S.Element) throws(E) -> Key) throws(E) where Value == [S.Element], S : Sequence, E : Error
```

## Parameters

- `values`: A sequence of values to group into a dictionary.
- `keyForValue`: A closure that returns a key for each element in `values`.

<a id="discussion"></a>

## Discussion

The arrays in the “values” position of the new dictionary each contain at least one element, with the elements in the same order as the source sequence.

The following example declares an array of names, and then creates a dictionary from that array by grouping the names by first letter:

```swift
let students = ["Kofi", "Abena", "Efua", "Kweku", "Akosua"]
let studentsByLetter = Dictionary(grouping: students, by: { $0.first! })
// ["E": ["Efua"], "K": ["Kofi", "Kweku"], "A": ["Abena", "Akosua"]]
```

The new `studentsByLetter` dictionary has three entries, with students’ names grouped by the keys `"E"`, `"K"`, and `"A"`.

## See Also

### Creating a Dictionary

- [init()](init%28%29.md): Creates an empty dictionary.
- [init(minimumCapacity:)](init%28minimumcapacity_%29.md): Creates an empty dictionary with preallocated space for at least the specified number of elements.
- [init(uniqueKeysWithValues:)](init%28uniquekeyswithvalues_%29.md): Creates a new dictionary from the key-value pairs in the given sequence.
- [init(\_:uniquingKeysWith:)](init%28__uniquingkeyswith_%29.md): Creates a new dictionary from the key-value pairs in the given sequence, using a combining closure to determine the value for any duplicate keys.
