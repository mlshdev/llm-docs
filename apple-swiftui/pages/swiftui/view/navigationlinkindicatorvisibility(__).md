> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationlinkindicatorvisibility(_:)](https://developer.apple.com/documentation/swiftui/view/navigationlinkindicatorvisibility(_:))

# navigationLinkIndicatorVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Configures whether navigation links show a disclosure indicator.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency func navigationLinkIndicatorVisibility(_ visibility: Visibility) -> some View

```

<a id="discussion"></a>

## Discussion

If you need to detect whether the navigation disclosure indicator should be shown for the current view, read the [navigationLinkIndicatorVisibility](../environmentvalues/navigationlinkindicatorvisibility.md) environment value.

The following example hides the indicator for all links in the list. The indicator can be hidden for a specific link by placing the modifier on the `NavigationLink` itself.

```swift
struct NoIndicatorLink: View {
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("See detail") {
                    Text("Detail view")
                }
            }
            .navigationLinkIndicatorVisibility(.hidden)
        }
    }
}
```

> **Important**

> Setting the link indicator visibility to `.visible` is only supported for navigation links contained in a `List` built with the Xcode 16 SDKs and earlier. Current releases support setting the indicator visibility to `.visible` regardless of whether the link is within a list.

## See Also

### Navigation stacks and columns

- [navigationDestination(for:destination:)](navigationdestination%28for_destination_%29.md): Associates a destination view with a presented data type for use within a navigation stack.
- [navigationDestination(isPresented:destination:)](navigationdestination%28ispresented_destination_%29.md): Associates a destination view with a binding that can be used to push the view onto a [NavigationStack](../navigationstack.md).
- [navigationDestination(item:destination:)](navigationdestination%28item_destination_%29.md): Associates a destination view with a bound value for use within a navigation stack or navigation split view
- [navigationSplitViewColumnWidth(\_:)](navigationsplitviewcolumnwidth%28__%29.md): Sets a fixed, preferred width for the column containing this view.
- [navigationSplitViewColumnWidth(min:ideal:max:)](navigationsplitviewcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the column containing this view.
- [navigationTransition(\_:)](navigationtransition%28__%29.md): Sets the navigation transition style for this view.
