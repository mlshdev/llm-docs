> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle/bordered](https://developer.apple.com/documentation/swiftui/liststyle/bordered)

# bordered

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 12.0+

The list style that describes the behavior and appearance of a list with standard border.

## Declaration

```swift
@export(implementation) static var bordered: BorderedListStyle { get }
```

<a id="discussion"></a>

## Discussion

Bordered lists are expected to be inset from their outer containers, but do not have inset style rows or selection.

To customize whether the rows of the list should alternate their backgrounds, use [bordered(alternatesRowBackgrounds:)](bordered%28alternatesrowbackgrounds_%29.md).

## See Also

### Getting built-in list styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultListStyle`. The list style that describes a platform’s default behavior and appearance for a list.
- [carousel](carousel.md): Conforms when `Self` is `CarouselListStyle`. The carousel list style.
- [elliptical](elliptical.md): Conforms when `Self` is `EllipticalListStyle`. The list style that describes the behavior and appearance of an elliptical list.
- [grouped](grouped.md): Conforms when `Self` is `GroupedListStyle`. The list style that describes the behavior and appearance of a grouped list.
- [inset](inset.md): Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list.
- [insetGrouped](insetgrouped.md): Conforms when `Self` is `InsetGroupedListStyle`. The list style that describes the behavior and appearance of an inset grouped list.
- [plain](plain.md): Conforms when `Self` is `PlainListStyle`. The list style that describes the behavior and appearance of a plain list.
- [sidebar](sidebar.md): Conforms when `Self` is `SidebarListStyle`. The list style that describes the behavior and appearance of a sidebar list.
