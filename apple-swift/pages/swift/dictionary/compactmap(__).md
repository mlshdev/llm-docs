> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/compactmap(_:)](https://developer.apple.com/documentation/swift/dictionary/compactmap(_:))

# compactMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.

## Declaration

```swift
func compactMap<ElementOfResult>(_ transform: (Self.Element) throws -> ElementOfResult?) rethrows -> [ElementOfResult]
```

## Parameters

- `transform`: A closure that accepts an element of this sequence as its argument and returns an optional value.

<a id="return-value"></a>

## Return Value

An array of the non-`nil` results of calling `transform` with each element of the sequence.

<a id="discussion"></a>

## Discussion

Use this method to receive an array of non-optional values when your transformation produces an optional value.

In this example, note the difference in the result of using `map` and `compactMap` with a transformation that returns an optional `Int` value.

```swift
let possibleNumbers = ["1", "2", "three", "///4///", "5"]

let mapped: [Int?] = possibleNumbers.map { str in Int(str) }
// [1, 2, nil, nil, 5]

let compactMapped: [Int] = possibleNumbers.compactMap { str in Int(str) }
// [1, 2, 5]
```

> **Complexity**

> O(*n*), where *n* is the length of this sequence.

## See Also

### Transforming a Dictionary

- [mapValues(\_:)](mapvalues%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the keys of this dictionary with the values transformed by the given closure.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [compactMapValues(\_:)](compactmapvalues%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing only the key-value pairs that have non-`nil` values as the result of transformation by the given closure.
- [flatMap(\_:)](flatmap%28__%29-i3ly.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-6chv9.md): Deprecated.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [shuffled()](shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
