> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/init(installedsource:target:)](https://developer.apple.com/documentation/translation/translationsession/init(installedsource:target:))

# init(installedSource:target:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Creates a translation session to translate between a given source and target language already installed on device.

## Declaration

```swift
convenience init(installedSource source: Locale.Language, target: Locale.Language?)
```

<a id="discussion"></a>

## Discussion

If one or both of the languages aren’t installed on the device already, attempting to translate will throw errors. In order to get the person’s permission to download languages that aren’t already installed, translate using a `TranslationSession` provided by [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29) or [translationTask(source:target:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28source:target:action:%29) .

> **Note**

> If you created `TranslationSession` using [init(installedSource:target:)](init%28installedsource_target_%29.md),  you don’t need a `.translationTask()`, however, you will need a `sourceLanguage` .

## See Also

### Initalizing a translation session

- [init(installedSource:target:preferredStrategy:)](init%28installedsource_target_preferredstrategy_%29.md): Creates a translation session to translate between a given source and target language already installed on device.
