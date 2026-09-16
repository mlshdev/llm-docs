> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/navigationviewstyle/columns

# columns

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ (deprecated in 27.2) · iPadOS 15.0+ (deprecated in 27.2) · Mac Catalyst 15.0+ (deprecated in 27.2) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
