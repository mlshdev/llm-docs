> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangeset/symmetricdifference(_:)

# symmetricDifference(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new range set representing the values in this range set or the given range set, but not both.

## Declaration

```swift
func symmetricDifference(_ other: RangeSet<Bound>) -> RangeSet<Bound>
```

## Parameters

- `other`: The range set to find a symmetric difference with.

<a id="return-value"></a>

## Return Value

A new range set.
