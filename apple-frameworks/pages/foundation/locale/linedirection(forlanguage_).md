> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/linedirection(forlanguage:)](https://developer.apple.com/documentation/foundation/locale/linedirection(forlanguage:))

# lineDirection(forLanguage:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 8.0+ (deprecated in 16.0) · macOS 10.10+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 9.0)

Returns the line direction for a specified language code.

> Use \`Locale.Language(identifier:).lineLayoutDirection\`

## Declaration

```swift
static func lineDirection(forLanguage isoLangCode: String) -> Locale.LanguageDirection
```

## See Also

### Getting line and character direction for a language

- [characterDirection(forLanguage:)](characterdirection%28forlanguage_%29.md): Deprecated. Returns the character direction for a specified language code.
- [Locale.LanguageDirection](languagedirection.md): An alias for the standard set of language directions.
- [NSLocale.LanguageDirection](../nslocale/languagedirection.md): The directions that a language may take across a page of text.
