> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangeset/ranges-swift.property

# ranges

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A collection of the ranges that make up the range set.

## Declaration

```swift
var ranges: RangeSet<Bound>.Ranges { get }
```

<a id="discussion"></a>

## Discussion

The ranges that you access by using `ranges` never overlap, are never empty, and are always in increasing order.
