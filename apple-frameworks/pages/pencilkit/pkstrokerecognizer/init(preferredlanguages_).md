> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pkstrokerecognizer/init(preferredlanguages:)

# init(preferredLanguages:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a recognizer with the specified preferred languages.

## Declaration

```swift
init(preferredLanguages: [Locale.Language]? = nil)
```

## Parameters

- `preferredLanguages`: A list of languages to recognize ordered by descending priority. Pass nil to use the system languages. The system languages may be used if no listed language is available for recognition.

<a id="discussion"></a>

## Discussion

Languages are respected on a best-effort basis. Factors such as feature support may affect which languages the recognizer uses.
