> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession](https://developer.apple.com/documentation/translation/translationsession)

# TranslationSession

**Framework:** Translation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

A class that performs translations between a pair of languages.

## Declaration

```swift
class TranslationSession
```

<a id="overview"></a>

## Overview

This class provides a flexible way for you to translate one or more lines of text at a time. There are two ways in which you can initialize a `TranslationSession`. One way you can obtain an instance of this class is by adding a `.translationTask()` to a SwiftUI view within your app. You can either add a [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29) or a [translationTask(source:target:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28source:target:action:%29) function to the SwiftUI view containing the content you want to translate, like a [Text](https://developer.apple.com/documentation/swiftui/text) view. After adding the task, the function passes you an instance of a translation session in its `action` closure. With this instance, you can use one or more of the translate functions to translate a single string or multiple strings of text.

Another way for contexts where there’s no UI, you can directly initialize the TranslationSession using [init(installedSource:target:)](translationsession/init%28installedsource_target_%29.md) to translate between languages. This initializer requires that you specify which source language you use and throws an error if the languages aren’t already installed on the person’s device.

The following example demonstrates how to translate a single string of text within a SwiftUI view:

```swift
struct TranslationExample: View {
    var sourceText: String
    var sourceLanguage: Locale.Language?
    var targetLanguage: Locale.Language?

    @State private var targetText: String?

    var body: some View {
        Text(targetText ?? sourceText)
            .translationTask(
                source: sourceLanguage,
                target: targetLanguage
            ) { session in
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

> **Note**

> All translations using the `TranslationSession` class are processed on the user’s device. Apple may collect API usage and performance metrics including the app bundle ID and the original and translated language, but this data does not include the original or translated content.

## Topics

### Initalizing a translation session

- [init(installedSource:target:)](translationsession/init%28installedsource_target_%29.md): Creates a translation session to translate between a given source and target language already installed on device.
- [init(installedSource:target:preferredStrategy:)](translationsession/init%28installedsource_target_preferredstrategy_%29.md): Creates a translation session to translate between a given source and target language already installed on device.

### Preparing for translation

- [TranslationSession.Configuration](translationsession/configuration.md): A type containing the information to use when performing a translation.
- [prepareTranslation()](translationsession/preparetranslation%28%29.md): Asks for permission to download translation languages without doing any translations.

### Getting the language configuration

- [sourceLanguage](translationsession/sourcelanguage.md): The input language to translate from.
- [targetLanguage](translationsession/targetlanguage.md): The output language to translate into.

### Translating the text

- [translate(\_:)](translationsession/translate%28__%29-59zi2.md): Translates a formatted string of text, preserving formatting in the translation.
- [translate(\_:)](translationsession/translate%28__%29-4m20l.md): Translates a single string of text.
- [translate(batch:)](translationsession/translate%28batch_%29.md): Translates multiple strings of text of the same language, returning a sequence of responses as they’re available.
- [translations(from:)](translationsession/translations%28from_%29.md): Translates multiple strings of text of the same language, returning the results all at once when complete.
- [TranslationSession.Request](translationsession/request.md): A translation request containing a single item of text to translate.
- [TranslationSession.Response](translationsession/response.md): The response to a translation request.
- [TranslationSession.BatchResponse](translationsession/batchresponse.md): A type that provides asynchronous access to translation responses.

### Accessing the session properties

- [canRequestDownloads](translationsession/canrequestdownloads.md): A boolean value that indicates whether a translation session can request language downloads.
- [isReady](translationsession/isready.md): A boolean value that indicates whether the system has installed the source and target languages of the session and is ready to begin translation.
- [preferredStrategy](translationsession/preferredstrategy.md): The preferred translation strategy configured for the session.

### Canceling a translation session

- [cancel()](translationsession/cancel%28%29.md): Attempts to stop all ongoing work for the translation session.

### Configuring translation strategy

- [TranslationSession.Strategy](translationsession/strategy.md): The preferred model to handle translations in your app.

## See Also

### Essentials

- [Translating text within your app](translating-text-within-your-app.md): Display simple system translations and create custom translation experiences.
- [translationPresentation(isPresented:text:attachmentAnchor:arrowEdge:replacementAction:)](https://developer.apple.com/documentation/swiftui/view/translationpresentation%28ispresented:text:attachmentanchor:arrowedge:replacementaction:%29): Presents a translation popover when a given condition is true.
- [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29): Adds a task to perform before this view appears or when the translation configuration changes.
- [translationTask(source:target:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28source:target:action:%29): Adds a task to perform before this view appears or when the specified source or target languages change.
