> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/formintersection(_:)](https://developer.apple.com/documentation/swift/setalgebra/formintersection(_:))

# formIntersection(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the elements of this set that aren’t also in the given set.

## Declaration

```swift
mutating func formIntersection(_ other: Self)
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="discussion"></a>

## Discussion

In the following example, the elements of the `employees` set that are not also members of the `neighbors` set are removed. In particular, the names `"Alicia"`, `"Chris"`, and `"Diana"` are removed.

```swift
var employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani", "Greta"]
employees.formIntersection(neighbors)
print(employees)
// Prints "["Bethany", "Eric"]"
```

## Default Implementations

### SetAlgebra Implementations

- [formIntersection(\_:)](formintersection%28__%29-9h7lm.md): Conforms when `RawValue` conforms to `FixedWidthInteger`. Removes all elements of this option set that are not also present in the given set.

## See Also

### Combining Sets

- [union(\_:)](union%28__%29.md): Returns a new set with the elements of both this and the given set.
- [formUnion(\_:)](formunion%28__%29.md): Adds the elements of the given set to the set.
- [intersection(\_:)](intersection%28__%29.md): Returns a new set with the elements that are common to both this set and the given set.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Returns a new set with the elements that are either in this set or in the given set, but not in both.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29.md): Removes the elements of the set that are also in the given set and adds the members of the given set that are not already in the set.
