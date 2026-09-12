> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchable(text:placement:prompt:)](https://developer.apple.com/documentation/swiftui/view/searchable(text:placement:prompt:))

# searchable(text:placement:prompt:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Marks this view as searchable, which configures the display of a search field.

## Declaration

```swift
@export(implementation) nonisolated func searchable(text: Binding<String>, placement: SearchFieldPlacement = .automatic, prompt: LocalizedStringResource) -> some View

```

## Parameters

- `text`: The text to display and edit in the search field.
- `placement`: The preferred placement of the search field within the containing view hierarchy.
- `prompt`: Text resource for the localized prompt of the search field which provides users with guidance on what to search for.

## Mentioned In

- [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md)
- [Managing search interface activation](../managing-search-interface-activation.md)
- [Suggesting search terms](../suggesting-search-terms.md)

<a id="discussion"></a>

## Discussion

For more information about using searchable modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).

## See Also

### Searching your app’s data model

- [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md): Present an interface that people can use to search for content in your app.
- [Performing a search operation](../performing-a-search-operation.md): Update search results based on search text and optional tokens that you store.
- [searchable(text:tokens:placement:prompt:token:)](searchable%28text_tokens_placement_prompt_token_%29.md): Marks this view as searchable with text and tokens.
- [searchable(text:editableTokens:placement:prompt:token:)](searchable%28text_editabletokens_placement_prompt_token_%29.md): Marks this view as searchable, which configures the display of a search field.
- [SearchFieldPlacement](../searchfieldplacement.md): The placement of a search field in a view hierarchy.
