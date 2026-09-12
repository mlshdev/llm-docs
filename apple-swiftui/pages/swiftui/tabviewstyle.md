> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle](https://developer.apple.com/documentation/swiftui/tabviewstyle)

# TabViewStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A specification for the appearance and interaction of a tab view.

## Declaration

```swift
@MainActor @preconcurrency protocol TabViewStyle
```

<a id="overview"></a>

## Overview

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

### Getting built-in tab view styles

- [automatic](tabviewstyle/automatic.md): Conforms when `Self` is `DefaultTabViewStyle`. The default tab view style.
- [sidebarAdaptable](tabviewstyle/sidebaradaptable.md): Conforms when `Self` is `SidebarAdaptableTabViewStyle`. A tab bar style that adapts to each platform.
- [tabBarOnly](tabviewstyle/tabbaronly.md): Conforms when `Self` is `TabBarOnlyTabViewStyle`. A tab view style that displays a tab bar when possible.
- [grouped](tabviewstyle/grouped.md): Conforms when `Self` is `GroupedTabViewStyle`. A tab view style that displays a tab bar that groups its tabs together.
- [page](tabviewstyle/page.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that displays a paged scrolling `TabView`.
- [page(indexDisplayMode:)](tabviewstyle/page%28indexdisplaymode_%29.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.
- [verticalPage](tabviewstyle/verticalpage.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.
- [verticalPage(transitionStyle:)](tabviewstyle/verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
- [carousel](tabviewstyle/carousel.md): Deprecated. Conforms when `Self` is `CarouselTabViewStyle`. A style that implements the carousel interaction and appearance.

### Supporting types

- [DefaultTabViewStyle](defaulttabviewstyle.md): The default tab view style.
- [SidebarAdaptableTabViewStyle](sidebaradaptabletabviewstyle.md): A tab bar style that adapts to each platform.
- [TabBarOnlyTabViewStyle](tabbaronlytabviewstyle.md): A tab view style that displays a tab bar when possible.
- [GroupedTabViewStyle](groupedtabviewstyle.md): A tab view style that displays a tab bar that groups its tabs together.
- [PageTabViewStyle](pagetabviewstyle.md): A `TabViewStyle` that displays a paged scrolling `TabView`.
- [VerticalPageTabViewStyle](verticalpagetabviewstyle.md): A `TabViewStyle` that displays a vertical `TabView` interaction and appearance.
- [CarouselTabViewStyle](carouseltabviewstyle.md): Deprecated. A style that implements the carousel interaction and appearance.

## Relationships

### Conforming Types

- [CarouselTabViewStyle](carouseltabviewstyle.md)
- [DefaultTabViewStyle](defaulttabviewstyle.md)
- [GroupedTabViewStyle](groupedtabviewstyle.md)
- [PageTabViewStyle](pagetabviewstyle.md)
- [SidebarAdaptableTabViewStyle](sidebaradaptabletabviewstyle.md)
- [TabBarOnlyTabViewStyle](tabbaronlytabviewstyle.md)
- [VerticalPageTabViewStyle](verticalpagetabviewstyle.md)

## See Also

### Styling navigation views

- [navigationSplitViewStyle(\_:)](view/navigationsplitviewstyle%28__%29.md): Sets the style for navigation split views within this view.
- [NavigationSplitViewStyle](navigationsplitviewstyle.md): A type that specifies the appearance and interaction of navigation split views within a view hierarchy.
- [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md): Sets the style for the tab view within the current environment.
