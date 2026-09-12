> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/formsymmetricdifference(_:)](https://developer.apple.com/documentation/swift/rangeset/formsymmetricdifference(_:))

# formSymmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Removes the contents of this range set that are also in the given set and adds the contents of the given set that are not already in this range set.

## Declaration

```swift
mutating func formSymmetricDifference(_ other: RangeSet<Bound>)
```

## Parameters

- `other`: A range set to perform a symmetric difference against.
