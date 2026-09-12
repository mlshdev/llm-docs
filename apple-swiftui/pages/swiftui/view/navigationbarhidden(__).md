> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationbarhidden(_:)](https://developer.apple.com/documentation/swiftui/view/navigationbarhidden(_:))

# navigationBarHidden(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Hides the navigation bar for this view.

> Use [toolbar(\_:for:)](toolbar%28__for_%29.md) with the [Visibility.hidden](../visibility/hidden.md) visibility and the [navigationBar](../toolbarplacement/navigationbar.md) placement instead.

## Declaration

```swift
nonisolated func navigationBarHidden(_ hidden: Bool) -> some View

```

## Parameters

- `hidden`: A Boolean value that indicates whether to hide the navigation bar.

<a id="discussion"></a>

## Discussion

Use this method to hide the navigation bar. This modifier only takes effect when the modified view is inside of and visible within a [NavigationView](../navigationview.md).

## See Also

### Auxiliary view modifiers

- [navigationBarTitle(\_:)](navigationbartitle%28__%29.md): Deprecated. Sets the title in the navigation bar for this view.
- [navigationBarTitle(\_:displayMode:)](navigationbartitle%28__displaymode_%29.md): Deprecated. Sets the title and display mode in the navigation bar for this view.
- [navigationBarItems(leading:)](navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(trailing:)](navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [statusBar(hidden:)](statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.
