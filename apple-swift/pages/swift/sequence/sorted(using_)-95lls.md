> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/sorted(using:)-95lls

# sorted(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the elements of the sequence, sorted using the given comparator to compare elements.

## Declaration

```swift
func sorted<Comparator>(using comparator: Comparator) -> [Self.Element] where Comparator : SortComparator, Self.Element == Comparator.Compared
```

## Parameters

- `comparator`: The comparator to use in ordering elements

<a id="return-value"></a>

## Return Value

An array of the elements sorted using `comparator`.
