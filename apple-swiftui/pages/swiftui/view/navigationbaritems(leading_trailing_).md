> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbaritems(leading:trailing:)](https://developer.apple.com/documentation/swiftui/view/navigationbaritems(leading:trailing:))

# navigationBarItems(leading:trailing:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sets the navigation bar items for this view.

> Use [toolbar(content:)](https://developer.apple.com/documentation/swiftui/view/toolbar%28content:%29-5w0tj) with [navigationBarLeading](../toolbaritemplacement/navigationbarleading.md) or [navigationBarTrailing](../toolbaritemplacement/navigationbartrailing.md) placement.

## Declaration

```swift
nonisolated func navigationBarItems<L, T>(leading: L, trailing: T) -> some View where L : View, T : View

```

## Parameters

- `leading`: A view that appears on the leading edge of the title.
- `trailing`: A view that appears on the trailing edge of the title.

<a id="discussion"></a>

## Discussion

Use `navigationBarItems(leading:trailing:)` to add navigation bar items to the leading and trailing edges of the navigation bar for this view.

This modifier only takes effect when this view is inside of and visible within a [NavigationView](../navigationview.md).

On iOS 14 and later, the leading item supplements a visible back button, instead of replacing it, by default. To hide the back button, use [navigationBarBackButtonHidden(\_:)](navigationbarbackbuttonhidden%28__%29.md).

The example below adds buttons to the leading and trailing edges of the button area of the navigation view:

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
            .navigationBarItems(leading:
                HStack {
                    Button("Hours") {
                        print("Hours tapped!")
                    }
                }, trailing:
                HStack {
                    Button("Favorites") {
                        print("Favorites tapped!")
                    }

                    Button("Specials") {
                        print("Specials tapped!")
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
- [navigationBarItems(trailing:)](navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [navigationBarHidden(\_:)](navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.
