> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput/subsequence](https://developer.apple.com/documentation/swift/anyregexoutput/subsequence)

# AnyRegexOutput.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = Slice<AnyRegexOutput>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
