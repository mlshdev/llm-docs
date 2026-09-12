> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle/carousel](https://developer.apple.com/documentation/swiftui/tabviewstyle/carousel)

# carousel

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

A style that implements the carousel interaction and appearance.

> Use [verticalPage](verticalpage.md) or [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md) instead.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var carousel: CarouselTabViewStyle { get }
```

## See Also

### Getting built-in tab view styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTabViewStyle`. The default tab view style.
- [sidebarAdaptable](sidebaradaptable.md): Conforms when `Self` is `SidebarAdaptableTabViewStyle`. A tab bar style that adapts to each platform.
- [tabBarOnly](tabbaronly.md): Conforms when `Self` is `TabBarOnlyTabViewStyle`. A tab view style that displays a tab bar when possible.
- [grouped](grouped.md): Conforms when `Self` is `GroupedTabViewStyle`. A tab view style that displays a tab bar that groups its tabs together.
- [page](page.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that displays a paged scrolling `TabView`.
- [page(indexDisplayMode:)](page%28indexdisplaymode_%29.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.
- [verticalPage](verticalpage.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.
- [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
