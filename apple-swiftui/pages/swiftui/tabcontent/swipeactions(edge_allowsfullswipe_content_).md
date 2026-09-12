> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/swipeactions(edge:allowsfullswipe:content:)](https://developer.apple.com/documentation/swiftui/tabcontent/swipeactions(edge:allowsfullswipe:content:))

# swipeActions(edge:allowsFullSwipe:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Adds custom swipe actions to a tab in a tab view.

## Declaration

```swift
nonisolated func swipeActions<T>(edge: HorizontalEdge = .trailing, allowsFullSwipe: Bool = true, @ContentBuilder content: () -> T) -> some TabContent<Self.TabValue> where T : View

```

## Parameters

- `edge`: The edge of the view to associate the swipe actions with. The default is [HorizontalEdge.trailing](../horizontaledge/trailing.md).
- `allowsFullSwipe`: A Boolean value that indicates whether a full swipe automatically performs the first action. The default is `true`.
- `content`: The content of the swipe actions.

<a id="discussion"></a>

## Discussion

Use this method to add swipe actions to a view that acts as a row in the tab sidebar. Indicate the [HorizontalEdge](../horizontaledge.md) where the swipe action originates, and define individual actions with [Button](../button.md) instances. For example, if you have a group of message categories, you can add an action to toggle a category as unread on a swipe from the leading edge, and actions to hide or flag categories on a trailing edge swipe:

```swift
TabView {
     TabSection("Messages") {
         ForEach(store.messageCategories) { category in
             Tab(category.title, image: category.image)
                 .swipeActions(edge: .leading) {
                     Button { store.toggleUnread(category) } label: {
                         if category.isUnread {
                             Label("Read", systemImage: "envelope.open")
                         } else {
                             Label("Unread", systemImage: "envelope.badge")
                         }
                     }
                 }
                 .swipeActions(edge: .trailing) {
                     Button(role: .destructive) {
                         store.hide(category)
                     } label: {
                         Label("Remove", systemImage: "trash")
                     }
                     Button { store.flag(category) } label: {
                         Label("Flag", systemImage: "flag")
                     }
                 }
             }
         }
     }
}
```

Actions appear in the order you list them, starting from the swipe’s originating edge. In the example above, the Delete action appears closest to the screen’s trailing edge.

For labels or images that appear in swipe actions, SwiftUI automatically applies the [fill](../symbolvariants/fill-swift.type.property.md) symbol variant, as shown above.

By default, the user can perform the first action for a given swipe direction with a full swipe. For the example above, the user can perform both the toggle unread and delete actions with full swipes. You can opt out of this behavior for an edge by setting the `allowsFullSwipe` parameter to `false`. For example, you can disable the full swipe on the leading edge:

```swift
.swipeActions(edge: .leading, allowsFullSwipe: false) {
    Button { store.toggleUnread(category) } label: {
        if category.isUnread {
            Label("Read", systemImage: "envelope.open")
        } else {
            Label("Unread", systemImage: "envelope.badge")
        }
    }
}
```

When you set a role for a button using one of the values from the [ButtonRole](../buttonrole.md) enumeration, SwiftUI styles the button according to its role. In the example above, the delete action appears in [red](../shapestyle/red.md) because it has the [destructive](../buttonrole/destructive.md) role. If you want to set a different color — for example, to match the overall theme of your app’s UI — add the [tint(\_:)](../view/tint%28__%29.md) modifier to the button:

```swift
.swipeActions(edge: .leading) {
    Button { store.toggleUnread(category) } label: {
        if category.isUnread {
            Label("Read", systemImage: "envelope.open")
        } else {
            Label("Unread", systemImage: "envelope.badge")
        }
    }
    .tint(.blue)
}
.swipeActions(edge: .trailing) {
    Button(role: .destructive) { store.hide(category) } label: {
        Label("Hide", systemImage: "trash")
    }
    Button { store.flag(category) } label: {
        Label("Flag", systemImage: "flag")
    }
    .tint(.orange)
}
```

The modifications in the code above make the toggle unread action [blue](../shapestyle/blue.md) and the flag action [orange](../shapestyle/orange.md):

Actions accumulate for a given edge if you call the modifier multiple times on the same tab.

## See Also

### Configuring tab content

- [badge(\_:)](badge%28__%29.md): Generates a badge for the tab from a localized string resource.
- [contextMenu(menuItems:)](contextmenu%28menuitems_%29.md): Adds a context menu to a tab.
- [customizationBehavior(\_:for:)](customizationbehavior%28__for_%29.md): Configures the customization behavior of customizable tab view content.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier for a tab to persist its state.
- [defaultSectionExpansion(\_:)](defaultsectionexpansion%28__%29.md): Sets the default expansion state for the section containing this tab when displayed in the sidebar.
- [TabSectionExpansion](../tabsectionexpansion.md): The default expansion state for a tab section in the sidebar.
- [defaultVisibility(\_:for:)](defaultvisibility%28__for_%29.md): Configures the default visibility of a tab in customizable contexts.
- [disabled(\_:)](disabled%28__%29.md): Controls whether users can interact with this tab.
- [draggable(\_:)](draggable%28__%29.md): Activates this tab as the source of a drag and drop operation. This tab can only be dragged when in the sidebar.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [help(\_:)](help%28__%29.md): Adds help text to a tab using a text view that you provide.
- [hidden(\_:)](hidden%28__%29.md): Hides the tab from the user.
- [popover(isPresented:attachmentAnchor:arrowEdge:content:)](popover%28ispresented_attachmentanchor_arrowedge_content_%29.md): Presents a popover when a given condition is true.
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
