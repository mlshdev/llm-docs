> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/allowsextendedattributes](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/allowsextendedattributes)

# allowsExtendedAttributes

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.

## Declaration

```swift
var allowsExtendedAttributes: Bool
```

<a id="Discussion"></a>

## Discussion

If this value is `false`, the Markdown parser supports only the CommonMark syntax. The default is `false`.

## See Also

### Accessing Options

- [appliesSourcePositionAttributes](appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](failurepolicy-swift.property.md): The policy for handling a parsing failure.
- [AttributedString.MarkdownParsingOptions.FailurePolicy](failurepolicy-swift.enum.md): A type that represents policies for handling parsing failures.
- [interpretedSyntax](interpretedsyntax-swift.property.md): The syntax for interpreting a Markdown string.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax](interpretedsyntax-swift.enum.md): A type that represents the syntax for interpreting a Markdown string.
- [languageCode](languagecode.md): The language code for this document.
