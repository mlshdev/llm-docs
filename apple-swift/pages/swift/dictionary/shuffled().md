> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/shuffled()](https://developer.apple.com/documentation/swift/dictionary/shuffled())

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

### Transforming a Dictionary

- [mapValues(\_:)](mapvalues%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the keys of this dictionary with the values transformed by the given closure.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [compactMap(\_:)](compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [compactMapValues(\_:)](compactmapvalues%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing only the key-value pairs that have non-`nil` values as the result of transformation by the given closure.
- [flatMap(\_:)](flatmap%28__%29-i3ly.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-6chv9.md): Deprecated.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
