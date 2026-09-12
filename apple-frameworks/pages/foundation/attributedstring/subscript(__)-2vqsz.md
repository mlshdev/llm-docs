> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/subscript(_:)-2vqsz](https://developer.apple.com/documentation/foundation/attributedstring/subscript(_:)-2vqsz)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a substring of the attributed string using a range to indicate the substring bounds.

## Declaration

```swift
subscript(bounds: some RangeExpression<AttributedString.Index>) -> AttributedSubstring { get set }
```
