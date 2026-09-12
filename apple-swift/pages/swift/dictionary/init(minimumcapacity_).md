> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/init(minimumcapacity:)](https://developer.apple.com/documentation/swift/dictionary/init(minimumcapacity:))

# init(minimumCapacity:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty dictionary with preallocated space for at least the specified number of elements.

## Declaration

```swift
init(minimumCapacity: Int)
```

## Parameters

- `minimumCapacity`: The minimum number of key-value pairs that the newly created dictionary should be able to store without reallocating its storage buffer.

<a id="discussion"></a>

## Discussion

Use this initializer to avoid intermediate reallocations of a dictionary’s storage buffer when you know how many key-value pairs you are adding to a dictionary after creation.

## See Also

### Creating a Dictionary

- [init()](init%28%29.md): Creates an empty dictionary.
- [init(uniqueKeysWithValues:)](init%28uniquekeyswithvalues_%29.md): Creates a new dictionary from the key-value pairs in the given sequence.
- [init(\_:uniquingKeysWith:)](init%28__uniquingkeyswith_%29.md): Creates a new dictionary from the key-value pairs in the given sequence, using a combining closure to determine the value for any duplicate keys.
- [init(grouping:by:)](init%28grouping_by_%29.md): Creates a new dictionary whose keys are the groupings returned by the given closure and whose values are arrays of the elements that returned each key.
