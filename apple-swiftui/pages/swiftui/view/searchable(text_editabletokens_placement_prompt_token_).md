> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchable(text:editabletokens:placement:prompt:token:)](https://developer.apple.com/documentation/swiftui/view/searchable(text:editabletokens:placement:prompt:token:))

# searchable(text:editableTokens:placement:prompt:token:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Marks this view as searchable, which configures the display of a search field.

## Declaration

```swift
@export(implementation) nonisolated func searchable<C>(text: Binding<String>, editableTokens: Binding<C>, placement: SearchFieldPlacement = .automatic, prompt: LocalizedStringResource, @ContentBuilder token: @escaping (Binding<C.Element>) -> some View) -> some View where C : RandomAccessCollection, C : RangeReplaceableCollection, C.Element : Identifiable

```

## Parameters

- `text`: The text to display and edit in the search field.
- `editableTokens`: A collection of tokens to display and edit in the search field.
- `placement`: The preferred placement of the search field within the containing view hierarchy.
- `prompt`: Text resource for the localized prompt of the search field which provides users with guidance on what to search for.
- `token`: A content builder that creates a view given an element in tokens.

<a id="discussion"></a>

## Discussion

For more information about using searchable modifiers, see [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md).

## See Also

### Searching your app’s data model

- [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md): Present an interface that people can use to search for content in your app.
- [Performing a search operation](../performing-a-search-operation.md): Update search results based on search text and optional tokens that you store.
- [searchable(text:placement:prompt:)](searchable%28text_placement_prompt_%29.md): Marks this view as searchable, which configures the display of a search field.
- [searchable(text:tokens:placement:prompt:token:)](searchable%28text_tokens_placement_prompt_token_%29.md): Marks this view as searchable with text and tokens.
- [SearchFieldPlacement](../searchfieldplacement.md): The placement of a search field in a view hierarchy.
