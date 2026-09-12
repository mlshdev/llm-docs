> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/subtract(_:)-8gc48](https://developer.apple.com/documentation/swift/set/subtract(_:)-8gc48)

# subtract(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the elements of the given set from this set.

## Declaration

```swift
mutating func subtract(_ other: Set<Element>)
```

## Parameters

- `other`: Another set.

<a id="discussion"></a>

## Discussion

In the following example, the elements of the `employees` set that are also members of the `neighbors` set are removed. In particular, the names `"Bethany"` and `"Eric"` are removed from `employees`.

```swift
var employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani", "Greta"]
employees.subtract(neighbors)
print(employees)
// Prints "["Diana", "Chris", "Alicia"]"
```

## See Also

### Combining Sets

- [union(\_:)](union%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements of both this set and the given sequence.
- [formUnion(\_:)](formunion%28__%29.md): Conforms when `Element` conforms to `Hashable`. Inserts the elements of the given sequence into the set.
- [intersection(\_:)](intersection%28__%29-1zh8f.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [intersection(\_:)](intersection%28__%29-6uts9.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [formIntersection(\_:)](formintersection%28__%29.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that aren’t also in the given sequence.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are either in this set or in the given sequence, but not in both.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-22p0m.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that are also in the given sequence and adds the members of the sequence that are not already in the set.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-5u38b.md): Conforms when `Element` conforms to `Hashable`. Replace this set with the elements contained in this set or the given set, but not both.
- [subtract(\_:)](subtract%28__%29-7cd3y.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given sequence from the set.
- [subtracting(\_:)](subtracting%28__%29-3n4lc.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given set.
- [subtracting(\_:)](subtracting%28__%29-2qge3.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given sequence.
