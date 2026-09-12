> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/init(allowsextendedattributes:interpretedsyntax:failurepolicy:languagecode:)](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/init(allowsextendedattributes:interpretedsyntax:failurepolicy:languagecode:))

# init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a Markdown parsing options instance with the specified values.

## Declaration

```swift
init(allowsExtendedAttributes: Bool = false, interpretedSyntax: AttributedString.MarkdownParsingOptions.InterpretedSyntax = .full, failurePolicy: AttributedString.MarkdownParsingOptions.FailurePolicy = .throwError, languageCode: String? = nil)
```

## Parameters

- `allowsExtendedAttributes`: A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- `interpretedSyntax`: The syntax for intepreting a Markdown string.
- `failurePolicy`: The policy for handling a parsing failure.
- `languageCode`: The [BCP-47](https://tools.ietf.org/search/bcp47) language code for this document.

## See Also

### Creating Markdown Parsing Options

- [init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:appliesSourcePositionAttributes:)](init%28allowsextendedattributes_interpretedsyntax_failurepolicy_languagecode_appliessourcepositionattributes_%29.md): Creates a Markdown parsing options instance with the specified values, optionally marking the source position of attributed text.
