> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/subtracting(_:)-648yh](https://developer.apple.com/documentation/swift/setalgebra/subtracting(_:)-648yh)

# subtracting(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new set containing the elements of this set that do not occur in the given set.

## Declaration

```swift
func subtracting(_ other: Self) -> Self
```

## Parameters

- `other`: A set of the same type as the current set.

<a id="return-value"></a>

## Return Value

A new set.

<a id="discussion"></a>

## Discussion

In the following example, the `nonNeighbors` set is made up of the elements of the `employees` set that are not elements of `neighbors`:

```swift
let employees: Set = ["Alicia", "Bethany", "Chris", "Diana", "Eric"]
let neighbors: Set = ["Bethany", "Eric", "Forlani", "Greta"]
let nonNeighbors = employees.subtracting(neighbors)
print(nonNeighbors)
// Prints "["Diana", "Chris", "Alicia"]"
```
