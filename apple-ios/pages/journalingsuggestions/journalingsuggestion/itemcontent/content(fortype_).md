> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/itemcontent/content(fortype:)](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/itemcontent/content(fortype:))

# content(forType:)

**Framework:** Journaling Suggestions  
**Kind:** Instance Method  
**Availability:** iOS 17.2+

Retrieves a suggestion’s contents by returning a structure specific to the given content type.

## Declaration

```swift
func content<Content>(forType content: Content.Type) async throws -> Content? where Content : JournalingSuggestionAsset
```

## Parameters

- `content`: A type conforming to [JournalingSuggestionAsset](../../journalingsuggestionasset.md) protocol.

<a id="return-value"></a>

## Return Value

An instance of the requested type, if it exists in the suggestion.

<a id="discussion"></a>

## Discussion

The framework templates this method, where `Content` is [JournalingSuggestionAsset](../../journalingsuggestionasset.md), because the `content` argument is a `Type` rather than an enumeration case, or other primitive.

> **Throws**

> An error if the journaling suggestions picker encounters an unexpected issue.

## See Also

### Accessing suggestion data by type

- [hasContent(ofType:)](hascontent%28oftype_%29.md): Checks if the suggestion contains information for the given type.
