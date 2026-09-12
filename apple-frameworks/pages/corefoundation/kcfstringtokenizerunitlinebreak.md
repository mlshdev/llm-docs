> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstringtokenizerunitlinebreak](https://developer.apple.com/documentation/corefoundation/kcfstringtokenizerunitlinebreak)

# kCFStringTokenizerUnitLineBreak (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.

## Declaration

```swift
var kCFStringTokenizerUnitLineBreak: CFOptionFlags { get }
```

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate(\_:\_:\_:\_:\_:)](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.

# kCFStringTokenizerUnitLineBreak (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that a string should be tokenized by line break. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.

## Declaration

```objectivec
kCFStringTokenizerUnitLineBreak
```

## See Also

### Constants

- [kCFStringTokenizerUnitWord](kcfstringtokenizerunitword.md): Specifies that a string should be tokenized by word. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitSentence](kcfstringtokenizerunitsentence.md): Specifies that a string should be tokenized by sentence. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitParagraph](kcfstringtokenizerunitparagraph.md): Specifies that a string should be tokenized by paragraph. The `locale` parameter of [CFStringTokenizerCreate](cfstringtokenizercreate%28__________%29.md) is ignored.
- [kCFStringTokenizerUnitWordBoundary](kcfstringtokenizerunitwordboundary.md): Specifies that a string should be tokenized by locale-sensitive word boundary.
- [kCFStringTokenizerAttributeLatinTranscription](kcfstringtokenizerattributelatintranscription.md): Used with `kCFStringTokenizerUnitWord`, tells the tokenizer to prepare the Latin transcription when it tokenizes the string.
- [kCFStringTokenizerAttributeLanguage](kcfstringtokenizerattributelanguage.md): Tells the tokenizer to prepare the language (specified as an RFC 3066bis string) when it tokenizes the string.
