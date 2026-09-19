> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/response/attributedsourcetext

# attributedSourceText

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

The original translated text, including style formatting and links.

## Declaration

```swift
let attributedSourceText: AttributedString?
```

<a id="discussion"></a>

## Discussion

When translating attributed strings using any translation method, the framework makes a best effort to preserve both visual formatting and defined attributes. This enables use cases like timestamp synchronization for captions or lyrics. For examples of translating text with preserved attributes, see [attributedSourceText](../request/attributedsourcetext.md).

## See Also

### Getting translation results

- [sourceText](sourcetext.md): The original text to translate from.
- [targetText](targettext.md): The translated text.
- [attributedTargetText](attributedtargettext.md): The translated formatted text.
