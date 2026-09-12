> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle/verticalpage](https://developer.apple.com/documentation/swiftui/tabviewstyle/verticalpage)

# verticalPage

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 10.0+

A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var verticalPage: VerticalPageTabViewStyle { get }
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
- [page(indexDisplayMode:)](page%28indexdisplaymode_%29.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.
- [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
- [carousel](carousel.md): Deprecated. Conforms when `Self` is `CarouselTabViewStyle`. A style that implements the carousel interaction and appearance.
