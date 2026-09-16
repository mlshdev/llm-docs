> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/bidirectionalcollection/split(separator:maxsplits:omittingemptysubsequences:)

# split(separator:maxSplits:omittingEmptySubsequences:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the longest possible subsequences of the collection, in order, around elements equal to the given separator.

## Declaration

```swift
func split(separator: some RegexComponent, maxSplits: Int = .max, omittingEmptySubsequences: Bool = true) -> [Self.SubSequence]
```

## Parameters

- `separator`: A regex describing elements to be split upon.

<a id="return-value"></a>

## Return Value

A collection of substrings, split from this collection’s elements.
