> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/union(_:)](https://developer.apple.com/documentation/swift/set/union(_:))

# union(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set with the elements of both this set and the given sequence.

## Declaration

```swift
func union<S>(_ other: S) -> Set<Element> where Element == S.Element, S : Sequence
```

## Parameters

- `other`: A sequence of elements. `other` must be finite.

<a id="return-value"></a>

## Return Value

A new set with the unique elements of this set and `other`.

<a id="discussion"></a>

## Discussion

In the following example, the `attendeesAndVisitors` set is made up of the elements of the `attendees` set and the `visitors` array:

```swift
let attendees: Set = ["Alicia", "Bethany", "Diana"]
let visitors = ["Marcia", "Nathaniel"]
let attendeesAndVisitors = attendees.union(visitors)
print(attendeesAndVisitors)
// Prints "["Diana", "Nathaniel", "Bethany", "Alicia", "Marcia"]"
```

If the set already contains one or more elements that are also in `other`, the existing members are kept. If `other` contains multiple instances of equivalent elements, only the first instance is kept.

```swift
let initialIndices = Set(0..<5)
let expandedIndices = initialIndices.union([2, 3, 6, 6, 7, 7])
print(expandedIndices)
// Prints "[2, 4, 6, 7, 0, 1, 3]"
```

## See Also

### Combining Sets

- [formUnion(\_:)](formunion%28__%29.md): Conforms when `Element` conforms to `Hashable`. Inserts the elements of the given sequence into the set.
- [intersection(\_:)](intersection%28__%29-1zh8f.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [intersection(\_:)](intersection%28__%29-6uts9.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [formIntersection(\_:)](formintersection%28__%29.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that aren’t also in the given sequence.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are either in this set or in the given sequence, but not in both.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-22p0m.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that are also in the given sequence and adds the members of the sequence that are not already in the set.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-5u38b.md): Conforms when `Element` conforms to `Hashable`. Replace this set with the elements contained in this set or the given set, but not both.
- [subtract(\_:)](subtract%28__%29-8gc48.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given set from this set.
- [subtract(\_:)](subtract%28__%29-7cd3y.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given sequence from the set.
- [subtracting(\_:)](subtracting%28__%29-3n4lc.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given set.
- [subtracting(\_:)](subtracting%28__%29-2qge3.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given sequence.
