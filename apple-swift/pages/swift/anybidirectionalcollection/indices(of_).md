> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anybidirectionalcollection/indices(of:)](https://developer.apple.com/documentation/swift/anybidirectionalcollection/indices(of:))

# indices(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the indices of all the elements that are equal to the given element.

## Declaration

```swift
func indices(of element: Self.Element) -> RangeSet<Self.Index>
```

## Parameters

- `element`: An element to look for in the collection.

<a id="return-value"></a>

## Return Value

A set of the indices of the elements that are equal to `element`.

<a id="discussion"></a>

## Discussion

For example, you can use this method to find all the places that a particular letter occurs in a string.

```swift
let str = "Fresh cheese in a breeze"
let allTheEs = str.indices(of: "e")
// str[allTheEs].count == 7
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.
