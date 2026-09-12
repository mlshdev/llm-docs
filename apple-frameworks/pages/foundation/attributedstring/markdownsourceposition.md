> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownsourceposition](https://developer.apple.com/documentation/foundation/attributedstring/markdownsourceposition)

# AttributedString.MarkdownSourcePosition

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The position of attributed string text in its original Markdown source string.

## Declaration

```swift
struct MarkdownSourcePosition
```

## Topics

### Creating a Markdown Source Position

- [init(startLine:startColumn:endLine:endColumn:)](markdownsourceposition/init%28startline_startcolumn_endline_endcolumn_%29.md): Creates a Markdown source position instance from its start and end line and column.

### Inspecting Markdown Source Position Properties

- [startLine](markdownsourceposition/startline.md): The line where the text begins in the Markdown source.
- [startColumn](markdownsourceposition/startcolumn.md): The column where the text begins in the Markdown source.
- [endLine](markdownsourceposition/endline.md): The line where the text ends in the Markdown source.
- [endColumn](markdownsourceposition/endcolumn.md): The column where the text ends in the Markdown source.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
