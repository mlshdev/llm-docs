> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/navigationsplitviewstyle(_:)](https://developer.apple.com/documentation/swiftui/view/navigationsplitviewstyle(_:))

# navigationSplitViewStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets the style for navigation split views within this view.

## Declaration

```swift
nonisolated func navigationSplitViewStyle<S>(_ style: S) -> some View where S : NavigationSplitViewStyle

```

## Parameters

- `style`: The style to set.

<a id="return-value"></a>

## Return Value

A view that uses the specified navigation split view style.

## Mentioned In

- [Migrating to new navigation types](../migrating-to-new-navigation-types.md)

## See Also

### Presenting views in columns

- [Bringing robust navigation structure to your SwiftUI app](../bringing-robust-navigation-structure-to-your-swiftui-app.md): Use navigation links, stacks, destinations, and paths to provide a streamlined experience for all platforms, as well as behaviors such as deep linking and state restoration.
- [Migrating to new navigation types](../migrating-to-new-navigation-types.md): Improve navigation behavior in your app by replacing navigation views with navigation stacks and navigation split views.
- [NavigationSplitView](../navigationsplitview.md): A view that presents views in two or three columns, where selections in leading columns control presentations in subsequent columns.
- [navigationSplitViewColumnWidth(\_:)](navigationsplitviewcolumnwidth%28__%29.md): Sets a fixed, preferred width for the column containing this view.
- [navigationSplitViewColumnWidth(min:ideal:max:)](navigationsplitviewcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the column containing this view.
- [NavigationSplitViewVisibility](../navigationsplitviewvisibility.md): The visibility of the leading columns in a navigation split view.
- [NavigationLink](../navigationlink.md): A view that controls a navigation presentation.
