> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/issubset(of:)-5y3lj](https://developer.apple.com/documentation/swift/setalgebra/issubset(of:)-5y3lj)

# isSubset(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the set is a subset of another set.

## Declaration

```swift
func isSubset(of other: Self) -> Bool
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

`true` if the set is a subset of `other`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Set *A* is a subset of another set *B* if every member of *A* is also a member of *B*.

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let attendees: Set = ["Alicia", "Bethany", "Diana"]
print(attendees.isSubset(of: employees))
// Prints "true"
```
