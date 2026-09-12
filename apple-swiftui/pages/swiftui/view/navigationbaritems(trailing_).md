> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbaritems(trailing:)](https://developer.apple.com/documentation/swiftui/view/navigationbaritems(trailing:))

# navigationBarItems(trailing:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Configures the navigation bar items for this view.

> Use [toolbar(content:)](https://developer.apple.com/documentation/swiftui/view/toolbar%28content:%29-5w0tj) with [topBarTrailing](../toolbaritemplacement/topbartrailing.md) placement.

## Declaration

```swift
nonisolated func navigationBarItems<T>(trailing: T) -> some View where T : View

```

## Parameters

- `trailing`: A view shown on the trailing edge of the title.

<a id="discussion"></a>

## Discussion

Use `navigationBarItems(trailing:)` to add navigation bar items to the trailing edge of the navigation bar for this view. This modifier only takes effect when this view is inside of and visible within a [NavigationView](../navigationview.md).

The example below adds buttons to the trailing edge of the button area of the navigation view:

```swift
struct FlavorView: View {
    var body: some View {
        NavigationView {
            List {
                Text("Chocolate")
                Text("Vanilla")
                Text("Strawberry")
            }
            .navigationBarTitle(Text("Today‘s Flavors"))
            .navigationBarItems(trailing:
                HStack {
                    Button("Hours") {
                        print("Hours tapped!")
                    }

                    Button("Help") {
                        print("Help tapped!")
                    }
                }
            )
        }
    }
}
```

## See Also

### Auxiliary view modifiers

- [navigationBarTitle(\_:)](navigationbartitle%28__%29.md): Deprecated. Sets the title in the navigation bar for this view.
- [navigationBarTitle(\_:displayMode:)](navigationbartitle%28__displaymode_%29.md): Deprecated. Sets the title and display mode in the navigation bar for this view.
- [navigationBarItems(leading:)](navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarHidden(\_:)](navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.
