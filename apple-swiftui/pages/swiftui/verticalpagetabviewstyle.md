> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/verticalpagetabviewstyle](https://developer.apple.com/documentation/swiftui/verticalpagetabviewstyle)

# VerticalPageTabViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** watchOS 10.0+

A `TabViewStyle` that displays a vertical `TabView` interaction and appearance.

## Declaration

```swift
nonisolated struct VerticalPageTabViewStyle
```

<a id="overview"></a>

## Overview

Use [verticalPage](tabviewstyle/verticalpage.md) to construct this style.

To apply this style to a tab view, or to a view that contains tab views, use the [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md) modifier.

## Topics

### Creating the tab view style

- [init()](verticalpagetabviewstyle/init%28%29.md)
- [init(transitionStyle:)](verticalpagetabviewstyle/init%28transitionstyle_%29.md): Creates a new `VerticalPageTabViewStyle` with a transition style.
- [VerticalPageTabViewStyle.TransitionStyle](verticalpagetabviewstyle/transitionstyle.md): A transition style used between tabs.

## Relationships

### Conforms To

- [TabViewStyle](tabviewstyle.md)

## See Also

### Supporting types

- [DefaultTabViewStyle](defaulttabviewstyle.md): The default tab view style.
- [SidebarAdaptableTabViewStyle](sidebaradaptabletabviewstyle.md): A tab bar style that adapts to each platform.
- [TabBarOnlyTabViewStyle](tabbaronlytabviewstyle.md): A tab view style that displays a tab bar when possible.
- [GroupedTabViewStyle](groupedtabviewstyle.md): A tab view style that displays a tab bar that groups its tabs together.
- [PageTabViewStyle](pagetabviewstyle.md): A `TabViewStyle` that displays a paged scrolling `TabView`.
- [CarouselTabViewStyle](carouseltabviewstyle.md): Deprecated. A style that implements the carousel interaction and appearance.
