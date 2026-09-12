> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabviewstyle/grouped](https://developer.apple.com/documentation/swiftui/tabviewstyle/grouped)

# grouped

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A tab view style that displays a tab bar that groups its tabs together.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var grouped: GroupedTabViewStyle { get }
```

<a id="discussion"></a>

## Discussion

To apply this style to a tab view, or to a view that contains tab views, use the [tabViewStyle(\_:)](../view/tabviewstyle%28__%29.md) modifier.

## See Also

### Getting built-in tab view styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultTabViewStyle`. The default tab view style.
- [sidebarAdaptable](sidebaradaptable.md): Conforms when `Self` is `SidebarAdaptableTabViewStyle`. A tab bar style that adapts to each platform.
- [tabBarOnly](tabbaronly.md): Conforms when `Self` is `TabBarOnlyTabViewStyle`. A tab view style that displays a tab bar when possible.
- [page](page.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that displays a paged scrolling `TabView`.
- [page(indexDisplayMode:)](page%28indexdisplaymode_%29.md): Conforms when `Self` is `PageTabViewStyle`. A `TabViewStyle` that implements a paged scrolling `TabView` with an index display mode.
- [verticalPage](verticalpage.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that displays a vertical page `TabView` interaction and appearance.
- [verticalPage(transitionStyle:)](verticalpage%28transitionstyle_%29.md): Conforms when `Self` is `VerticalPageTabViewStyle`. A `TabViewStyle` that implements the vertical page `TabView` interaction and appearance, and performs the specified transition.
- [carousel](carousel.md): Deprecated. Conforms when `Self` is `CarouselTabViewStyle`. A style that implements the carousel interaction and appearance.
