> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/configuration/init(source:target:)](https://developer.apple.com/documentation/translation/translationsession/configuration/init(source:target:))

# init(source:target:)

**Framework:** Translation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 26.0+ · macOS 15.0+

Creates a configuration from a source and target language.

## Declaration

```swift
init(source: Locale.Language? = nil, target: Locale.Language? = nil)
```

## Parameters

- `source`: The language the source content is in. If `nil` the session tries to identify the language, and prompt the person to pick the source language if it’s unclear. All text translated with this session should be in the same source language.
- `target`: The language to translate content into. If `nil` the session tries to pick a target language according to the person’s [preferredLanguages](../../../foundation/locale/preferredlanguages.md), and the `source`.

<a id="discussion"></a>

## Discussion

When creating a translation session configuration it’s best to use `Locale.Language` values that return from [supportedLanguages](../../languageavailability/supportedlanguages.md). When you pass other `Locale.Language` values, the framework tries to match to one of these supported languages.

## See Also

### Creating a configuration

- [init(source:target:preferredStrategy:)](init%28source_target_preferredstrategy_%29.md): Creates a configuration from a source and target language.
