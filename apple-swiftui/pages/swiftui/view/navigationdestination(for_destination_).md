> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationdestination(for:destination:)](https://developer.apple.com/documentation/swiftui/view/navigationdestination(for:destination:))

# navigationDestination(for:destination:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Associates a destination view with a presented data type for use within a navigation stack.

## Declaration

```swift
nonisolated func navigationDestination<D, C>(for data: D.Type, @ContentBuilder destination: @escaping (D) -> C) -> some View where D : Hashable, C : View

```

## Parameters

- `data`: The type of data that this destination matches.
- `destination`: A content builder that defines a view to display when the stack’s navigation state contains a value of type `data`. The closure takes one argument, which is the value of the data to present.

## Mentioned In

- [Understanding the navigation stack](../understanding-the-navigation-stack.md)
- [Migrating to new navigation types](../migrating-to-new-navigation-types.md)

<a id="discussion"></a>

## Discussion

Add this view modifier to a view inside a [NavigationStack](../navigationstack.md) to describe the view that the stack displays when presenting a particular kind of data. Use a [NavigationLink](../navigationlink.md) to present the data. For example, you can present a `ColorDetail` view for each presentation of a [Color](../color.md) instance:

```swift
NavigationStack {
    List {
        NavigationLink("Mint", value: Color.mint)
        NavigationLink("Pink", value: Color.pink)
        NavigationLink("Teal", value: Color.teal)
    }
    .navigationDestination(for: Color.self) { color in
        ColorDetail(color: color)
    }
    .navigationTitle("Colors")
}
```

You can add more than one navigation destination modifier to the stack if it needs to present more than one kind of data.

Do not put a navigation destination modifier inside a “lazy” container, like [List](../list.md) or [LazyVStack](../lazyvstack.md). These containers create child views only when needed to render on screen. Add the navigation destination modifier outside these containers so that the navigation stack can always see the destination.

## See Also

### Stacking views in one column

- [NavigationStack](../navigationstack.md): A view that displays a root view and enables you to present additional views over the root view.
- [NavigationPath](../navigationpath.md): A type-erased list of data representing the content of a navigation stack.
- [navigationDestination(isPresented:destination:)](navigationdestination%28ispresented_destination_%29.md): Associates a destination view with a binding that can be used to push the view onto a [NavigationStack](../navigationstack.md).
- [navigationDestination(item:destination:)](navigationdestination%28item_destination_%29.md): Associates a destination view with a bound value for use within a navigation stack or navigation split view
