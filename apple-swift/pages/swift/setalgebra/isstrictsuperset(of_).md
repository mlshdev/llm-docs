> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/isstrictsuperset(of:)](https://developer.apple.com/documentation/swift/setalgebra/isstrictsuperset(of:))

# isStrictSuperset(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether this set is a strict superset of the given set.

## Declaration

```swift
func isStrictSuperset(of other: Self) -> Bool
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

`true` if the set is a strict superset of `other`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Set *A* is a strict superset of another set *B* if every member of *B* is also a member of *A* and *A* contains at least one element that is *not* a member of *B*.

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let attendees: Set = ["Alicia", "Bethany", "Diana"]
print(employees.isStrictSuperset(of: attendees))
// Prints "true"

// A set is never a strict superset of itself:
print(employees.isStrictSuperset(of: employees))
// Prints "false"
```

## See Also

### Comparing Sets

- [isStrictSubset(of:)](isstrictsubset%28of_%29.md): Returns a Boolean value that indicates whether this set is a strict subset of the given set.
