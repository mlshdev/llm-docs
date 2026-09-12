> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/subscript(_:)-109me](https://developer.apple.com/documentation/foundation/attributedstringprotocol/subscript(_:)-109me)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a substring of the attributed string using a range to indicate the substring bounds.

## Declaration

```swift
subscript<R>(bounds: R) -> AttributedSubstring where R : RangeExpression, R.Bound == AttributedString.Index { get }
```

## Default Implementations

### AttributedStringProtocol Implementations

- [subscript(\_:)](subscript%28__%29-67hgv.md): Returns a discontiguous substring of this attributed string using a set of ranges to indicate the discontiguous substring bounds.
