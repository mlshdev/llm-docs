> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/intersection(_:)](https://developer.apple.com/documentation/swift/setalgebra/intersection(_:))

# intersection(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set with the elements that are common to both this set and the given set.

## Declaration

```swift
func intersection(_ other: Self) -> Self
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

A new set.

<a id="discussion"></a>

## Discussion

In the following example, the `bothNeighborsAndEmployees` set is made up of the elements that are in *both* the `employees` and `neighbors` sets. Elements that are in only one or the other are left out of the result of the intersection.

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani", "Greta"]
let bothNeighborsAndEmployees = employees.intersection(neighbors)
print(bothNeighborsAndEmployees)
// Prints "["Bethany", "Eric"]"
```

> **Note**

> If this set and `other` contain elements that are equal but distinguishable (e.g. via `===`), which of these elements is present in the result is unspecified.

## Default Implementations

### SetAlgebra Implementations

- [intersection(\_:)](intersection%28__%29-73uhs.md): Returns a new option set with only the elements contained in both this set and the given set.

## See Also

### Combining Sets

- [union(\_:)](union%28__%29.md): Returns a new set with the elements of both this and the given set.
- [formUnion(\_:)](formunion%28__%29.md): Adds the elements of the given set to the set.
- [formIntersection(\_:)](formintersection%28__%29.md): Removes the elements of this set that aren’t also in the given set.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Returns a new set with the elements that are either in this set or in the given set, but not in both.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29.md): Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.
