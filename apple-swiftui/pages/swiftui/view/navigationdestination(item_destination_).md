> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationdestination(item:destination:)](https://developer.apple.com/documentation/swiftui/view/navigationdestination(item:destination:))

# navigationDestination(item:destination:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Associates a destination view with a bound value for use within a navigation stack or navigation split view

## Declaration

```swift
nonisolated func navigationDestination<D, C>(item: Binding<Optional<D>>, @ContentBuilder destination: @escaping (D) -> C) -> some View where D : Hashable, C : View

```

## Parameters

- `item`: A binding to the data presented, or `nil` if nothing is currently presented.
- `destination`: A content builder that defines a view to display when `item` is not `nil`.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)

<a id="discussion"></a>

## Discussion

Add this view modifier to a view inside a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md) to describe the view that the stack displays when presenting a particular kind of data. Programmatically update the binding to display or remove the view. For example, you can replace the view showing in the detail column of a navigation split view:

```swift
@State private var colorShown: Color?

NavigationSplitView {
    List {
        Button("Mint") { colorShown = .mint }
        Button("Pink") { colorShown = .pink }
        Button("Teal") { colorShown = .teal }
    }
    .navigationDestination(item: $colorShown) { color in
        ColorDetail(color: color)
    }
} detail: {
    Text("Select a color")
}
```

When the person using the app taps on the Mint button, the mint color shows in the detail and `colorShown` gets the value `Color.mint`. You can reset the navigation split view to show the message “Select a color” by setting `colorShown` back to `nil`.

You can add more than one navigation destination modifier to the stack if it needs to present more than one kind of data.

Do not put a navigation destination modifier inside a “lazy” container, like [List](../list.md) or [LazyVStack](../lazyvstack.md). These containers create child views only when needed to render on screen. Add the navigation destination modifier outside these containers so that the navigation split view can always see the destination.

## See Also

### Stacking views in one column

- [NavigationStack](../navigationstack.md): A view that displays a root view and enables you to present additional views over the root view.
- [NavigationPath](../navigationpath.md): A type-erased list of data representing the content of a navigation stack.
- [navigationDestination(for:destination:)](navigationdestination%28for_destination_%29.md): Associates a destination view with a presented data type for use within a navigation stack.
- [navigationDestination(isPresented:destination:)](navigationdestination%28ispresented_destination_%29.md): Associates a destination view with a binding that can be used to push the view onto a [NavigationStack](../navigationstack.md).
