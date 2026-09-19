> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedlanguageorlocale/init(languagecode:debugdescription:metadata:)

# init(languageCode:debugDescription:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates information describing a language or locale the model doesn’t support.

## Declaration

```swift
init(languageCode: Locale.LanguageCode, debugDescription: String, metadata: [String : any Sendable] = [:])
```

## Parameters

- `languageCode`: The language code that the model doesn’t support.
- `debugDescription`: A debug description to help developers diagnose issues during development.
- `metadata`: Additional information about the failure, keyed by name.
