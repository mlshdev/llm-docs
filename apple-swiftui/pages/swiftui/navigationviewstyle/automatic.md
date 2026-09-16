> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/navigationviewstyle/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 7.0+ (deprecated in 27.2)

The default navigation view style in the current context of the view being styled.

> Replace a styled [NavigationView](../navigationview.md) with a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
@export(implementation) static var automatic: DefaultNavigationViewStyle { get }
```

## See Also

### Getting built-in navigation view styles

- [columns](columns.md): Deprecated. Conforms when `Self` is `ColumnNavigationViewStyle`. A navigation view style represented by a series of views in columns.
- [stack](stack.md): Deprecated. Conforms when `Self` is `StackNavigationViewStyle`. A navigation view style represented by a view stack that only shows a single top view at a time.
