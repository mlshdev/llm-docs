> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributedstring/replacesubrange(_:with:)

# replaceSubrange(\_:with:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Replaces the contents in a range of the attributed string.

## Declaration

```swift
mutating func replaceSubrange(_ range: some RangeExpression<AttributedString.Index>, with s: some AttributedStringProtocol)
```

## Parameters

- `range`: The range of the attributed string to replace.
- `s`: The string to insert in place of the replaced range.

## See Also

### Modifying an Attributed String

- [insert(\_:at:)](insert%28__at_%29.md): Inserts the specified string at a specific index in the attributed string.
- [AttributedString.Index](index.md): A type that represents the position of a character or code unit within an attributed string.
- [removeSubrange(\_:)](removesubrange%28__%29.md): Removes a range of characters from the attributed string.
