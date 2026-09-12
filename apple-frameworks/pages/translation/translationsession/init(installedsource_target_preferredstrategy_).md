> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/init(installedsource:target:preferredstrategy:)](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:preferredstrategy:))

# init(installedSource:target:preferredStrategy:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.0+ · macOS 26.4+

Creates a translation session to translate between a given source and target language already installed on device.

## Declaration

```swift
convenience init(installedSource source: Locale.Language, target: Locale.Language?, preferredStrategy: TranslationSession.Strategy)
```

## Parameters

- `preferredStrategy`: The translation approach to use. [highFidelity](strategy/highfidelity.md) uses Apple Intelligence models when available on device, or falls back to [lowLatency](strategy/lowlatency.md) when those models aren’t available. The `lowLatency` strategy uses traditional models for translation.

<a id="discussion"></a>

## Discussion

If one or both languages aren’t installed on the device, attempting to translate will throw errors. To get the person’s permission to download languages that aren’t already installed, translate using a [TranslationSession](../translationsession.md) provided by [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29) or [translationTask(source:target:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28source:target:action:%29) .

> **Note**

> If you created `TranslationSession` using [init(installedSource:target:)](init%28installedsource_target_%29.md), you don’t need a `.translationTask()`; however, you will need a [sourceLanguage](sourcelanguage.md) .

## See Also

### Initalizing a translation session

- [init(installedSource:target:)](init%28installedsource_target_%29.md): Creates a translation session to translate between a given source and target language already installed on device.
