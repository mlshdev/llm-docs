> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/insert(_:at:)](https://developer.apple.com/documentation/foundation/attributedstring/insert(_:at:))

# insert(\_:at:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Inserts the specified string at a specific index in the attributed string.

## Declaration

```swift
mutating func insert(_ s: some AttributedStringProtocol, at index: AttributedString.Index)
```

## Parameters

- `s`: The string to insert.
- `index`: The index that indicates where to insert the string.

## See Also

### Modifying an Attributed String

- [AttributedString.Index](index.md): A type that represents the position of a character or code unit within an attributed string.
- [removeSubrange(\_:)](removesubrange%28__%29.md): Removes a range of characters from the attributed string.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29.md): Replaces the contents in a range of the attributed string.
