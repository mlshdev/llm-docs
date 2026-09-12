> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/subtract(_:)](https://developer.apple.com/documentation/swift/setalgebra/subtract(_:))

# subtract(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the elements of the given set from this set.

## Declaration

```swift
mutating func subtract(_ other: Self)
```

## Parameters

- `other`: A set of the same type as the current set.

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

## Default Implementations

### SetAlgebra Implementations

- [subtract(\_:)](subtract%28__%29-7l337.md): Removes the elements of the given set from this set.
