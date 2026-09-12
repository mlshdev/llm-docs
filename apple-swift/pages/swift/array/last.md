> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/last](https://developer.apple.com/documentation/swift/array/last)

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

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-25iat.md): Accesses the element at the specified position.
- [first](first.md): The first element of the collection.
- [subscript(\_:)](subscript%28__%29-53fvb.md): Accesses a contiguous subrange of the array’s elements.
- [subscript(\_:)](subscript%28__%29-3kwny.md)
- [subscript(\_:)](subscript%28__%29-4h7rl.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-3pmfg.md)
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
