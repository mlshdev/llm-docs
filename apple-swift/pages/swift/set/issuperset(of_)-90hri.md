> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/issuperset(of:)-90hri](https://developer.apple.com/documentation/swift/set/issuperset(of:)-90hri)

# isSuperset(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the set is a superset of the given sequence.

## Declaration

```swift
func isSuperset<S>(of possibleSubset: S) -> Bool where Element == S.Element, S : Sequence
```

## Parameters

- `possibleSubset`: A sequence of elements. `possibleSubset` must be finite.

<a id="return-value"></a>

## Return Value

`true` if the set is a superset of `possibleSubset`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Set *A* is a superset of another set *B* if every member of *B* is also a member of *A*.

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let attendees = ["Alicia", "Bethany", "Diana"]
print(employees.isSuperset(of: attendees))
// Prints "true"
```

## See Also

### Comparing Sets

- [==(\_:\_:)](==%28____%29.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value indicating whether two sets have equal elements.
- [!=(\_:\_:)](!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [isSubset(of:)](issubset%28of_%29-1d7pp.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a subset of the given set.
- [isSubset(of:)](issubset%28of_%29-6qyo5.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a subset of the given sequence.
- [isStrictSubset(of:)](isstrictsubset%28of_%29-96vc3.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict subset of the given sequence.
- [isStrictSubset(of:)](isstrictsubset%28of_%29-787sx.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict subset of the given sequence.
- [isSuperset(of:)](issuperset%28of_%29-9iz62.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a superset of the given set.
- [isStrictSuperset(of:)](isstrictsuperset%28of_%29-4d27m.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict superset of the given sequence.
- [isStrictSuperset(of:)](isstrictsuperset%28of_%29-58ejg.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict superset of the given sequence.
- [isDisjoint(with:)](isdisjoint%28with_%29-8ngmk.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set has no members in common with the given set.
- [isDisjoint(with:)](isdisjoint%28with_%29-2onid.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set has no members in common with the given sequence.
