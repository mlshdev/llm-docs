> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation](https://developer.apple.com/documentation/translation)

# Translation

**Framework:** Translation  
**Kind:** Framework  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.4+

Translate text in your app from one language to another.

<a id="Overview"></a>

## Overview

Offer in-app translations with the Translation framework. You can use the built-in UI and let the system offer a translation to users on your behalf. Or you can use the framework to customize the translation experience.

![A conceptual image showing a translation.](https://developer.apple.com/images/com.apple.Translation/hero@2x.png)

To offer the built-in system translation experience, anchor the [translationPresentation(isPresented:text:attachmentAnchor:arrowEdge:replacementAction:)](https://developer.apple.com/documentation/swiftui/view/translationpresentation%28ispresented:text:attachmentanchor:arrowedge:replacementaction:%29) view modifier to the SwiftUI view containing the text to translate. Set `isPresented` to true when you want to the built-in system translation UI to appear. Pass the text to translate to the `text` parameter.

To customize the translation experience use one of the translation tasks such as [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29). These functions provides you with a  [TranslationSession](translation/translationsession.md) that you can use to translate strings of text one at a time, or in a batch. You can check language availability before offering a translation with the [LanguageAvailability](translation/languageavailability.md) class.

## Topics

### Essentials

- [Translating text within your app](translation/translating-text-within-your-app.md): Display simple system translations and create custom translation experiences.
- [translationPresentation(isPresented:text:attachmentAnchor:arrowEdge:replacementAction:)](https://developer.apple.com/documentation/swiftui/view/translationpresentation%28ispresented:text:attachmentanchor:arrowedge:replacementaction:%29): Presents a translation popover when a given condition is true.
- [translationTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28_:action:%29): Adds a task to perform before this view appears or when the translation configuration changes.
- [translationTask(source:target:action:)](https://developer.apple.com/documentation/swiftui/view/translationtask%28source:target:action:%29): Adds a task to perform before this view appears or when the specified source or target languages change.
- [TranslationSession](translation/translationsession.md): A class that performs translations between a pair of languages.

### Availability

- [LanguageAvailability](translation/languageavailability.md): A check for language support and status.

### Errors

- [TranslationError](translation/translationerror.md): Error codes describing why the framework can’t perform a translation.
