> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbartitle(_:)](https://developer.apple.com/documentation/swiftui/view/navigationbartitle(_:))

# navigationBarTitle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets the title in the navigation bar for this view.

> Use [navigationTitle(\_:)](https://developer.apple.com/documentation/swiftui/view/navigationtitle%28_:%29-5di1u) instead.

## Declaration

```swift
nonisolated func navigationBarTitle(_ title: Text) -> some View

```

## Parameters

- `title`: A description of this view to display in the navigation bar.

<a id="discussion"></a>

## Discussion

Use `navigationBarTitle(_:)` to set the title of the navigation bar. This modifier only takes effect when this view is inside of and visible within a [NavigationView](../navigationview.md).

The example below shows setting the title of the navigation bar using a [Text](../text.md) view:

```swift
struct FlavorView: View {
    let items = ["Chocolate", "Vanilla", "Strawberry", "Mint Chip",
                 "Pistachio"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) {
                Text($0)
            }
            .navigationBarTitle(Text("Today's Flavors"))
        }
    }
}
```

![A screenshot showing the title of a navigation bar configured using a text view.](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-navigationBarTitle-Text@2x.png)

## See Also

### Auxiliary view modifiers

- [navigationBarTitle(\_:displayMode:)](navigationbartitle%28__displaymode_%29.md): Deprecated. Sets the title and display mode in the navigation bar for this view.
- [navigationBarItems(leading:)](navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(trailing:)](navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [navigationBarHidden(\_:)](navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.
