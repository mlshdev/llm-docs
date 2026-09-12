> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstringmarkdowninterpretedsyntax/nsattributedstringmarkdowninterpretedsyntaxinlineonly](https://developer.apple.com/documentation/foundation/nsattributedstringmarkdowninterpretedsyntax/nsattributedstringmarkdowninterpretedsyntaxinlineonly)

# NSAttributedStringMarkdownInterpretedSyntaxInlineOnly

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans.

## Declaration

```objectivec
NSAttributedStringMarkdownInterpretedSyntaxInlineOnly
```

<a id="Discussion"></a>

## Discussion

With this syntax, the parser doesn’t apply attributes that differentiate blocks, like [NSPresentationIntentAttributeName](../nsattributedstring/key/presentationintentattributename.md). However, extended attributes apply to inline spans, so the parser includes them, if the [allowsExtendedAttributes](../nsattributedstringmarkdownparsingoptions/allowsextendedattributes.md) property allows them.

## See Also

### Syntax Values

- [NSAttributedStringMarkdownInterpretedSyntaxFull](nsattributedstringmarkdowninterpretedsyntaxfull.md): A syntax value that interprets the full Markdown syntax and produces all relevant attributes.
- [NSAttributedStringMarkdownInterpretedSyntaxInlineOnlyPreservingWhitespace](nsattributedstringmarkdowninterpretedsyntaxinlineonlypreservingwhitespace.md): A syntax value that parses all Markdown text, but interprets only attributes that apply to inline spans, perserving white space.
