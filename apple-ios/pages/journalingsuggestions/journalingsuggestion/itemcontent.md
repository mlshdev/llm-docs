> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/itemcontent](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/itemcontent)

# JournalingSuggestion.ItemContent

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 17.2+

A container for the information about a specific suggestion.

## Declaration

```swift
struct ItemContent
```

## Mentioned In

- [Presenting the suggestions picker and processing a selection](../presenting-the-suggestions-picker-and-processing-a-selection.md)

<a id="overview"></a>

## Overview

When a person selects an event in the [JournalingSuggestionsPicker](../journalingsuggestionspicker.md), the system invokes the `onCompletion` handler that your app declares for the picker and passes in a [JournalingSuggestion](../journalingsuggestion.md) instance. The journaling suggestion contains an array of structures of this type in its [items](items.md) property. Each instance of this structure contains one or more concrete instances of [JournalingSuggestionAsset](../journalingsuggestionasset.md) that represent the selection in the picker.

## Topics

### Identifying item contents

- [representations](itemcontent/representations.md): An array of content types that a particular suggestion includes.

### Accessing suggestion data by type

- [content(forType:)](itemcontent/content%28fortype_%29.md): Retrieves a suggestion’s contents by returning a structure specific to the given content type.
- [hasContent(ofType:)](itemcontent/hascontent%28oftype_%29.md): Checks if the suggestion contains information for the given type.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Accessing suggestion data by type

- [items](items.md): The individual items that compose the suggestion’s content.
- [content(forType:)](content%28fortype_%29.md): Searches a suggestion’s items for information of the given type.
