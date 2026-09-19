> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/targetlanguage

# targetLanguage

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The output language to translate into.

## Declaration

```swift
final let targetLanguage: Locale.Language?
```

<a id="discussion"></a>

## Discussion

If this value is set to `nil`, the session chooses an optimal language to translate into based on the `sourceLanguage` and the person’s [preferredLanguages](../../foundation/locale/preferredlanguages.md).

> **Note**

> This value doesn’t update after translation. To see what target language the session uses for a particular translation, check the response [targetLanguage](response/targetlanguage.md).

## See Also

### Getting the language configuration

- [sourceLanguage](sourcelanguage.md): The input language to translate from.
