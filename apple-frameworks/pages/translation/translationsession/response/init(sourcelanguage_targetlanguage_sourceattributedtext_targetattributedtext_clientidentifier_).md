> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/response/init(sourcelanguage:targetlanguage:sourceattributedtext:targetattributedtext:clientidentifier:)](https://developer.apple.com/documentation/translation/translationsession/response/init(sourcelanguage:targetlanguage:sourceattributedtext:targetattributedtext:clientidentifier:))

# init(sourceLanguage:targetLanguage:sourceAttributedText:targetAttributedText:clientIdentifier:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+

Creates an instance of a translation response with formatted text.

## Declaration

```swift
init(sourceLanguage: Locale.Language, targetLanguage: Locale.Language, sourceAttributedText: AttributedString, targetAttributedText: AttributedString, clientIdentifier: String? = nil)
```

<a id="discussion"></a>

## Discussion

You don’t normally use this initializer directly. Instead, let the translation functions create instances of this type for you. Use this initializer when you want to create sample response for a test, for example in a SwiftUI preview.

## See Also

### Initializing a response

- [init(sourceLanguage:targetLanguage:sourceText:targetText:clientIdentifier:)](init%28sourcelanguage_targetlanguage_sourcetext_targettext_clientidentifier_%29.md): Creates an instance of a translation response.
