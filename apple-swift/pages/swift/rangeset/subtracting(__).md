> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/subtracting(_:)](https://developer.apple.com/documentation/swift/rangeset/subtracting(_:))

# subtracting(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a new set containing the contents of this range set that are not also in the given range set.

## Declaration

```swift
func subtracting(_ other: RangeSet<Bound>) -> RangeSet<Bound>
```

## Parameters

- `other`: The range set to subtract.

<a id="return-value"></a>

## Return Value

A new range set.
