> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle/elliptical](https://developer.apple.com/documentation/swiftui/liststyle/elliptical)

# elliptical

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 7.0+

The list style that describes the behavior and appearance of an elliptical list.

## Declaration

```swift
@export(implementation) static var elliptical: EllipticalListStyle { get }
```

<a id="discussion"></a>

## Discussion

On watchOS, the elliptical list style uses a transform for items rolling off the top or bottom of the list, as if on a rounded surface that faces the user.

Apple Watch Series 3 does not support this style and will instead fall back to using the [plain](plain.md) style.

## See Also

### Getting built-in list styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultListStyle`. The list style that describes a platform’s default behavior and appearance for a list.
- [bordered](bordered.md): Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
- [carousel](carousel.md): Conforms when `Self` is `CarouselListStyle`. The carousel list style.
- [grouped](grouped.md): Conforms when `Self` is `GroupedListStyle`. The list style that describes the behavior and appearance of a grouped list.
- [inset](inset.md): Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list.
- [insetGrouped](insetgrouped.md): Conforms when `Self` is `InsetGroupedListStyle`. The list style that describes the behavior and appearance of an inset grouped list.
- [plain](plain.md): Conforms when `Self` is `PlainListStyle`. The list style that describes the behavior and appearance of a plain list.
- [sidebar](sidebar.md): Conforms when `Self` is `SidebarListStyle`. The list style that describes the behavior and appearance of a sidebar list.
