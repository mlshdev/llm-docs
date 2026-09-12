> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/popover(ispresented:attachmentanchor:arrowedge:content:)](https://developer.apple.com/documentation/swiftui/tabcontent/popover(ispresented:attachmentanchor:arrowedge:content:))

# popover(isPresented:attachmentAnchor:arrowEdge:content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Presents a popover when a given condition is true.

## Declaration

```swift
nonisolated func popover<Content>(isPresented: Binding<Bool>, attachmentAnchor: PopoverAttachmentAnchor = .rect(.bounds), arrowEdge: Edge? = nil, @ContentBuilder content: @escaping () -> Content) -> some TabContent<Self.TabValue> where Content : View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether to present the popover content that you return from the modifier’s `content` closure.
- `attachmentAnchor`: The positioning anchor that defines the attachment point of the popover. The default is [bounds](../anchor/source/bounds.md).
- `arrowEdge`: The edge of the `attachmentAnchor` that defines the location of the popover’s arrow in macOS. The default is [Edge.top](../edge/top.md).
- `content`: A closure returning the content of the popover.

<a id="discussion"></a>

## Discussion

Use this method to show a popover whose contents are a SwiftUI view that you provide when a bound Boolean variable is `true`. In the example below, a popover displays whenever the user toggles the `isShowingPopover` state variable by pressing the “Show Popover” button:

```swift
struct PopoverExample: View {
    @State private var isShowingPopover = false

    var body: some View {
        TabView {
            Tab("Popover Anchor", systemImage: "arrow.down") {
                Button("Show Popover") {
                    self.isShowingPopover = true
                }
            }
            .popover(isPresented: $isShowingPopover) {
                Text("Popover Content")
                    .padding()
            }
        }
    }
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
- [popover(item:attachmentAnchor:arrowEdge:content:)](popover%28item_attachmentanchor_arrowedge_content_%29.md): Presents a popover using the given item as a data source for the popover’s content.
- [sectionActions(content:)](sectionactions%28content_%29.md): Adds custom actions to a tab section.
- [springLoadingBehavior(\_:)](springloadingbehavior%28__%29.md): Sets the spring loading behavior for the tab.
