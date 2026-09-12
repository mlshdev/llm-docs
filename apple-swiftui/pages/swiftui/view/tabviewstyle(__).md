> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tabviewstyle(_:)](https://developer.apple.com/documentation/swiftui/view/tabviewstyle(_:))

# tabViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the style for the tab view within the current environment.

## Declaration

```swift
nonisolated func tabViewStyle<S>(_ style: S) -> some View where S : TabViewStyle

```

## Parameters

- `style`: The style to apply to this tab view.

## See Also

### Presenting views in tabs

- [Enhancing your app’s content with tab navigation](../enhancing-your-app-content-with-tab-navigation.md): Keep your app content front and center while providing quick access to navigation using the tab bar.
- [TabView](../tabview.md): A view that switches between multiple child views using interactive user interface elements.
- [Tab](../tab.md): The content for a tab and the tab’s associated tab item in a tab view.
- [TabRole](../tabrole.md): A value that defines the purpose of the tab.
- [TabSection](../tabsection.md): A container that you can use to add hierarchy within a tab view.
