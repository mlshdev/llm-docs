> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/discontiguousattributedsubstring/subscript(_:)-6j670](https://developer.apple.com/documentation/foundation/discontiguousattributedsubstring/subscript(_:)-6j670)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a discontiguous substring of this discontiguous attributed string using a range to indicate the discontiguous substring bounds.

## Declaration

```swift
subscript(bounds: some RangeExpression<AttributedString.Index>) -> DiscontiguousAttributedSubstring { get }
```

## Parameters

- `bounds`: A range that indicates the bounds of the discontiguous substring to return.
