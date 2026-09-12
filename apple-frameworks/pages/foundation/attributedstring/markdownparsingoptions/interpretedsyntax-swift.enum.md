> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.enum](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.enum)

# AttributedString.MarkdownParsingOptions.InterpretedSyntax

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that represents the syntax for interpreting a Markdown string.

## Declaration

```swift
enum InterpretedSyntax
```

## Topics

### Syntax Values

- [AttributedString.MarkdownParsingOptions.InterpretedSyntax.full](interpretedsyntax-swift.enum/full.md): A syntax value that interprets the full Markdown syntax and produces all relevant attributes.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnly](interpretedsyntax-swift.enum/inlineonly.md): A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnlyPreservingWhitespace](interpretedsyntax-swift.enum/inlineonlypreservingwhitespace.md): A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans, preserving white space.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Options

- [allowsExtendedAttributes](allowsextendedattributes.md): A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- [appliesSourcePositionAttributes](appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](failurepolicy-swift.property.md): The policy for handling a parsing failure.
- [AttributedString.MarkdownParsingOptions.FailurePolicy](failurepolicy-swift.enum.md): A type that represents policies for handling parsing failures.
- [interpretedSyntax](interpretedsyntax-swift.property.md): The syntax for interpreting a Markdown string.
- [languageCode](languagecode.md): The language code for this document.
