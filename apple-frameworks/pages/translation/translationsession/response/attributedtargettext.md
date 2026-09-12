> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/response/attributedtargettext](https://developer.apple.com/documentation/translation/translationsession/response/attributedtargettext)

# attributedTargetText

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

The translated formatted text.

## Declaration

```swift
let attributedTargetText: AttributedString?
```

<a id="discussion"></a>

## Discussion

This property contains the translated text with formatting and defined attributes preserved and aligned from the source text.

The framework makes a best effort to preserve attributes like accessibility instructions and time ranges, aligning them to the corresponding words in the target language.

> **Note**

> The framework preserves but doesn’t modify attributes. To use the correct language after translation, update any attributes that need to reflect the target language, such as the language modifier for VoiceOver.

For examples of translating attributed source text, see [attributedSourceText](../request/attributedsourcetext.md).

## See Also

### Getting translation results

- [sourceText](sourcetext.md): The original text to translate from.
- [targetText](targettext.md): The translated text.
- [attributedSourceText](attributedsourcetext.md): The original translated text, including style formatting and links.
