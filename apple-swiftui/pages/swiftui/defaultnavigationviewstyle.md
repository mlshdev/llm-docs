> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/defaultnavigationviewstyle

# DefaultNavigationViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 7.0+ (deprecated in 27.2)

The default navigation view style.

> Replace a styled [NavigationView](navigationview.md) with a [NavigationStack](navigationstack.md) or [NavigationSplitView](navigationsplitview.md). For more information, see [Migrating to new navigation types](migrating-to-new-navigation-types.md).

## Declaration

```swift
struct DefaultNavigationViewStyle
```

<a id="overview"></a>

## Overview

Use [automatic](navigationviewstyle/automatic.md) to construct this style.

## Topics

### Creating a default navigation view style

- [init()](defaultnavigationviewstyle/init%28%29.md): Deprecated. Creates the default navigation view style.

## Relationships

### Conforms To

- [NavigationViewStyle](navigationviewstyle.md)

## See Also

### Supporting types

- [ColumnNavigationViewStyle](columnnavigationviewstyle.md): Deprecated. A navigation view style represented by a series of views in columns.
- [StackNavigationViewStyle](stacknavigationviewstyle.md): Deprecated. A navigation view style represented by a view stack that only shows a single top view at a time.
- [DoubleColumnNavigationViewStyle](doublecolumnnavigationviewstyle.md): Deprecated. A navigation view style represented by a primary view stack that navigates to a detail view.
