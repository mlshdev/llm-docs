> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/isstrictsubset(of:)](https://developer.apple.com/documentation/swift/rangeset/isstrictsubset(of:))

# isStrictSubset(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether this range set is a strict subset of the given set.

## Declaration

```swift
func isStrictSubset(of other: RangeSet<Bound>) -> Bool
```

## Parameters

- `other`: A range set to compare against.

<a id="return-value"></a>

## Return Value

`true` if this range set is a strict subset of `other`; otherwise, `false`.
