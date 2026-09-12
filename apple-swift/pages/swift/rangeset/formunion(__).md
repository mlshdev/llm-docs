> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/formunion(_:)](https://developer.apple.com/documentation/swift/rangeset/formunion(_:))

# formUnion(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds the contents of the given range set to this range set.

## Declaration

```swift
mutating func formUnion(_ other: RangeSet<Bound>)
```

## Parameters

- `other`: A range set to merge with this one.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*m* \+ *n*), where *m* and *n* are the number of ranges in this and the other range set.
