> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/1588024-tokenization-modifiers](https://developer.apple.com/documentation/corefoundation/1588024-tokenization-modifiers)

# Tokenization Modifiers (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Tokenization options are used with [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized

<a id="overview"></a>

## Overview

You use the tokenization unit options with [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) to specify how a string should be tokenized.

You use the modifiers together with a tokenization unit to modify the way the string is tokenized.

You use the attribute specifiers to tell the tokenizer to prepare the specified attribute when it tokenizes the given string. You can retrieve the attribute value by calling [CFStringTokenizerCopyCurrentTokenAttribute(\_:\_:)](cfstringtokenizercopycurrenttokenattribute%28____%29.md) with one of the attribute options.

The locale sensitivity of the tokenization unit options may change in a future release.

## Topics

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

## See Also

### Constants

- [CFStringTokenizerTokenType](cfstringtokenizertokentype.md): Token types returned by [CFStringTokenizerGoToTokenAtIndex(\_:\_:)](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken(\_:)](cfstringtokenizeradvancetonexttoken%28__%29.md).

# Tokenization Modifiers (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Tokenization options are used with [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) to specify how the string should be tokenized

<a id="overview"></a>

## Overview

You use the tokenization unit options with [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) to specify how a string should be tokenized.

You use the modifiers together with a tokenization unit to modify the way the string is tokenized.

You use the attribute specifiers to tell the tokenizer to prepare the specified attribute when it tokenizes the given string. You can retrieve the attribute value by calling [CFStringTokenizerCopyCurrentTokenAttribute](cfstringtokenizercopycurrenttokenattribute%28____%29.md) with one of the attribute options.

The locale sensitivity of the tokenization unit options may change in a future release.

## Topics

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

## See Also

### Constants

- [CFStringTokenizerTokenType](cfstringtokenizertokentype.md): Token types returned by [CFStringTokenizerGoToTokenAtIndex](cfstringtokenizergototokenatindex%28____%29.md) and [CFStringTokenizerAdvanceToNextToken](cfstringtokenizeradvancetonexttoken%28__%29.md).
