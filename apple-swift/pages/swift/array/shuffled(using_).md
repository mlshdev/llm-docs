> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/shuffled(using:)](https://developer.apple.com/documentation/swift/array/shuffled(using:))

# shuffled(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the elements of the sequence, shuffled using the given generator as a source for randomness.

## Declaration

```swift
func shuffled<T>(using generator: inout T) -> [Self.Element] where T : RandomNumberGenerator
```

## Parameters

- `generator`: The random number generator to use when shuffling the sequence.

<a id="return-value"></a>

## Return Value

An array of this sequence’s elements in a shuffled order.

<a id="discussion"></a>

## Discussion

You use this method to randomize the elements of a sequence when you are using a custom random number generator. For example, you can shuffle the numbers between `0` and `9` by calling the `shuffled(using:)` method on that range:

```swift
let numbers = 0...9
let shuffledNumbers = numbers.shuffled(using: &myGenerator)
// shuffledNumbers == [8, 9, 4, 3, 2, 6, 7, 0, 5, 1]
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.

> **Note**

> The algorithm used to shuffle a sequence may change in a future version of Swift. If you’re passing a generator that results in the same shuffled order each time you run your program, that sequence may change when your program is compiled using a different version of Swift.

## See Also

### Reordering an Array’s Elements

- [sort()](sort%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection` and `Element` conforms to `Comparable`. Sorts the collection in place.
- [sort(by:)](sort%28by_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Sorts the collection in place, using the given predicate as the comparison between elements.
- [sorted()](sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reverse()](reverse%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reverses the elements of the collection in place.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [shuffle()](shuffle%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place.
- [shuffle(using:)](shuffle%28using_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place, using the given generator as a source for randomness.
- [shuffled()](shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [partition(by:)](partition%28by_%29-90po8.md): Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [swapAt(\_:\_:)](swapat%28____%29.md): Exchanges the values at the specified indices of the collection.
