> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/isdisjoint(with:)-59c10](https://developer.apple.com/documentation/swift/setalgebra/isdisjoint(with:)-59c10)

# isDisjoint(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the set has no members in common with the given set.

## Declaration

```swift
func isDisjoint(with other: Self) -> Bool
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

`true` if the set has no elements in common with `other`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

In the following example, the `employees` set is disjoint with the `visitors` set because no name appears in both sets.

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let visitors: Set = ["Marcia", "Nathaniel", "Olivia"]
print(employees.isDisjoint(with: visitors))
// Prints "true"
```
