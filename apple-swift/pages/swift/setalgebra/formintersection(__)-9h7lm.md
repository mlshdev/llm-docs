> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/formintersection(_:)-9h7lm](https://developer.apple.com/documentation/swift/setalgebra/formintersection(_:)-9h7lm)

# formIntersection(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all elements of this option set that are not also present in the given set.

## Declaration

```swift
mutating func formIntersection(_ other: Self)
```

## Parameters

- `other`: An option set.

<a id="discussion"></a>

## Discussion

This method is implemented as a `&` (bitwise AND) operation on the two sets’ raw values.
