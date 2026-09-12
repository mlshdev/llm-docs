> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle/inline](https://developer.apple.com/documentation/swiftui/pickerstyle/inline)

# inline

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A `PickerStyle` where each option is displayed inline with other views in the current container.

## Declaration

```swift
@export(implementation) static var inline: InlinePickerStyle { get }
```

## Mentioned In

- [Populating SwiftUI menus with adaptive controls](../populating-swiftui-menus-with-adaptive-controls.md)

## See Also

### Getting built-in picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultPickerStyle`. The default picker style, based on the picker’s context.
- [menu](menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [navigationLink](navigationlink.md): Conforms when `Self` is `NavigationLinkPickerStyle`. A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [palette](palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [radioGroup](radiogroup.md): Conforms when `Self` is `RadioGroupPickerStyle`. A picker style that presents the options as a group of radio buttons.
- [segmented](segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [tabs](tabs.md): Conforms when `Self` is `TabsPickerStyle`. A picker style that presents options as segmented tabs.
- [wheel](wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
