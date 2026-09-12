> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationsplitviewstyle](https://developer.apple.com/documentation/swiftui/navigationsplitviewstyle)

# NavigationSplitViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that specifies the appearance and interaction of navigation split views within a view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency protocol NavigationSplitViewStyle
```

<a id="overview"></a>

## Overview

To configure the navigation split view style for a view hierarchy, use the [navigationSplitViewStyle(\_:)](view/navigationsplitviewstyle%28__%29.md) modifier.

A type conforming to this protocol inherits `@preconcurrency @MainActor` isolation from the protocol if the conformance is included in the type’s base declaration:

```swift
struct MyCustomType: Transition {
    // `@preconcurrency @MainActor` isolation by default
}
```

Isolation to the main actor is the default, but it’s not required. Declare the conformance in an extension to opt out of main actor isolation:

```swift
extension MyCustomType: Transition {
    // `nonisolated` by default
}
```

## Topics

### Creating built-in styles

- [automatic](navigationsplitviewstyle/automatic.md): Conforms when `Self` is `AutomaticNavigationSplitViewStyle`. A navigation split style that resolves its appearance automatically based on the current context.
- [balanced](navigationsplitviewstyle/balanced.md): Conforms when `Self` is `BalancedNavigationSplitViewStyle`. A navigation split style that reduces the size of the detail content to make room when showing the leading column or columns.
- [prominentDetail](navigationsplitviewstyle/prominentdetail.md): Conforms when `Self` is `ProminentDetailNavigationSplitViewStyle`. A navigation split style that attempts to maintain the size of the detail content when hiding or showing the leading columns.

### Creating custom styles

- [makeBody(configuration:)](navigationsplitviewstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a navigation split view.
- [NavigationSplitViewStyle.Configuration](navigationsplitviewstyle/configuration.md): The properties of a navigation split view instance.
- [Body](navigationsplitviewstyle/body.md): A view that represents the body of a navigation split view.

### Supporting types

- [AutomaticNavigationSplitViewStyle](automaticnavigationsplitviewstyle.md): A navigation split style that resolves its appearance automatically based on the current context.
- [BalancedNavigationSplitViewStyle](balancednavigationsplitviewstyle.md): A navigation split style that reduces the size of the detail content to make room when showing the leading column or columns.
- [ProminentDetailNavigationSplitViewStyle](prominentdetailnavigationsplitviewstyle.md): A navigation split style that attempts to maintain the size of the detail content when hiding or showing the leading columns.
- [NavigationSplitViewStyleConfiguration](navigationsplitviewstyleconfiguration.md): The properties of a navigation split view instance.

## Relationships

### Conforming Types

- [AutomaticNavigationSplitViewStyle](automaticnavigationsplitviewstyle.md)
- [BalancedNavigationSplitViewStyle](balancednavigationsplitviewstyle.md)
- [ProminentDetailNavigationSplitViewStyle](prominentdetailnavigationsplitviewstyle.md)

## See Also

### Styling navigation views

- [navigationSplitViewStyle(\_:)](view/navigationsplitviewstyle%28__%29.md): Sets the style for navigation split views within this view.
- [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md): Sets the style for the tab view within the current environment.
- [TabViewStyle](tabviewstyle.md): A specification for the appearance and interaction of a tab view.
