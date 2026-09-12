> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/split(separator:maxsplits:omittingemptysubsequences:)-9esbr](https://developer.apple.com/documentation/swift/collection/split(separator:maxsplits:omittingemptysubsequences:)-9esbr)

# split(separator:maxSplits:omittingEmptySubsequences:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the longest possible subsequences of the collection, in order, around elements equal to the given separator.

## Declaration

```swift
func split<C>(separator: C, maxSplits: Int = .max, omittingEmptySubsequences: Bool = true) -> [Self.SubSequence] where C : Collection, Self.Element == C.Element
```

## Parameters

- `separator`: The element to be split upon.

<a id="return-value"></a>

## Return Value

A collection of subsequences, split from this collection’s elements.

## See Also

### Splitting and Joining Elements

- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-6c22.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
