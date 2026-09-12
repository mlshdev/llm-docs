> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/randomelement()](https://developer.apple.com/documentation/swift/array/randomelement())

# randomElement()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random element of the collection.

## Declaration

```swift
func randomElement() -> Self.Element?
```

<a id="return-value"></a>

## Return Value

A random element from the collection. If the collection is empty, the method returns `nil`.

<a id="discussion"></a>

## Discussion

Call `randomElement()` to select a random element from an array or another collection. This example picks a name at random from an array:

```swift
let names = ["Zoey", "Chloe", "Amani", "Amaia"]
let randomName = names.randomElement()!
// randomName == "Amani"
```

This method is equivalent to calling `randomElement(using:)`, passing in the system’s default random generator.

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-25iat.md): Accesses the element at the specified position.
- [first](first.md): The first element of the collection.
- [last](last.md): The last element of the collection.
- [subscript(\_:)](subscript%28__%29-53fvb.md): Accesses a contiguous subrange of the array’s elements.
- [subscript(\_:)](subscript%28__%29-3kwny.md)
- [subscript(\_:)](subscript%28__%29-4h7rl.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-3pmfg.md)
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
