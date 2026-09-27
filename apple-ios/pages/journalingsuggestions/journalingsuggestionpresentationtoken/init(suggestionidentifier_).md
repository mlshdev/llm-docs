> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionpresentationtoken/init(suggestionidentifier:)

# init(suggestionIdentifier:)

**Framework:** Journaling Suggestions  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a token used to modify the content of JournalingSuggestionsPicker presentation.

## Declaration

```swift
init(suggestionIdentifier: UUID?)
```

## Parameters

- `suggestionIdentifier`: The identifier of the suggestion that the system could highlight in the picker.
