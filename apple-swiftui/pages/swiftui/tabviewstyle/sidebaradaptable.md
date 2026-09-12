> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle/sidebaradaptable](https://developer.apple.com/documentation/swiftui/tabviewstyle/sidebaradaptable)

# sidebarAdaptable

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A tab bar style that adapts to each platform.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var sidebarAdaptable: SidebarAdaptableTabViewStyle { get }
```

<a id="discussion"></a>

## Discussion

Tab views using the sidebar adaptable style have an appearance that varies depending on the platform:

- iPadOS displays a top tab bar that can adapt into a sidebar.
- iOS displays a bottom tab bar.
- macOS and tvOS always show a sidebar.
- visionOS shows an ornament and also shows a sidebar for secondary tabs within a [TabSection](../tabsection.md).

To apply this style to a tab view, or to a view that contains tab views, use the [tabViewStyle(\_:)](../view/tabviewstyle%28__%29.md) modifier.

## See Also

### Getting built-in tab view styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTabViewStyle`. The default tab view style.
- [tabBarOnly](tabbaronly.md): Conforms when `Self` is `TabBarOnlyTabViewStyle`. A tab view style that displays a tab bar when possible.
- [grouped](grouped.md): Conforms when `Self` is `GroupedTabViewStyle`. A tab view style that displays a tab bar that groups its tabs together.
- [page](page.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that displays a paged scrolling `TabView`.
- [page(indexDisplayMode:)](page%28indexdisplaymode_%29.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.
- [verticalPage](verticalpage.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.
- [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
- [carousel](carousel.md): Deprecated. Conforms when `Self` is `CarouselTabViewStyle`. A style that implements the carousel interaction and appearance.
