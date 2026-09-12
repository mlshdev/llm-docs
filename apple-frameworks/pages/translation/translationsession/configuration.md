> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/configuration](https://developer.apple.com/documentation/translation/translationsession/configuration)

# TranslationSession.Configuration

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A type containing the information to use when performing a translation.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

Specify the source and target languages to use in a translation session with this object. Initialize an instance of this type using the [init(source:target:)](configuration/init%28source_target_%29.md) and passing in the `source` and `target` languages. When you pass this configuration into the [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29)  function, the framework uses the languages you specify for translation.

To re-run a translation, store the configuration object as state in your SwiftUI view by using the `State` property wrapper. Then change one of the configuration properties (such as the source or target language) to re-run the translation on a new pair of languages. You can also call [invalidate()](configuration/invalidate%28%29.md) on the configuration instance to re-run the translation using the same languages with new content to translate. When you do, the action closure of [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29) runs and the framework translates the text.

The following example demonstrates how to initiate a new translation from a button press:

```swift
struct TranslationExample: View {
    var sourceText: String
    var sourceLanguage: Locale.Language?
    var targetLanguage: Locale.Language?

    @State private var targetText: String?
    @State private var configuration: TranslationSession.Configuration?

    var body: some View {
        VStack {
            Text(targetText ?? sourceText)
            Button("Translate") {
                guard configuration != nil else {
                    configuration = TranslationSession.Configuration(
                        source: sourceLanguage,
                        target: targetLanguage)
                    return
                }
                self.configuration.invalidate()
            }
        }
        .translationTask(configuration) { session in
            do {
                let response = try await session.translate(sourceText)
                targetText = response.targetText
            } catch {
                // Handle error.
            }
        }
    }
}
```

## Topics

### Creating a configuration

- [init(source:target:)](configuration/init%28source_target_%29.md): Creates a configuration from a source and target language.
- [init(source:target:preferredStrategy:)](configuration/init%28source_target_preferredstrategy_%29.md): Creates a configuration from a source and target language.

### Specifying translation languages

- [source](configuration/source.md): The language to translate content from.
- [target](configuration/target.md): The language to translate content into.

### Configuring translation behavior

- [preferredStrategy](configuration/preferredstrategy.md): The translation approach for this configuration.

### Updating the translation

- [invalidate()](configuration/invalidate%28%29.md): Invalidate the current translation session and re-run it with new content.

### Comparing configurations

- [version](configuration/version.md): A value the equals function uses to represent change in the configuration instance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Preparing for translation

- [prepareTranslation()](preparetranslation%28%29.md): Asks for permission to download translation languages without doing any translations.
