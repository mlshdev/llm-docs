> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pagetabviewstyle](https://developer.apple.com/documentation/swiftui/pagetabviewstyle)

# PageTabViewStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A `TabViewStyle` that displays a paged scrolling `TabView`.

## Declaration

```swift
nonisolated struct PageTabViewStyle
```

<a id="overview"></a>

## Overview

Use [page](tabviewstyle/page.md) or [page(indexDisplayMode:)](tabviewstyle/page%28indexdisplaymode_%29.md) to construct this style.

To apply this style to a tab view, or to a view that contains tab views, use the [tabViewStyle(\_:)](view/tabviewstyle%28__%29.md) modifier.

## Topics

### Creating a page tab view style

- [init(indexDisplayMode:)](pagetabviewstyle/init%28indexdisplaymode_%29.md): Creates a new `PageTabViewStyle` with an index display mode
- [PageTabViewStyle.IndexDisplayMode](pagetabviewstyle/indexdisplaymode.md): A style for displaying the page index view

## Relationships

### Conforms To

- [TabViewStyle](tabviewstyle.md)

## See Also

### Supporting types

- [DefaultTabViewStyle](defaulttabviewstyle.md): The default tab view style.
- [SidebarAdaptableTabViewStyle](sidebaradaptabletabviewstyle.md): A tab bar style that adapts to each platform.
- [TabBarOnlyTabViewStyle](tabbaronlytabviewstyle.md): A tab view style that displays a tab bar when possible.
- [GroupedTabViewStyle](groupedtabviewstyle.md): A tab view style that displays a tab bar that groups its tabs together.
- [VerticalPageTabViewStyle](verticalpagetabviewstyle.md): A `TabViewStyle` that displays a vertical `TabView` interaction and appearance.
- [CarouselTabViewStyle](carouseltabviewstyle.md): Deprecated. A style that implements the carousel interaction and appearance.
