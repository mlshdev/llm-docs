> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationdestination(ispresented:destination:)](https://developer.apple.com/documentation/swiftui/view/navigationdestination(ispresented:destination:))

# navigationDestination(isPresented:destination:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Associates a destination view with a binding that can be used to push the view onto a [NavigationStack](../navigationstack.md).

## Declaration

```swift
nonisolated func navigationDestination<V>(isPresented: Binding<Bool>, @ContentBuilder destination: () -> V) -> some View where V : View

```

## Parameters

- `isPresented`: A binding to a Boolean value that indicates whether `destination` is currently presented.
- `destination`: A view to present.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)

<a id="discussion"></a>

## Discussion

In general, favor binding a path to a navigation stack for programmatic navigation. Add this view modifier to a view inside a [NavigationStack](../navigationstack.md) to programmatically push a single view onto the stack. This is useful for building components that can push an associated view. For example, you can present a `ColorDetail` view for a particular color:

```swift
@State private var showDetails = false
var favoriteColor: Color

NavigationStack {
    VStack {
        Circle()
            .fill(favoriteColor)
        Button("Show details") {
            showDetails = true
        }
    }
    .navigationDestination(isPresented: $showDetails) {
        ColorDetail(color: favoriteColor)
    }
    .navigationTitle("My Favorite Color")
}
```

Do not put a navigation destination modifier inside a “lazy” container, like [List](../list.md) or [LazyVStack](../lazyvstack.md). These containers create child views only when needed to render on screen. Add the navigation destination modifier outside these containers so that the navigation stack can always see the destination.

## See Also

### Stacking views in one column

- [NavigationStack](../navigationstack.md): A view that displays a root view and enables you to present additional views over the root view.
- [NavigationPath](../navigationpath.md): A type-erased list of data representing the content of a navigation stack.
- [navigationDestination(for:destination:)](navigationdestination%28for_destination_%29.md): Associates a destination view with a presented data type for use within a navigation stack.
- [navigationDestination(item:destination:)](navigationdestination%28item_destination_%29.md): Associates a destination view with a bound value for use within a navigation stack or navigation split view
