> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationviewstyle](https://developer.apple.com/documentation/swiftui/navigationviewstyle)

# NavigationViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.0+ (deprecated in 27.0)

A specification for the appearance and interaction of a navigation view.

> Replace a styled [NavigationView](navigationview.md) with a [NavigationStack](navigationstack.md) or [NavigationSplitView](navigationsplitview.md). For more information, see [Migrating to new navigation types](migrating-to-new-navigation-types.md).

## Declaration

```swift
protocol NavigationViewStyle
```

## Topics

### Getting built-in navigation view styles

- [automatic](navigationviewstyle/automatic.md): Deprecated. Conforms when `Self` is `DefaultNavigationViewStyle`. The default navigation view style in the current context of the view being styled.
- [columns](navigationviewstyle/columns.md): Deprecated. Conforms when `Self` is `ColumnNavigationViewStyle`. A navigation view style represented by a series of views in columns.
- [stack](navigationviewstyle/stack.md): Deprecated. Conforms when `Self` is `StackNavigationViewStyle`. A navigation view style represented by a view stack that only shows a single top view at a time.

### Supporting types

- [DefaultNavigationViewStyle](defaultnavigationviewstyle.md): Deprecated. The default navigation view style.
- [ColumnNavigationViewStyle](columnnavigationviewstyle.md): Deprecated. A navigation view style represented by a series of views in columns.
- [StackNavigationViewStyle](stacknavigationviewstyle.md): Deprecated. A navigation view style represented by a view stack that only shows a single top view at a time.
- [DoubleColumnNavigationViewStyle](doublecolumnnavigationviewstyle.md): Deprecated. A navigation view style represented by a primary view stack that navigates to a detail view.

## Relationships

### Conforming Types

- [ColumnNavigationViewStyle](columnnavigationviewstyle.md)
- [DefaultNavigationViewStyle](defaultnavigationviewstyle.md)
- [DoubleColumnNavigationViewStyle](doublecolumnnavigationviewstyle.md)
- [StackNavigationViewStyle](stacknavigationviewstyle.md)

## See Also

### Styling navigation views

- [navigationViewStyle(\_:)](view/navigationviewstyle%28__%29.md): Deprecated. Sets the style for navigation views within this view.
