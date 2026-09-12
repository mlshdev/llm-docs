> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/compactmapvalues(_:)](https://developer.apple.com/documentation/swift/dictionary/compactmapvalues(_:))

# compactMapValues(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new dictionary containing only the key-value pairs that have non-`nil` values as the result of transformation by the given closure.

## Declaration

```swift
func compactMapValues<T>(_ transform: (Value) throws -> T?) rethrows -> Dictionary<Key, T>
```

## Parameters

- `transform`: A closure that transforms a value. `transform` accepts each value of the dictionary as its parameter and returns an optional transformed value of the same or of a different type.

<a id="return-value"></a>

## Return Value

A dictionary containing the keys and non-`nil` transformed values of this dictionary.

<a id="discussion"></a>

## Discussion

Use this method to receive a dictionary with non-optional values when your transformation produces optional values.

In this example, note the difference in the result of using `mapValues` and `compactMapValues` with a transformation that returns an optional `Int` value.

```swift
let data = ["a": "1", "b": "three", "c": "///4///"]

let m: [String: Int?] = data.mapValues { str in Int(str) }
// ["a": Optional(1), "b": nil, "c": nil]

let c: [String: Int] = data.compactMapValues { str in Int(str) }
// ["a": 1]
```

> **Complexity**

> O(*m* \+ *n*), where *n* is the length of the original dictionary and *m* is the length of the resulting dictionary.

## See Also

### Transforming a Dictionary

- [mapValues(\_:)](mapvalues%28__%29.md): Conforms when `Key` conforms to `Hashable`. Returns a new dictionary containing the keys of this dictionary with the values transformed by the given closure.
- [reduce(\_:\_:)](reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [compactMap(\_:)](compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-i3ly.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](flatmap%28__%29-6chv9.md): Deprecated.
- [sorted(by:)](sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [shuffled()](shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
