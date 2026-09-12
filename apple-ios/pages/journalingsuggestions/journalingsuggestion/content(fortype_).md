> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/content(fortype:)](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/content(fortype:))

# content(forType:)

**Framework:** Journaling Suggestions  
**Kind:** Instance Method  
**Availability:** iOS 17.2+

Searches a suggestion’s items for information of the given type.

## Declaration

```swift
func content<Content>(forType content: Content.Type) async -> [Content] where Content : JournalingSuggestionAsset
```

## Parameters

- `content`: A type that conforms to the [JournalingSuggestionAsset](../journalingsuggestionasset.md) protocol.

<a id="return-value"></a>

## Return Value

An array that contains elements of the requested type, if they exist in the suggestion.

<a id="discussion"></a>

## Discussion

The framework templates this method, where `Content` is [JournalingSuggestionAsset](../journalingsuggestionasset.md), because the `content` argument is a `Type` rather than an enumeration case, or other primitive.

> **Throws**

> An error if the journaling suggestions picker encounters an unexpected issue.

## See Also

### Accessing suggestion data by type

- [items](items.md): The individual items that compose the suggestion’s content.
- [JournalingSuggestion.ItemContent](itemcontent.md): A container for the information about a specific suggestion.
