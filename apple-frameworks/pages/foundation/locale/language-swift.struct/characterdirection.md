> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/characterdirection](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/characterdirection)

# characterDirection

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The ordering of characters within a line.

## Declaration

```swift
var characterDirection: Locale.LanguageDirection { get }
```

<a id="Discussion"></a>

## Discussion

For example, English uses left-to-right while Mongolian in the Mongolian script uses top-to-bottom.

## See Also

### Examining language properties

- [languageCode](languagecode.md): The language code that identifies the language.
- [Locale.LanguageCode](../languagecode-swift.struct.md): An alphabetical code associated with a language.
- [region](region.md): The region used with the language.
- [Locale.Region](../region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [script](script.md): The written script of the language.
- [Locale.Script](../script.md): The written script used with a given language.
- [Locale.LanguageDirection](../languagedirection.md): An alias for the standard set of language directions.
