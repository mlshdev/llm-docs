> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle/insetgrouped](https://developer.apple.com/documentation/swiftui/liststyle/insetgrouped)

# insetGrouped

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The list style that describes the behavior and appearance of an inset grouped list.

## Declaration

```swift
@export(implementation) static var insetGrouped: InsetGroupedListStyle { get }
```

<a id="discussion"></a>

## Discussion

On iOS, the inset grouped list style displays a continuous background color that extends from the section header, around both sides of list items in the section, and down to the section footer. This visually groups the items to a greater degree than either the [inset](inset.md) or [grouped](grouped.md) styles do.

## See Also

### Getting built-in list styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultListStyle`. The list style that describes a platform’s default behavior and appearance for a list.
- [bordered](bordered.md): Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
- [carousel](carousel.md): Conforms when `Self` is `CarouselListStyle`. The carousel list style.
- [elliptical](elliptical.md): Conforms when `Self` is `EllipticalListStyle`. The list style that describes the behavior and appearance of an elliptical list.
- [grouped](grouped.md): Conforms when `Self` is `GroupedListStyle`. The list style that describes the behavior and appearance of a grouped list.
- [inset](inset.md): Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list.
- [plain](plain.md): Conforms when `Self` is `PlainListStyle`. The list style that describes the behavior and appearance of a plain list.
- [sidebar](sidebar.md): Conforms when `Self` is `SidebarListStyle`. The list style that describes the behavior and appearance of a sidebar list.
