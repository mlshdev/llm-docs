> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/init(allowsextendedattributes:interpretedsyntax:failurepolicy:languagecode:appliessourcepositionattributes:)](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/init(allowsextendedattributes:interpretedsyntax:failurepolicy:languagecode:appliessourcepositionattributes:))

# init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:appliesSourcePositionAttributes:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a Markdown parsing options instance with the specified values, optionally marking the source position of attributed text.

## Declaration

```swift
init(allowsExtendedAttributes: Bool = false, interpretedSyntax: AttributedString.MarkdownParsingOptions.InterpretedSyntax = .full, failurePolicy: AttributedString.MarkdownParsingOptions.FailurePolicy = .throwError, languageCode: String? = nil, appliesSourcePositionAttributes: Bool = false)
```

## Parameters

- `allowsExtendedAttributes`: A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- `interpretedSyntax`: The syntax for intepreting a Markdown string.
- `failurePolicy`: The policy for handling a parsing failure.
- `languageCode`: The [BCP-47](https://tools.ietf.org/search/bcp47) language code for this document.
- `appliesSourcePositionAttributes`: A Boolean value that indicates whether parsing applies attributes that indicate the position of attribute text in the original Markdown string. If this value is `true`, the resulting string may contain attributes of type [AttributeScopes.FoundationAttributes.MarkdownSourcePositionAttribute](../../attributescopes/foundationattributes/markdownsourcepositionattribute.md).

## See Also

### Creating Markdown Parsing Options

- [init(allowsExtendedAttributes:interpretedSyntax:failurePolicy:languageCode:)](init%28allowsextendedattributes_interpretedsyntax_failurepolicy_languagecode_%29.md): Creates a Markdown parsing options instance with the specified values.
