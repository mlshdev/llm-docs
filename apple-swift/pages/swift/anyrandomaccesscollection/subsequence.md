> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyrandomaccesscollection/subsequence](https://developer.apple.com/documentation/swift/anyrandomaccesscollection/subsequence)

# AnyRandomAccessCollection.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = AnyRandomAccessCollection<Element>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
