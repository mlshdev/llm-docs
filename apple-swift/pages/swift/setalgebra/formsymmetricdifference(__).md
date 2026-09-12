> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/formsymmetricdifference(_:)](https://developer.apple.com/documentation/swift/setalgebra/formsymmetricdifference(_:))

# formSymmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.

## Declaration

```swift
mutating func formSymmetricDifference(_ other: Self)
```

## Parameters

- `other`: A set of the same type.

<a id="discussion"></a>

## Discussion

In the following example, the elements of the `employees` set that are also members of `neighbors` are removed from `employees`, while the elements of `neighbors` that are not members of `employees` are added to `employees`. In particular, the names `"Bethany"` and `"Eric"` are removed from `employees` while the name `"Forlani"` is added.

```swift
var employees: Set = ["Alicia", "Bethany", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani"]
employees.formSymmetricDifference(neighbors)
print(employees)
// Prints "["Diana", "Forlani", "Alicia"]"
```

## Default Implementations

### SetAlgebra Implementations

- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-56m23.md): Conforms when `RawValue` conforms to `FixedWidthInteger`. Replaces this set with a new set containing all elements contained in either this set or the given set, but not in both.

## See Also

### Combining Sets

- [union(\_:)](union%28__%29.md): Returns a new set with the elements of both this and the given set.
- [formUnion(\_:)](formunion%28__%29.md): Adds the elements of the given set to the set.
- [intersection(\_:)](intersection%28__%29.md): Returns a new set with the elements that are common to both this set and the given set.
- [formIntersection(\_:)](formintersection%28__%29.md): Removes the elements of this set that aren’t also in the given set.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Returns a new set with the elements that are either in this set or in the given set, but not in both.
