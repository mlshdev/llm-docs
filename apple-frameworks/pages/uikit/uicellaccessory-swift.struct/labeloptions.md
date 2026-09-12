> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/labeloptions](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/labeloptions)

# UICellAccessory.LabelOptions

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Configuration options for a label accessory.

## Declaration

```swift
struct LabelOptions
```

## Topics

### Creating configuration options

- [init(isHidden:reservedLayoutWidth:tintColor:font:adjustsFontForContentSizeCategory:)](labeloptions/init%28ishidden_reservedlayoutwidth_tintcolor_font_adjustsfontforcontentsizecategory_%29.md): Creates a label accessory options structure.

### Accessing configuration options

- [isHidden](labeloptions/ishidden.md): A Boolean value that determines whether the cell hides the accessory.
- [reservedLayoutWidth](labeloptions/reservedlayoutwidth.md): The layout width that the system reserves for the accessory, and then centers the accessory within.
- [tintColor](labeloptions/tintcolor.md): The tint color to apply to the accessory.
- [font](labeloptions/font.md): The font for the label.
- [adjustsFontForContentSizeCategory](labeloptions/adjustsfontforcontentsizecategory.md): A Boolean value that determines whether the label automatically adjusts its font according to the content size category.

## See Also

### Creating a label accessory

- [label(text:displayed:options:)](label%28text_displayed_options_%29.md): Creates a label system accessory with the specified text, display state, and configuration options.
