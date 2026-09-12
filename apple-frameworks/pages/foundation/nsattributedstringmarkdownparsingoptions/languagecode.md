> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstringmarkdownparsingoptions/languagecode](https://developer.apple.com/documentation/foundation/nsattributedstringmarkdownparsingoptions/languagecode)

# languageCode

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The BCP-47 language code for this document.

## Declaration

```objectivec
@property (copy, nullable) NSString * languageCode;
```

<a id="Discussion"></a>

## Discussion

If not `nil`, the string applies the [languageIdentifier](../attributescopes/foundationattributes/languageidentifier.md) attribute to any range in the returned string that doesn’t otherwise specify a language attribute. The default is `nil`, which applies no attributes.

## See Also

### Determining Markdown Parsing Options

- [allowsExtendedAttributes](allowsextendedattributes.md): A Boolean value that indicates whether parsing allows extensions to Markdown that specify extended attributes.
- [appliesSourcePositionAttributes](appliessourcepositionattributes.md): A Boolean value that indicates whether parsing applies attributes that indicate the position of attributed text in the original Markdown string.
- [failurePolicy](failurepolicy.md): The policy for handling a parsing failure.
- [NSAttributedStringMarkdownParsingFailurePolicy](../nsattributedstringmarkdownparsingfailurepolicy.md): A type that represents policies for handling parsing failures.
- [interpretedSyntax](interpretedsyntax.md): The syntax for intepreting a Markdown string.
- [NSAttributedStringMarkdownInterpretedSyntax](../nsattributedstringmarkdowninterpretedsyntax.md): A type that represents the syntax for intepreting a Markdown string.
