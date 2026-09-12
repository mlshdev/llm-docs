> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/elementsequal(_:by:)](https://developer.apple.com/documentation/swift/string/elementsequal(_:by:))

# elementsEqual(\_:by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.

## Declaration

```swift
func elementsEqual<OtherSequence>(_ other: OtherSequence, by areEquivalent: (Self.Element, OtherSequence.Element) throws -> Bool) rethrows -> Bool where OtherSequence : Sequence
```

## Parameters

- `other`: A sequence to compare to this sequence.
- `areEquivalent`: A predicate that returns `true` if its two arguments are equivalent; otherwise, `false`.

<a id="return-value"></a>

## Return Value

`true` if this sequence and `other` contain equivalent items, using `areEquivalent` as the equivalence test; otherwise, `false.`

<a id="discussion"></a>

## Discussion

At least one of the sequences must be finite.

The predicate must be an *equivalence relation* over the elements. That is, for any elements `a`, `b`, and `c`, the following conditions must hold:

- `areEquivalent(a, a)` is always `true`. (Reflexivity)
- `areEquivalent(a, b)` implies `areEquivalent(b, a)`. (Symmetry)
- If `areEquivalent(a, b)` and `areEquivalent(b, c)` are both `true`, then `areEquivalent(a, c)` is also `true`. (Transitivity)

> **Complexity**

> O(*m*), where *m* is the lesser of the length of the sequence and the length of `other`.

## See Also

### Comparing Characters

- [elementsEqual(\_:)](elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [starts(with:)](starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.
