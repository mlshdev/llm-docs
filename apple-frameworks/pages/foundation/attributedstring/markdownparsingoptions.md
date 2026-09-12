> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions)

# AttributedString.MarkdownParsingOptions

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that affect the parsing of Markdown content into an attributed string.

## Declaration

```swift
struct MarkdownParsingOptions
```

## Topics

### Creating Markdown Parsing Options

- [init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:)](markdownparsingoptions/init%28allowsextendedattributes_interpretedsyntax_failurepolicy_languagecode_%29.md): Creates a Markdown parsing options instance with the specified values.
- [init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:appliesSourcePositionAttributes:)](markdownparsingoptions/init%28allowsextendedattributes_interpretedsyntax_failurepolicy_languagecode_appliessourcepositionattributes_%29.md): Creates a Markdown parsing options instance with the specified values, optionally marking the source position of attributed text.

### Accessing Options

- [allowsExtendedAttributes](markdownparsingoptions/allowsextendedattributes.md): A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- [appliesSourcePositionAttributes](markdownparsingoptions/appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](markdownparsingoptions/failurepolicy-swift.property.md): The policy for handling a parsing failure.
- [AttributedString.MarkdownParsingOptions.FailurePolicy](markdownparsingoptions/failurepolicy-swift.enum.md): A type that represents policies for handling parsing failures.
- [interpretedSyntax](markdownparsingoptions/interpretedsyntax-swift.property.md): The syntax for interpreting a Markdown string.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax](markdownparsingoptions/interpretedsyntax-swift.enum.md): A type that represents the syntax for interpreting a Markdown string.
- [languageCode](markdownparsingoptions/languagecode.md): The language code for this document.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
