> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/menustyle(_:)](https://developer.apple.com/documentation/swiftui/view/menustyle(_:))

# menuStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+ · visionOS 1.0+

Sets the style for menus within this view.

## Declaration

```swift
nonisolated func menuStyle<S>(_ style: S) -> some View where S : MenuStyle

```

<a id="discussion"></a>

## Discussion

To set a specific style for all menu instances within a view, use the `menuStyle(_:)` modifier:

```swift
Menu("PDF") {
    Button("Open in Preview", action: openInPreview)
    Button("Save as PDF", action: saveAsPDF)
}
.menuStyle(ButtonMenuStyle())
```

## See Also

### Creating a menu

- [Populating SwiftUI menus with adaptive controls](../populating-swiftui-menus-with-adaptive-controls.md): Improve your app by populating menus with controls and organizing your content intuitively.
- [Menu](../menu.md): A control for presenting a menu of actions.
