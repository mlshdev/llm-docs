> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/stacknavigationviewstyle

# StackNavigationViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 7.0+ (deprecated in 27.2)

A navigation view style represented by a view stack that only shows a single top view at a time.

> Replace a styled [NavigationView](navigationview.md) with a [NavigationStack](navigationstack.md) or [NavigationSplitView](navigationsplitview.md). For more information, see [Migrating to new navigation types](migrating-to-new-navigation-types.md).

## Declaration

```swift
struct StackNavigationViewStyle
```

<a id="overview"></a>

## Overview

Use [stack](navigationviewstyle/stack.md) to construct this style.

## Topics

### Creating a stack navigation view style

- [init()](stacknavigationviewstyle/init%28%29.md): Deprecated. Creates a navigation view style represented by a view stack that only shows a single top view at a time.

## Relationships

### Conforms To

- [NavigationViewStyle](navigationviewstyle.md)

## See Also

### Supporting types

- [DefaultNavigationViewStyle](defaultnavigationviewstyle.md): Deprecated. The default navigation view style.
- [ColumnNavigationViewStyle](columnnavigationviewstyle.md): Deprecated. A navigation view style represented by a series of views in columns.
- [DoubleColumnNavigationViewStyle](doublecolumnnavigationviewstyle.md): Deprecated. A navigation view style represented by a primary view stack that navigates to a detail view.
