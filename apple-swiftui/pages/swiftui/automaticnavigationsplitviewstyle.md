> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/automaticnavigationsplitviewstyle](https://developer.apple.com/documentation/swiftui/automaticnavigationsplitviewstyle)

# AutomaticNavigationSplitViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A navigation split style that resolves its appearance automatically based on the current context.

## Declaration

```swift
@MainActor @preconcurrency struct AutomaticNavigationSplitViewStyle
```

<a id="overview"></a>

## Overview

Use [automatic](navigationsplitviewstyle/automatic.md) to construct this style.

## Topics

### Creating the navigation split view style

- [init()](automaticnavigationsplitviewstyle/init%28%29.md): Creates an instance of the automatic navigation split view style.

## Relationships

### Conforms To

- [NavigationSplitViewStyle](navigationsplitviewstyle.md)

## See Also

### Supporting types

- [BalancedNavigationSplitViewStyle](balancednavigationsplitviewstyle.md): A navigation split style that reduces the size of the detail content to make room when showing the leading column or columns.
- [ProminentDetailNavigationSplitViewStyle](prominentdetailnavigationsplitviewstyle.md): A navigation split style that attempts to maintain the size of the detail content when hiding or showing the leading columns.
- [NavigationSplitViewStyleConfiguration](navigationsplitviewstyleconfiguration.md): The properties of a navigation split view instance.
