> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/ranges(of:)](https://developer.apple.com/documentation/swift/collection/ranges(of:))

# ranges(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Finds and returns the ranges of the all occurrences of a given sequence within the collection.

## Declaration

```swift
func ranges<C>(of other: C) -> [Range<Self.Index>] where C : Collection, Self.Element == C.Element
```

## Parameters

- `other`: The sequence to search for.

<a id="return-value"></a>

## Return Value

A collection of ranges of all occurrences of `other`. Returns an empty collection if `other` is not found.
