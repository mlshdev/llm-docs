> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbartitle(_:displaymode:)](https://developer.apple.com/documentation/swiftui/view/navigationbartitle(_:displaymode:))

# navigationBarTitle(\_:displayMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sets the title and display mode in the navigation bar for this view.

> Use [navigationTitle(\_:)](https://developer.apple.com/documentation/swiftui/view/navigationtitle%28_:%29-5di1u) with [navigationBarTitleDisplayMode(\_:)](navigationbartitledisplaymode%28__%29.md).

## Declaration

```swift
nonisolated func navigationBarTitle(_ title: Text, displayMode: NavigationBarItem.TitleDisplayMode) -> some View

```

## Parameters

- `title`: A title for this view to display in the navigation bar.
- `displayMode`: The style to use for displaying the navigation bar title.

<a id="discussion"></a>

## Discussion

Use `navigationBarTitle(_:displayMode:)` to set the title of the navigation bar for this view and specify a display mode for the title from one of the [NavigationBarItem.TitleDisplayMode](../navigationbaritem/titledisplaymode.md) styles. This modifier only takes effect when this view is inside of and visible within a [NavigationView](../navigationview.md).

In the example below, text for the navigation bar title is provided using a [Text](../text.md) view. The navigation bar title’s [NavigationBarItem.TitleDisplayMode](../navigationbaritem/titledisplaymode.md) is set to `.inline` which places the navigation bar title in the bounds of the navigation bar.

```swift
struct FlavorView: View {
   let items = ["Chocolate", "Vanilla", "Strawberry", "Mint Chip",
                "Pistachio"]
   var body: some View {
        NavigationView {
            List(items, id: \.self) {
                Text($0)
            }
            .navigationBarTitle(Text("Today's Flavors", displayMode: .inline))
        }
    }
}
```

## See Also

### Auxiliary view modifiers

- [navigationBarTitle(\_:)](navigationbartitle%28__%29.md): Deprecated. Sets the title in the navigation bar for this view.
- [navigationBarItems(leading:)](navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(trailing:)](navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [navigationBarHidden(\_:)](navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.
