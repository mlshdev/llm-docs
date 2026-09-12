> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/randomelement(using:)](https://developer.apple.com/documentation/swift/array/randomelement(using:))

# randomElement(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a random element of the collection, using the given generator as a source for randomness.

## Declaration

```swift
func randomElement<T>(using generator: inout T) -> Self.Element? where T : RandomNumberGenerator
```

## Parameters

- `generator`: The random number generator to use when choosing a random element.

<a id="return-value"></a>

## Return Value

A random element from the collection. If the collection is empty, the method returns `nil`.

<a id="discussion"></a>

## Discussion

Call `randomElement(using:)` to select a random element from an array or another collection when you are using a custom random number generator. This example picks a name at random from an array:

```swift
let names = ["Zoey", "Chloe", "Amani", "Amaia"]
let randomName = names.randomElement(using: &myGenerator)!
// randomName == "Amani"
```

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*n*), where *n* is the length of the collection.

> **Note**

> The algorithm used to select a random element may change in a future version of Swift. If you’re passing a generator that results in the same sequence of elements each time you run your program, that sequence may change when your program is compiled using a different version of Swift.

## See Also

### Accessing Elements

- [subscript(\_:)](subscript%28__%29-25iat.md): Accesses the element at the specified position.
- [first](first.md): The first element of the collection.
- [last](last.md): The last element of the collection.
- [subscript(\_:)](subscript%28__%29-53fvb.md): Accesses a contiguous subrange of the array’s elements.
- [subscript(\_:)](subscript%28__%29-3kwny.md)
- [subscript(\_:)](subscript%28__%29-4h7rl.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-3pmfg.md)
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
