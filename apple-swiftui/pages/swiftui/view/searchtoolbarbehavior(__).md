> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/searchtoolbarbehavior(_:)](https://developer.apple.com/documentation/swiftui/view/searchtoolbarbehavior(_:))

# searchToolbarBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configures the behavior for search in the toolbar.

## Declaration

```swift
nonisolated func searchToolbarBehavior(_ behavior: SearchToolbarBehavior) -> some View

```

<a id="discussion"></a>

## Discussion

This modifier can be used to change the default behavior of a search field that appears in the toolbar. Place this modifier after the [searchable(text:isPresented:placement:prompt:)](searchable%28text_ispresented_placement_prompt_%29.md) modifier that renders search in the toolbar.

On iPhone, the search field in the bottom toolbar can be configured to appear as a button-like control when inactive:

```swift
@State private var searchText = ""

NavigationStack {
    RecipeList()
        .searchable($searchText)
        .searchToolbarBehavior(.minimized)
}
```

## See Also

### Displaying a search interface

- [searchable(text:placement:prompt:)](searchable%28text_placement_prompt_%29.md): Marks this view as searchable, which configures the display of a search field.
- [searchable(text:isPresented:placement:prompt:)](searchable%28text_ispresented_placement_prompt_%29.md): Marks this view as searchable with programmatic presentation of the search field.
- [searchPresentationToolbarBehavior(\_:)](searchpresentationtoolbarbehavior%28__%29.md): Configures the search toolbar presentation behavior for any searchable modifiers within this view.
- [searchSelection(\_:)](searchselection%28__%29.md): Binds the selection of the search field associated with the nearest searchable modifier to the given [TextSelection](../textselection.md) value.
