> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionpresentationtoken](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionpresentationtoken)

# JournalingSuggestionPresentationToken

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 26.0+

A container for a Journaling Suggestion identifier.

## Declaration

```swift
struct JournalingSuggestionPresentationToken
```

## Mentioned In

- [Receiving journaling suggestions system notifications](receiving-journaling-suggestions-from-system-notifications.md)

<a id="overview"></a>

## Overview

When your app receives a Journaling Suggestion notification, the system launches your app and provides an ID that refers to a specific suggestion from the notification.

Create an instance of this class and display a [JournalingSuggestionsPicker](journalingsuggestionspicker.md) by passing the token to the `JournalingSuggestionsPicker/journalingSuggestionsPicker(isPresented:onCompletion:)` view modifier, which enables the picker to preload its contents with the notified suggestion.

## Topics

### Initializing a presentation token

- [init(suggestionIdentifier:)](journalingsuggestionpresentationtoken/init%28suggestionidentifier_%29.md): Creates a token used to modify the content of JournalingSuggestionsPicker presentation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Notifications

- [Receiving journaling suggestions system notifications](receiving-journaling-suggestions-from-system-notifications.md): Register your app to receive journaling suggestions when a person taps a system notification.
- [JournalingSuggestionsConfiguration](journalingsuggestionsconfiguration.md): The configuration for Journaling Suggestion notifications.
