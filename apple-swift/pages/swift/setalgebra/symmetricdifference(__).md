> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/symmetricdifference(_:)](https://developer.apple.com/documentation/swift/setalgebra/symmetricdifference(_:))

# symmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set with the elements that are either in this set or in the given set, but not in both.

## Declaration

```swift
func symmetricDifference(_ other: Self) -> Self
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

A new set.

<a id="discussion"></a>

## Discussion

In the following example, the `eitherNeighborsOrEmployees` set is made up of the elements of the `employees` and `neighbors` sets that are not in both `employees` *and* `neighbors`. In particular, the names `"Bethany"` and `"Eric"` do not appear in `eitherNeighborsOrEmployees`.

```swift
let employees: Set = ["Alicia", "Bethany", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani"]
let eitherNeighborsOrEmployees = employees.symmetricDifference(neighbors)
print(eitherNeighborsOrEmployees)
// Prints "["Diana", "Forlani", "Alicia"]"
```

## Default Implementations

### SetAlgebra Implementations

- [symmetricDifference(\_:)](symmetricdifference%28__%29-81pzi.md): Returns a new option set with the elements contained in this set or in the given set, but not in both.

## See Also

### Combining Sets

- [union(\_:)](union%28__%29.md): Returns a new set with the elements of both this and the given set.
- [formUnion(\_:)](formunion%28__%29.md): Adds the elements of the given set to the set.
- [intersection(\_:)](intersection%28__%29.md): Returns a new set with the elements that are common to both this set and the given set.
- [formIntersection(\_:)](formintersection%28__%29.md): Removes the elements of this set that aren’t also in the given set.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29.md): Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.
