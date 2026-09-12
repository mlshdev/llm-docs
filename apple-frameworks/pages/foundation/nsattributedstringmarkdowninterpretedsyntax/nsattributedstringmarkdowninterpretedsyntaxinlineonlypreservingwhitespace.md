> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstringmarkdowninterpretedsyntax/nsattributedstringmarkdowninterpretedsyntaxinlineonlypreservingwhitespace](https://developer.apple.com/documentation/foundation/nsattributedstringmarkdowninterpretedsyntax/nsattributedstringmarkdowninterpretedsyntaxinlineonlypreservingwhitespace)

# NSAttributedStringMarkdownInterpretedSyntaxInlineOnlyPreservingWhitespace

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans, perserving white space.

## Declaration

```objectivec
NSAttributedStringMarkdownInterpretedSyntaxInlineOnlyPreservingWhitespace
```

<a id="Discussion"></a>

## Discussion

This value behaves like [NSAttributedStringMarkdownInterpretedSyntaxInlineOnly](nsattributedstringmarkdowninterpretedsyntaxinlineonly.md), but doesn’t interpret multiple consecutive instances of white space as a single separator space. All whitespace characters appear in the result as the source specifies.

## See Also

### Syntax Values

- [NSAttributedStringMarkdownInterpretedSyntaxFull](nsattributedstringmarkdowninterpretedsyntaxfull.md): A syntax value that interprets the full Markdown syntax and produces all relevant attributes.
- [NSAttributedStringMarkdownInterpretedSyntaxInlineOnly](nsattributedstringmarkdowninterpretedsyntaxinlineonly.md): A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans.
