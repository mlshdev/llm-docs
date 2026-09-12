> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int16/words-swift.struct/subsequence](https://developer.apple.com/documentation/swift/int16/words-swift.struct/subsequence)

# Int16.Words.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = Slice<Int16.Words>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
