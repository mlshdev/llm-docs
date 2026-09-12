> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.property](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.property)

# interpretedSyntax

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The syntax for interpreting a Markdown string.

## Declaration

```swift
var interpretedSyntax: AttributedString.MarkdownParsingOptions.InterpretedSyntax
```

<a id="Discussion"></a>

## Discussion

If your Markdown data uses syntax that this setting excludes, the parser still parses it and includes its text in the final result. However, the relevant text won’t have attributes.

## See Also

### Accessing Options

- [allowsExtendedAttributes](allowsextendedattributes.md): A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- [appliesSourcePositionAttributes](appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](failurepolicy-swift.property.md): The policy for handling a parsing failure.
- [AttributedString.MarkdownParsingOptions.FailurePolicy](failurepolicy-swift.enum.md): A type that represents policies for handling parsing failures.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax](interpretedsyntax-swift.enum.md): A type that represents the syntax for interpreting a Markdown string.
- [languageCode](languagecode.md): The language code for this document.
