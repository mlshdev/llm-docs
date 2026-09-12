> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstringtokenizerunitwordboundary](https://developer.apple.com/documentation/corefoundation/kcfstringtokenizerunitwordboundary)

# kCFStringTokenizerUnitWordBoundary (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that a string should be tokenized by locale-sensitive word boundary.

## Declaration

```swift
var kCFStringTokenizerUnitWordBoundary: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

You can use this constant in double-click range detection and whole word search. It is locale-sensitive. If the locale is `en_US_POSIX`, a colon (U+003A) is treated as a word separator. If the `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is `NULL`, the locale from the global `AppleTextBreakLocale` preference is used if it is available; otherwise the locale defaults to the first locale in `AppleLanguages`.

`kCFStringTokenizerUnitWordBoundary` also returns space between words as a token.

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

# kCFStringTokenizerUnitWordBoundary (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that a string should be tokenized by locale-sensitive word boundary.

## Declaration

```objectivec
kCFStringTokenizerUnitWordBoundary
```

<a id="Discussion"></a>

## Discussion

You can use this constant in double-click range detection and whole word search. It is locale-sensitive. If the locale is `en_US_POSIX`, a colon (U+003A) is treated as a word separator. If the `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is `NULL`, the locale from the global `AppleTextBreakLocale` preference is used if it is available; otherwise the locale defaults to the first locale in `AppleLanguages`.

`kCFStringTokenizerUnitWordBoundary` also returns space between words as a token.

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.
