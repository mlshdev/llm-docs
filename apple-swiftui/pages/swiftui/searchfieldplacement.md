> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement](https://developer.apple.com/documentation/swiftui/searchfieldplacement)

# SearchFieldPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The placement of a search field in a view hierarchy.

## Declaration

```swift
struct SearchFieldPlacement
```

## Mentioned In

- [Adding a search interface to your app](adding-a-search-interface-to-your-app.md)

<a id="overview"></a>

## Overview

You can give a preferred placement to any of the searchable modifiers, like [searchable(text:placement:prompt:)](view/searchable%28text_placement_prompt_%29.md):

```swift
var body: some View {
    NavigationView {
        PrimaryView()
        SecondaryView()
        Text("Select a primary and secondary item")
    }
    .searchable(text: $text, placement: .sidebar)
}
```

Depending on the containing view hierachy, SwiftUI might not be able to fulfill your request.

## Topics

### Getting a search field placement

- [automatic](searchfieldplacement/automatic.md): SwiftUI places the search field automatically.
- [navigationBarDrawer](searchfieldplacement/navigationbardrawer.md): The search field appears in the navigation bar.
- [navigationBarDrawer(displayMode:)](searchfieldplacement/navigationbardrawer%28displaymode_%29.md): The search field appears in the navigation bar using the specified display mode.
- [sidebar](searchfieldplacement/sidebar.md): The search field appears in the sidebar of a navigation view.
- [toolbar](searchfieldplacement/toolbar.md): The search field appears in the toolbar.

### Supporting types

- [SearchFieldPlacement.NavigationBarDrawerDisplayMode](searchfieldplacement/navigationbardrawerdisplaymode.md): A mode that determines when to display a search field that appears in a navigation bar.

### Type Properties

- [toolbarPrincipal](searchfieldplacement/toolbarprincipal.md): The search field appears in the principal section of the toolbar.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Searching your app’s data model

- [Adding a search interface to your app](adding-a-search-interface-to-your-app.md): Present an interface that people can use to search for content in your app.
- [Performing a search operation](performing-a-search-operation.md): Update search results based on search text and optional tokens that you store.
- [searchable(text:placement:prompt:)](view/searchable%28text_placement_prompt_%29.md): Marks this view as searchable, which configures the display of a search field.
- [searchable(text:tokens:placement:prompt:token:)](view/searchable%28text_tokens_placement_prompt_token_%29.md): Marks this view as searchable with text and tokens.
- [searchable(text:editableTokens:placement:prompt:token:)](view/searchable%28text_editabletokens_placement_prompt_token_%29.md): Marks this view as searchable, which configures the display of a search field.
