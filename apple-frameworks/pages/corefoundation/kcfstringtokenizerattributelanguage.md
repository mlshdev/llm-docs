> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstringtokenizerattributelanguage](https://developer.apple.com/documentation/corefoundation/kcfstringtokenizerattributelanguage)

# kCFStringTokenizerAttributeLanguage (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

## Declaration

```swift
var kCFStringTokenizerAttributeLanguage: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

Used with [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md) or [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md).

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.

# kCFStringTokenizerAttributeLanguage (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

## Declaration

```objectivec
kCFStringTokenizerAttributeLanguage
```

<a id="Discussion"></a>

## Discussion

Used with [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md) or [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md).

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitLineBreak](kcfstringtokenizerunitlinebreak.md): Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
