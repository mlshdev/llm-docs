> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/translationattributes/skipstranslation](https://developer.apple.com/documentation/foundation/attributescopes/translationattributes/skipstranslation)

# skipsTranslation

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An attribute that marks portions of an attributed string to be excluded from translation.

## Declaration

```swift
let skipsTranslation: AttributeScopes.TranslationAttributes.SkipTranslationAttribute
```

<a id="discussion"></a>

## Discussion

Use this to exclude specific text ranges within an [AttributedString](../../attributedstring.md) from translation, such as proper nouns, brand names, technical terms, or other content that should remain unchanged across different languages.

When translating formatted text, you can mark specific ranges to skip translation:

```swift
var text = AttributedString("Welcome to Apple Park")
let range = text.range(of: "Apple Park")!
text[range].skipsTranslation = true
```

When translated the string, “Welcome to” changes to the target language, but “Apple Park” remains unchanged.

## See Also

### Handling translation behavior

- [AttributeScopes.TranslationAttributes.SkipTranslationAttribute](skiptranslationattribute.md): The attribute key for skipping translation.
