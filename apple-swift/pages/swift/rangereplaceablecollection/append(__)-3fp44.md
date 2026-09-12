> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/append(_:)-3fp44](https://developer.apple.com/documentation/swift/rangereplaceablecollection/append(_:)-3fp44)

# append(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds an element to the end of the collection.

## Declaration

```swift
mutating func append(_ newElement: Self.Element)
```

## Parameters

- `newElement`: The element to append to the collection.

<a id="discussion"></a>

## Discussion

If the collection does not have sufficient capacity for another element, additional storage is allocated before appending `newElement`. The following example adds a new number to an array of integers:

```swift
var numbers = [1, 2, 3, 4, 5]
numbers.append(100)

print(numbers)
// Prints "[1, 2, 3, 4, 5, 100]"
```

> **Complexity**

> O(1) on average, over many calls to `append(_:)` on the same collection.
