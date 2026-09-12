> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/prominentdetailnavigationsplitviewstyle](https://developer.apple.com/documentation/swiftui/prominentdetailnavigationsplitviewstyle)

# ProminentDetailNavigationSplitViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A navigation split style that attempts to maintain the size of the detail content when hiding or showing the leading columns.

## Declaration

```swift
@MainActor @preconcurrency struct ProminentDetailNavigationSplitViewStyle
```

<a id="overview"></a>

## Overview

Use [prominentDetail](navigationsplitviewstyle/prominentdetail.md) to construct this style.

## Topics

### Creating the navigation split view style

- [init()](prominentdetailnavigationsplitviewstyle/init%28%29.md): Creates an instance of [ProminentDetailNavigationSplitViewStyle](prominentdetailnavigationsplitviewstyle.md).

## Relationships

### Conforms To

- [NavigationSplitViewStyle](navigationsplitviewstyle.md)

## See Also

### Supporting types

- [AutomaticNavigationSplitViewStyle](automaticnavigationsplitviewstyle.md): A navigation split style that resolves its appearance automatically based on the current context.
- [BalancedNavigationSplitViewStyle](balancednavigationsplitviewstyle.md): A navigation split style that reduces the size of the detail content to make room when showing the leading column or columns.
- [NavigationSplitViewStyleConfiguration](navigationsplitviewstyleconfiguration.md): The properties of a navigation split view instance.
