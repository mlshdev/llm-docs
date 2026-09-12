> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/subscript(_:)-67hgv](https://developer.apple.com/documentation/foundation/attributedstringprotocol/subscript(_:)-67hgv)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a discontiguous substring of this attributed string using a set of ranges to indicate the discontiguous substring bounds.

## Declaration

```swift
subscript(indices: RangeSet<AttributedString.Index>) -> DiscontiguousAttributedSubstring { get }
```

## Parameters

- `indices`: A set of ranges that indicate the bounds of the discontiguous substring to return.
