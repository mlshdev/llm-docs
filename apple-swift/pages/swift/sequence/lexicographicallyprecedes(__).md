> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/lexicographicallyprecedes(_:)](https://developer.apple.com/documentation/swift/sequence/lexicographicallyprecedes(_:))

# lexicographicallyPrecedes(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.

## Declaration

```swift
func lexicographicallyPrecedes<OtherSequence>(_ other: OtherSequence) -> Bool where OtherSequence : Sequence, Self.Element == OtherSequence.Element
```

## Parameters

- `other`: A sequence to compare to this sequence.

<a id="return-value"></a>

## Return Value

`true` if this sequence precedes `other` in a dictionary ordering; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This example uses the `lexicographicallyPrecedes` method to test which array of integers comes first in a lexicographical ordering.

```swift
let a = [1, 2, 2, 2]
let b = [1, 2, 3, 4]

print(a.lexicographicallyPrecedes(b))
// Prints "true"
print(b.lexicographicallyPrecedes(b))
// Prints "false"
```

> **Note**

> This method implements the mathematical notion of lexicographical ordering, which has no connection to Unicode.  If you are sorting strings to present to the end user, use `String` APIs that perform localized comparison.

> **Complexity**

> O(*m*), where *m* is the lesser of the length of the sequence and the length of `other`.

## See Also

### Comparing Sequences

- [elementsEqual(\_:)](elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:)](starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:by:)](lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.
