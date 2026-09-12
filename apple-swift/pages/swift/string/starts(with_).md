> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/starts(with:)](https://developer.apple.com/documentation/swift/string/starts(with:))

# starts(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.

## Declaration

```swift
func starts<PossiblePrefix>(with possiblePrefix: PossiblePrefix) -> Bool where PossiblePrefix : Sequence, Self.Element == PossiblePrefix.Element
```

## Parameters

- `possiblePrefix`: A sequence to compare to this sequence.

<a id="return-value"></a>

## Return Value

`true` if the initial elements of the sequence are the same as the elements of `possiblePrefix`; otherwise, `false`. If `possiblePrefix` has no elements, the return value is `true`.

<a id="discussion"></a>

## Discussion

This example tests whether one countable range begins with the elements of another countable range.

```swift
let a = 1...3
let b = 1...10

print(b.starts(with: a))
// Prints "true"
```

Passing a sequence with no elements or an empty collection as `possiblePrefix` always results in `true`.

```swift
print(b.starts(with: []))
// Prints "true"
```

> **Complexity**

> O(*m*), where *m* is the lesser of the length of the sequence and the length of `possiblePrefix`.

## See Also

### Comparing Characters

- [elementsEqual(\_:)](elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:by:)](starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.
