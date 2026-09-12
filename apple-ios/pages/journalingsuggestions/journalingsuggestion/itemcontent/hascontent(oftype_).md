> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/itemcontent/hascontent(oftype:)](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/itemcontent/hascontent(oftype:))

# hasContent(ofType:)

**Framework:** Journaling Suggestions  
**Kind:** Instance Method  
**Availability:** iOS 17.2+

Checks if the suggestion contains information for the given type.

## Declaration

```swift
func hasContent<Content>(ofType content: Content.Type) -> Bool where Content : JournalingSuggestionAsset
```

## Parameters

- `content`: The type of information to check for.

<a id="return-value"></a>

## Return Value

`true`, if the suggestion contains information for the given type; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The framework templates this method, where `Content` is [JournalingSuggestionAsset](../../journalingsuggestionasset.md), because the `content` argument is a `Type` rather than an enumeration case, or other primitive.

## See Also

### Accessing suggestion data by type

- [content(forType:)](content%28fortype_%29.md): Retrieves a suggestion’s contents by returning a structure specific to the given content type.
