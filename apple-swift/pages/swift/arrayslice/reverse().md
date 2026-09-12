> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/arrayslice/reverse()](https://developer.apple.com/documentation/swift/arrayslice/reverse())

# reverse()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reverses the elements of the collection in place.

## Declaration

```swift
mutating func reverse()
```

<a id="discussion"></a>

## Discussion

The following example reverses the elements of an array of characters:

```swift
var characters: [Character] = ["C", "a", "f", "é"]
characters.reverse()
print(characters)
// Prints "["é", "f", "a", "C"]"
```

> **Complexity**

> O(*n*), where *n* is the number of elements in the collection.
