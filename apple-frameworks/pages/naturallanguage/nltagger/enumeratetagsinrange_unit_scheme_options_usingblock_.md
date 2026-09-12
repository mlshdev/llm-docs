> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/enumeratetagsinrange:unit:scheme:options:usingblock:](https://developer.apple.com/documentation/naturallanguage/nltagger/enumeratetagsinrange:unit:scheme:options:usingblock:)

# enumerateTagsInRange:unit:scheme:options:usingBlock:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Enumerates a block over the tagger’s string, given a range, token unit, and tag scheme.

## Declaration

```objectivec
- (void) enumerateTagsInRange:(NSRange) range unit:(NLTokenUnit) unit scheme:(NLTagScheme) scheme options:(NLTaggerOptions) options usingBlock:(void (^)(NLTag tag, NSRange tokenRange, BOOL *stop)) block;
```

## Parameters

- `range`: The range of the string you want the tagger to analyze.
- `unit`: The linguistic unit of scale you’re interested in, such as [NLTokenUnitWord](../nltokenunit/word.md), [NLTokenUnitSentence](../nltokenunit/sentence.md), [NLTokenUnitParagraph](../nltokenunit/paragraph.md), or [NLTokenUnitDocument](../nltokenunit/document.md).
- `scheme`: The tag scheme the tagger uses to tag the string, such as [NLTagSchemeLanguage](../nltagscheme/language.md) or [NLTagSchemeScript](../nltagscheme/script.md). This scheme determines which types of [NLTag](../nltag.md) the method passes to your block. For other tag schemes, see [NLTagScheme](../nltagscheme.md).
- `options`: The set of linguistic tagger options to use, such as [NLTaggerOmitWhitespace](options/omitwhitespace.md). For all available options, see [NLTaggerOptions](options.md).
- `block`: The block this method uses to iterate over the tagger’s [string](string.md) property. The block has the following parameters:

  - **tag**: The tag of the token.
  - **tokenRange**: The range of the token.
  - **stop**: A reference to a Boolean value. The block can set the value to `true` to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this Boolean to `true` within the block.

<a id="Discussion"></a>

## Discussion

Use this method to iterate your block over the given range of a string. The method divides up the string with the given [NLTokenUnit](../nltokenunit.md) and [NLTagScheme](../nltagscheme.md) and then calls your block. For example, use the [NLTagSchemeLexicalClass](../nltagscheme/lexicalclass.md) tag scheme to identify which tokens are parts of speech, types of whitespace, or types of punctuation. Use the [NLTagSchemeLemma](../nltagscheme/lemma.md) tag scheme to identify the stem form of each word token, if known.

> **Important**

>  This method enumerates over the ranges of all tokens that intersect the specified range.

## See Also

### Enumerating linguistic tags

- [NLTaggerOptions](options.md): Constants for linguistic tagger enumeration specifying which tokens to omit and whether to join names.
- [NLTag](../nltag.md): A token type, lexical class, name, lemma, language, or script returned by a linguistic tagger for natural language text.
