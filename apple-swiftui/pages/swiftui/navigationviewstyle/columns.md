> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationviewstyle/columns](https://developer.apple.com/documentation/swiftui/navigationviewstyle/columns)

# columns

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A navigation view style represented by a series of views in columns.

> Replace a styled [NavigationView](../navigationview.md) with a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
@export(implementation) static var columns: ColumnNavigationViewStyle { get }
```

## See Also

### Getting built-in navigation view styles

- [automatic](automatic.md): Deprecated. Conforms when `Self` is `DefaultNavigationViewStyle`. The default navigation view style in the current context of the view being styled.
- [stack](stack.md): Deprecated. Conforms when `Self` is `StackNavigationViewStyle`. A navigation view style represented by a view stack that only shows a single top view at a time.
