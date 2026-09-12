> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/popover(item:attachmentanchor:arrowedge:content:)](https://developer.apple.com/documentation/swiftui/tabcontent/popover(item:attachmentanchor:arrowedge:content:))

# popover(item:attachmentAnchor:arrowEdge:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Presents a popover using the given item as a data source for the popover’s content.

## Declaration

```swift
nonisolated func popover<Item, Content>(item: Binding<Item?>, attachmentAnchor: PopoverAttachmentAnchor = .rect(.bounds), arrowEdge: Edge? = nil, @ContentBuilder content: @escaping (Item) -> Content) -> some TabContent<Self.TabValue> where Item : Identifiable, Content : View

```

## Parameters

- `item`: A binding to an optional source of truth for the popover. When `item` is non-`nil`, the system passes the contents to the modifier’s closure. You use this content to populate the fields of a popover that you create that the system displays to the user. If `item` changes, the system dismisses the currently presented popover and replaces it with a new popover using the same process.
- `attachmentAnchor`: The positioning anchor that defines the attachment point of the popover. The default is [bounds](../anchor/source/bounds.md).
- `arrowEdge`: The edge of the `attachmentAnchor` that defines the location of the popover’s arrow in macOS. The default is [Edge.top](../edge/top.md).
- `content`: A closure returning the content of the popover.

<a id="discussion"></a>

## Discussion

Use this method when you need to present a popover with content from a custom data source. The example below uses data in the `PopoverModel` structure to populate the view in the `content` closure that the popover displays to the user:

```swift
struct PopoverExample: View {
    @State private var popover: PopoverModel?

    var body: some View {
        TabView {
            Tab("Popover Anchor", systemImage: "arrow.down") {
                Button("Show Popover") {
                    popover = PopoverModel(message: "Custom Message")
                }
            }
            .popover(item: $popover) { detail in
                 Text("\(detail.message)")
                    .padding()
             }
        }
    }
}

struct PopoverModel: Identifiable {
    var id: String { message }
    let message: String
}
```

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
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
