> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/enumeratedsequence/subsequence

# EnumeratedSequence.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = Slice<EnumeratedSequence<Base>>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
