> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/sourcelanguage](https://developer.apple.com/documentation/translation/translationsession/sourcelanguage)

# sourceLanguage

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

The input language to translate from.

## Declaration

```swift
final let sourceLanguage: Locale.Language?
```

<a id="discussion"></a>

## Discussion

If this value is set to `nil`, the session tries to identify the source language automatically. If it can’t identify the language, it prompts the person to choose the source language to use for the translation.

> **Note**

> This value doesn’t update after translation. To see what source language the session uses for a particular translation, check the response [sourceLanguage](response/sourcelanguage.md).

## See Also

### Getting the language configuration

- [targetLanguage](targetlanguage.md): The output language to translate into.
