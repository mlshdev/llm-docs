> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle](https://developer.apple.com/documentation/swiftui/liststyle)

# ListStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol that describes the behavior and appearance of a list.

## Declaration

```swift
protocol ListStyle
```

## Topics

### Getting built-in list styles

- [automatic](liststyle/automatic.md): Conforms when `Self` is `DefaultListStyle`. The list style that describes a platform’s default behavior and appearance for a list.
- [bordered](liststyle/bordered.md): Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
- [carousel](liststyle/carousel.md): Conforms when `Self` is `CarouselListStyle`. The carousel list style.
- [elliptical](liststyle/elliptical.md): Conforms when `Self` is `EllipticalListStyle`. The list style that describes the behavior and appearance of an elliptical list.
- [grouped](liststyle/grouped.md): Conforms when `Self` is `GroupedListStyle`. The list style that describes the behavior and appearance of a grouped list.
- [inset](liststyle/inset.md): Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list.
- [insetGrouped](liststyle/insetgrouped.md): Conforms when `Self` is `InsetGroupedListStyle`. The list style that describes the behavior and appearance of an inset grouped list.
- [plain](liststyle/plain.md): Conforms when `Self` is `PlainListStyle`. The list style that describes the behavior and appearance of a plain list.
- [sidebar](liststyle/sidebar.md): Conforms when `Self` is `SidebarListStyle`. The list style that describes the behavior and appearance of a sidebar list.

### Deprecated styles

- [bordered(alternatesRowBackgrounds:)](liststyle/bordered%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
- [inset(alternatesRowBackgrounds:)](liststyle/inset%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list with optional alternating row backgrounds.

### Supporting types

- [DefaultListStyle](defaultliststyle.md): The list style that describes a platform’s default behavior and appearance for a list.
- [BorderedListStyle](borderedliststyle.md): The list style that describes the behavior and appearance of a list with standard border.
- [CarouselListStyle](carouselliststyle.md): The carousel list style.
- [EllipticalListStyle](ellipticalliststyle.md): The list style that describes the behavior and appearance of an elliptical list.
- [GroupedListStyle](groupedliststyle.md): The list style that describes the behavior and appearance of a grouped list.
- [InsetListStyle](insetliststyle.md): The list style that describes the behavior and appearance of an inset list.
- [InsetGroupedListStyle](insetgroupedliststyle.md): The list style that describes the behavior and appearance of an inset grouped list.
- [PlainListStyle](plainliststyle.md): The list style that describes the behavior and appearance of a plain list.
- [SidebarListStyle](sidebarliststyle.md): The list style that describes the behavior and appearance of a sidebar list.

## Relationships

### Conforming Types

- [BorderedListStyle](borderedliststyle.md)
- [CarouselListStyle](carouselliststyle.md)
- [DefaultListStyle](defaultliststyle.md)
- [EllipticalListStyle](ellipticalliststyle.md)
- [GroupedListStyle](groupedliststyle.md)
- [InsetGroupedListStyle](insetgroupedliststyle.md)
- [InsetListStyle](insetliststyle.md)
- [PlainListStyle](plainliststyle.md)
- [SidebarListStyle](sidebarliststyle.md)

## See Also

### Styling collection views

- [listStyle(\_:)](view/liststyle%28__%29.md): Sets the style for lists within this view.
- [tableStyle(\_:)](view/tablestyle%28__%29.md): Sets the style for tables within this view.
- [TableStyle](tablestyle.md): A type that applies a custom appearance to all tables within a view.
- [TableStyleConfiguration](tablestyleconfiguration.md): The properties of a table.
- [disclosureGroupStyle(\_:)](view/disclosuregroupstyle%28__%29.md): Sets the style for disclosure groups within this view.
- [DisclosureGroupStyle](disclosuregroupstyle.md): A type that specifies the appearance and interaction of disclosure groups within a view hierarchy.
