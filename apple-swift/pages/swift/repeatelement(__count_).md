> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/repeatelement(_:count:)](https://developer.apple.com/documentation/swift/repeatelement(_:count:))

# repeatElement(\_:count:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a collection containing the specified number of the given element.

## Declaration

```swift
func repeatElement<T>(_ element: T, count n: Int) -> Repeated<T>
```

## Parameters

- `element`: The element to repeat.
- `n`: The number of times to repeat `element`.

<a id="return-value"></a>

## Return Value

A collection that contains `count` elements that are all `element`.

<a id="discussion"></a>

## Discussion

The following example creates a `Repeated<Int>` collection containing five zeroes:

```swift
let zeroes = repeatElement(0, count: 5)
for x in zeroes {
    print(x)
}
// 0
// 0
// 0
// 0
// 0
```

## See Also

### Special-Use Collections

- [CollectionOfOne](collectionofone.md): A collection containing a single element.
- [EmptyCollection](emptycollection.md): A collection whose element type is `Element` but that is always empty.
- [KeyValuePairs](keyvaluepairs.md): A lightweight collection of key-value pairs.
- [DictionaryLiteral](dictionaryliteral.md): Deprecated.
