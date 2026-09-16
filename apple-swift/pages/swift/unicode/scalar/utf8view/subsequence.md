> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/utf8view/subsequence

# Unicode.Scalar.UTF8View.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = Slice<Unicode.Scalar.UTF8View>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.
