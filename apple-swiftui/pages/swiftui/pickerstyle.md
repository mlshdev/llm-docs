> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle](https://developer.apple.com/documentation/swiftui/pickerstyle)

# PickerStyle

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that specifies the appearance and interaction of all pickers within a view hierarchy.

## Declaration

```swift
protocol PickerStyle
```

## Topics

### Getting built-in picker styles

- [automatic](pickerstyle/automatic.md): Conforms when `Self` is `DefaultPickerStyle`. The default picker style, based on the picker’s context.
- [inline](pickerstyle/inline.md): Conforms when `Self` is `InlinePickerStyle`. A `PickerStyle` where each option is displayed inline with other views in the current container.
- [menu](pickerstyle/menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [navigationLink](pickerstyle/navigationlink.md): Conforms when `Self` is `NavigationLinkPickerStyle`. A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [palette](pickerstyle/palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [radioGroup](pickerstyle/radiogroup.md): Conforms when `Self` is `RadioGroupPickerStyle`. A picker style that presents the options as a group of radio buttons.
- [segmented](pickerstyle/segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [tabs](pickerstyle/tabs.md): Conforms when `Self` is `TabsPickerStyle`. A picker style that presents options as segmented tabs.
- [wheel](pickerstyle/wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.

### Supporting types

- [DefaultPickerStyle](defaultpickerstyle.md): The default picker style, based on the picker’s context.
- [InlinePickerStyle](inlinepickerstyle.md): A `PickerStyle` where each option is displayed inline with other views in the current container.
- [MenuPickerStyle](menupickerstyle.md): A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [NavigationLinkPickerStyle](navigationlinkpickerstyle.md): A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [PalettePickerStyle](palettepickerstyle.md): A picker style that presents the options as a row of compact elements.
- [RadioGroupPickerStyle](radiogrouppickerstyle.md): A picker style that presents the options as a group of radio buttons.
- [SegmentedPickerStyle](segmentedpickerstyle.md): A picker style that presents the options in a segmented control.
- [TabsPickerStyle](tabspickerstyle.md): A picker style that presents options as segmented tabs.
- [WheelPickerStyle](wheelpickerstyle.md): A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.

### Deprecated styles

- [PopUpButtonPickerStyle](popupbuttonpickerstyle.md): Deprecated. A picker style that presents the options as a menu when the user presses a button.

## Relationships

### Conforming Types

- [DefaultPickerStyle](defaultpickerstyle.md)
- [InlinePickerStyle](inlinepickerstyle.md)
- [MenuPickerStyle](menupickerstyle.md)
- [NavigationLinkPickerStyle](navigationlinkpickerstyle.md)
- [PalettePickerStyle](palettepickerstyle.md)
- [PopUpButtonPickerStyle](popupbuttonpickerstyle.md)
- [RadioGroupPickerStyle](radiogrouppickerstyle.md)
- [SegmentedPickerStyle](segmentedpickerstyle.md)
- [TabsPickerStyle](tabspickerstyle.md)
- [WheelPickerStyle](wheelpickerstyle.md)

## See Also

### Styling pickers

- [pickerStyle(\_:)](view/pickerstyle%28__%29.md): Sets the style for pickers within this view.
- [datePickerStyle(\_:)](view/datepickerstyle%28__%29.md): Sets the style for date pickers within this view.
- [DatePickerStyle](datepickerstyle.md): A type that specifies the appearance and interaction of all date pickers within a view hierarchy.
