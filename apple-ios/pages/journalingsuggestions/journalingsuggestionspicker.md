> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionspicker](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionspicker)

# JournalingSuggestionsPicker

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 17.2+

A view that lists different types of recent events in a person’s life.

## Declaration

```swift
@MainActor @preconcurrency struct JournalingSuggestionsPicker<Label> where Label : View
```

## Mentioned In

- [Presenting the suggestions picker and processing a selection](presenting-the-suggestions-picker-and-processing-a-selection.md)
- [Receiving journaling suggestions system notifications](receiving-journaling-suggestions-from-system-notifications.md)

<a id="overview"></a>

## Overview

This interface displays several grids of content that layout visual mementos, each representing unique, personal events that occur in a person’s life. It enables a person to reflect and choose a particular event as a topic for derivative work. For example, a workout can serve as the beginnings of a new journal entry or illustration.

The first time the picker appears, a modal sheet introduces the concept of journaling suggestions. After a person selects a suggestion in the picker, the system shares only the information associated with the chosen suggestion with your app.

For more information, see [Presenting the suggestions picker and processing a selection](presenting-the-suggestions-picker-and-processing-a-selection.md).

## Topics

### Creating a suggestions picker

- [init(label:onCompletion:)](journalingsuggestionspicker/init%28label_oncompletion_%29.md): Creates a suggestions picker within the given view.
- [init(\_:onCompletion:)](journalingsuggestionspicker/init%28__oncompletion_%29-7uxov.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given localized string key.
- [init(\_:onCompletion:)](journalingsuggestionspicker/init%28__oncompletion_%29-4e82p.md): Conforms when `Label` is `Text`. Creates a suggestions picker with button text defined by the given string.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Implementation

- [JournalingSuggestion](journalingsuggestion.md): High-level information about a suggestion that a person chooses in the journaling suggestions picker.
- [JournalingSuggestionAsset](journalingsuggestionasset.md): An interface for the content that the suggestions picker presents.
