> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/sequence/sorted(using:)-69w5u

# sorted(using:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the elements of the sequence, sorted using the given array of `SortComparator`s to compare elements.

## Declaration

```swift
func sorted<S, Comparator>(using comparators: S) -> [Self.Element] where S : Sequence, Comparator : SortComparator, Comparator == S.Element, Self.Element == Comparator.Compared
```

## Parameters

- `comparators`: An array of comparators used to compare elements. The first comparator specifies the primary comparator to be used in sorting the sequence’s elements. Any subsequent comparators are used to further refine the order of elements with equal values.

<a id="return-value"></a>

## Return Value

An array of the elements sorted using `comparators`.
