> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/last](https://developer.apple.com/documentation/swift/string/last)

# last

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The last element of the collection.

## Declaration

```swift
var last: Self.Element? { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, the value of this property is `nil`.

```swift
let numbers = [10, 20, 30, 40, 50]
if let lastNumber = numbers.last {
    print(lastNumber)
}
// Prints "50"
```

> **Complexity**

> O(1)

## See Also

### Getting Characters and Bytes

- [subscript(\_:)](subscript%28__%29-lc0v.md): Accesses the character at the given position.
- [first](first.md): The first element of the collection.
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
