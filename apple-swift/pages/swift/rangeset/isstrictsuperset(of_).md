> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangeset/isstrictsuperset(of:)

# isStrictSuperset(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value that indicates whether this range set is a strict superset of the given set.

## Declaration

```swift
func isStrictSuperset(of other: RangeSet<Bound>) -> Bool
```

## Parameters

- `other`: A range set to compare against.

<a id="return-value"></a>

## Return Value

`true` if this range set is a strict superset of `other`; otherwise, `false`.
