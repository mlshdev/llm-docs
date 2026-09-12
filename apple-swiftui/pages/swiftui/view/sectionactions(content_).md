> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/sectionactions(content:)](https://developer.apple.com/documentation/swiftui/view/sectionactions(content:))

# sectionActions(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Adds custom actions to a section.

## Declaration

```swift
nonisolated func sectionActions<Content>(@ContentBuilder content: () -> Content) -> some View where Content : View

```

<a id="discussion"></a>

## Discussion

On iOS, the actions are displayed as items after the content of the section. On macOS, the actions are displayed when a user hovers over the section.

The following example adds an ‘Add’ button to the ‘Categories’ section.

```swift
List {
    Label("Home", systemImage: "house")
    Label("Alerts", systemImage: "bell")

    Section("Categories") {
        Label("Climate", systemImage: "fan")
        Label("Lights", systemImage: "lightbulb")
    }
    .sectionActions {
        Button("Add Category", systemImage: "plus") { }
    }
}
```

## See Also

### Configuring a tab

- [TabPlacement](../tabplacement.md): A place that a tab can appear.
- [TabContentBuilder](../tabcontentbuilder.md): A result builder that constructs tabs for a tab view that supports programmatic selection. This builder requires that all tabs in the tab view have the same selection type.
- [TabContent](../tabcontent.md): A type that provides content for programmatically selectable tabs in a tab view.
- [AnyTabContent](../anytabcontent.md): Type erased tab content.
