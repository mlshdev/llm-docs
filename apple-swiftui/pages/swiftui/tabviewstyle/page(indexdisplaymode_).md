> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle/page(indexdisplaymode:)](https://developer.apple.com/documentation/swiftui/tabviewstyle/page(indexdisplaymode:))

# page(indexDisplayMode:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static func page(indexDisplayMode: PageTabViewStyle.IndexDisplayMode) -> PageTabViewStyle
```

<a id="discussion"></a>

## Discussion

To apply this style to a tab view, or to a view that contains tab views, use the [tabViewStyle(\_:)](../view/tabviewstyle%28__%29.md) modifier.

## See Also

### Getting built-in tab view styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTabViewStyle`. The default tab view style.
- [sidebarAdaptable](sidebaradaptable.md): Conforms when `Self` is `SidebarAdaptableTabViewStyle`. A tab bar style that adapts to each platform.
- [tabBarOnly](tabbaronly.md): Conforms when `Self` is `TabBarOnlyTabViewStyle`. A tab view style that displays a tab bar when possible.
- [grouped](grouped.md): Conforms when `Self` is `GroupedTabViewStyle`. A tab view style that displays a tab bar that groups its tabs together.
- [page](page.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that displays a paged scrolling `TabView`.
- [verticalPage](verticalpage.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.
- [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
- [carousel](carousel.md): Deprecated. Conforms when `Self` is `CarouselTabViewStyle`. A style that implements the carousel interaction and appearance.
