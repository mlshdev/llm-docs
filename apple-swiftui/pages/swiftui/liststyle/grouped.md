> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle/grouped](https://developer.apple.com/documentation/swiftui/liststyle/grouped)

# grouped

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

The list style that describes the behavior and appearance of a grouped list.

## Declaration

```swift
@export(implementation) static var grouped: GroupedListStyle { get }
```

<a id="discussion"></a>

## Discussion

On iOS, the grouped list style displays a larger header and footer than the [plain](plain.md) style, which visually distances the members of different sections.

## See Also

### Getting built-in list styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultListStyle`. The list style that describes a platform’s default behavior and appearance for a list.
- [bordered](bordered.md): Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
- [carousel](carousel.md): Conforms when `Self` is `CarouselListStyle`. The carousel list style.
- [elliptical](elliptical.md): Conforms when `Self` is `EllipticalListStyle`. The list style that describes the behavior and appearance of an elliptical list.
- [inset](inset.md): Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list.
- [insetGrouped](insetgrouped.md): Conforms when `Self` is `InsetGroupedListStyle`. The list style that describes the behavior and appearance of an inset grouped list.
- [plain](plain.md): Conforms when `Self` is `PlainListStyle`. The list style that describes the behavior and appearance of a plain list.
- [sidebar](sidebar.md): Conforms when `Self` is `SidebarListStyle`. The list style that describes the behavior and appearance of a sidebar list.
