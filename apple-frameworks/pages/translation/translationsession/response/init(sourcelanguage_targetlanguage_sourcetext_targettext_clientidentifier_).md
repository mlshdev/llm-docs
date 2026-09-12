> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/response/init(sourcelanguage:targetlanguage:sourcetext:targettext:clientidentifier:)](https://developer.apple.com/documentation/translation/translationsession/response/init(sourcelanguage:targetlanguage:sourcetext:targettext:clientidentifier:))

# init(sourceLanguage:targetLanguage:sourceText:targetText:clientIdentifier:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Creates an instance of a translation response.

## Declaration

```swift
init(sourceLanguage: Locale.Language, targetLanguage: Locale.Language, sourceText: String, targetText: String, clientIdentifier: String? = nil)
```

<a id="discussion"></a>

## Discussion

You don’t normally use this initializer directly. Instead, let the translation functions create instances of this type for you. Use this initializer when you want to create sample response for a test, for example in a SwiftUI preview.

## See Also

### Initializing a response

- [init(sourceLanguage:targetLanguage:sourceAttributedText:targetAttributedText:clientIdentifier:)](init%28sourcelanguage_targetlanguage_sourceattributedtext_targetattributedtext_clientidentifier_%29.md): Creates an instance of a translation response with formatted text.
