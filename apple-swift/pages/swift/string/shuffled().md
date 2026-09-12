> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/shuffled()](https://developer.apple.com/documentation/swift/string/shuffled())

# shuffled()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the elements of the sequence, shuffled.

## Declaration

```swift
func shuffled() -> [Self.Element]
```

<a id="return-value"></a>

## Return Value

A shuffled array of this sequence’s elements.

<a id="discussion"></a>

## Discussion

For example, you can shuffle the numbers between `0` and `9` by calling the `shuffled()` method on that range:

```swift
let numbers = 0...9
let shuffledNumbers = numbers.shuffled()
// shuffledNumbers == [1, 7, 6, 2, 8, 9, 4, 3, 5, 0]
```

This method is equivalent to calling `shuffled(using:)`, passing in the system’s default random generator.

> **Complexity**

> O(*n*), where *n* is the length of the sequence.

## See Also

### Reordering a String’s Characters

- [sorted()](sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reversed()](reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
