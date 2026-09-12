> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.enum/inlineonlypreservingwhitespace](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/interpretedsyntax-swift.enum/inlineonlypreservingwhitespace)

# AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnlyPreservingWhitespace

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans, preserving white space.

## Declaration

```swift
case inlineOnlyPreservingWhitespace
```

<a id="Discussion"></a>

## Discussion

This value behaves like [AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnly](inlineonly.md), but doesn’t interpret multiple consecutive instances of white space as a single separator space. All whitespace characters appear in the result as the source specifies.

## See Also

### Syntax Values

- [AttributedString.MarkdownParsingOptions.InterpretedSyntax.full](full.md): A syntax value that interprets the full Markdown syntax and produces all relevant attributes.
- [AttributedString.MarkdownParsingOptions.InterpretedSyntax.inlineOnly](inlineonly.md): A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans.
