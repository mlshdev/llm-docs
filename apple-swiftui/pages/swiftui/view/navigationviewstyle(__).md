> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationviewstyle(_:)](https://developer.apple.com/documentation/swiftui/view/navigationviewstyle(_:))

# navigationViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

Sets the style for navigation views within this view.

> Replace a styled [NavigationView](../navigationview.md) with a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated func navigationViewStyle<S>(_ style: S) -> some View where S : NavigationViewStyle

```

<a id="discussion"></a>

## Discussion

Use this modifier to change the appearance and behavior of navigation views. For example, by default, navigation views appear with multiple columns in wider environments, like iPad in landscape orientation:

![A screenshot of an iPad in landscape orientation mode showing a](https://developer.apple.com/images/com.apple.SwiftUI/View-navigationViewStyle-1@2x.png)

You can apply the [stack](../navigationviewstyle/stack.md) style to force single-column stack navigation in these environments:

```swift
NavigationView {
    List {
        NavigationLink("Purple", destination: ColorDetail(color: .purple))
        NavigationLink("Pink", destination: ColorDetail(color: .pink))
        NavigationLink("Orange", destination: ColorDetail(color: .orange))
    }
    .navigationTitle("Colors")

    Text("Select a Color") // A placeholder to show before selection.
}
.navigationViewStyle(.stack)
```

![A screenshot of an iPad in landscape orientation mode showing a single column containing the list Purple, Pink, and Orange.](https://developer.apple.com/images/com.apple.SwiftUI/View-navigationViewStyle-2@2x.png)

## See Also

### Styling navigation views

- [NavigationViewStyle](../navigationviewstyle.md): Deprecated. A specification for the appearance and interaction of a navigation view.
