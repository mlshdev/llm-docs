> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/outlinedisclosureoptions/reservedlayoutwidth](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/outlinedisclosureoptions/reservedlayoutwidth)

# reservedLayoutWidth

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

The layout width that the system reserves for the accessory, and then centers the accessory within.

## Declaration

```swift
var reservedLayoutWidth: UICellAccessory.LayoutDimension
```

<a id="Discussion"></a>

## Discussion

Use this property to ensure consistent horizontal alignment from both system and custom accessories to your content, even when the accessories vary in size.

The reserved layout width only affects the amount of space for the accessory, and its positioning within that space. It doesn’t affect the size of the accessory.

![Diagram of three cells, each of which contains one accessory on the leading side. The accessories vary in width, but use the same reserved layout width to achieve consistent alignment. Annotations running the height of the diagram illustrate the static width.](https://developer.apple.com/images/com.apple.uikit/media-3681819@2x.png)

## See Also

### Accessing configuration options

- [isHidden](ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [tintColor](tintcolor.md): The tint color to apply to the accessory.
- [style](style-swift.property.md): The style of the outline disclosure accessory.
- [UICellAccessory.OutlineDisclosureOptions.Style](style-swift.enum.md): Constants that describe the style of the outline disclosure accessory.
