> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/ranges-swift.struct/subsequence](https://developer.apple.com/documentation/swift/rangeset/ranges-swift.struct/subsequence)

# RangeSet.Ranges.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = Slice<RangeSet<Bound>.Ranges>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
