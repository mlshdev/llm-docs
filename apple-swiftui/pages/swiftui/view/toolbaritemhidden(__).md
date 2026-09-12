> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbaritemhidden(_:)](https://developer.apple.com/documentation/swiftui/view/toolbaritemhidden(_:))

# toolbarItemHidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Hides an individual view within a control group toolbar item.

## Declaration

```swift
nonisolated func toolbarItemHidden(_ hidden: Bool = true) -> some View

```

## Parameters

- `hidden`: Whether the view in a control group toolbar item is hidden.

<a id="discussion"></a>

## Discussion

Use this modifier to hide individual views of a `ControlGroup` without hiding the entire group. On macOS and iOS, hidden items will be displayed during user customization.

The following example displays a collaboration button in a group when there is an active collaboration session.

```swift
struct ContentView {
    @State private var inCollaboration = false

    var body: some View {
        BrowserView()
            .toolbar(id: "browserToolbar") {
                ToolbarItem(id: "share") {
                    ControlGroup {
                        ShareButton()
                        CollaborationButton()
                            .toolbarItemHidden(!inCollaboration)
                    }
                }
            }
    }
}
```

## See Also

### Populating a customizable toolbar

- [toolbar(id:content:)](toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [CustomizableToolbarContent](../customizabletoolbarcontent.md): Conforming types represent items that can be placed in various locations in a customizable toolbar.
- [ToolbarCustomizationBehavior](../toolbarcustomizationbehavior.md): The customization behavior of customizable toolbar content.
- [ToolbarCustomizationOptions](../toolbarcustomizationoptions.md): Options that influence the default customization behavior of customizable toolbar content.
- [SearchToolbarBehavior](../searchtoolbarbehavior.md): The behavior of a search field in a toolbar.
