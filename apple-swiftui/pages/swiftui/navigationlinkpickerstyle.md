> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlinkpickerstyle](https://developer.apple.com/documentation/swiftui/navigationlinkpickerstyle)

# NavigationLinkPickerStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A picker style represented by a navigation link that presents the options by pushing a List-style picker view.

## Declaration

```swift
struct NavigationLinkPickerStyle
```

<a id="overview"></a>

## Overview

In navigation stacks, prefer the default [menu](pickerstyle/menu.md) style. Consider the navigation link style when you have a large number of options or your design is better expressed by pushing onto a stack.

You can also use [navigationLink](pickerstyle/navigationlink.md) to construct this style.

## Topics

### Creating the picker style

- [init()](navigationlinkpickerstyle/init%28%29.md): Creates a navigation link picker style.

## Relationships

### Conforms To

- [PickerStyle](pickerstyle.md)

## See Also

### Supporting types

- [DefaultPickerStyle](defaultpickerstyle.md): The default picker style, based on the picker’s context.
- [InlinePickerStyle](inlinepickerstyle.md): A `PickerStyle` where each option is displayed inline with other views in the current container.
- [MenuPickerStyle](menupickerstyle.md): A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [PalettePickerStyle](palettepickerstyle.md): A picker style that presents the options as a row of compact elements.
- [RadioGroupPickerStyle](radiogrouppickerstyle.md): A picker style that presents the options as a group of radio buttons.
- [SegmentedPickerStyle](segmentedpickerstyle.md): A picker style that presents the options in a segmented control.
- [TabsPickerStyle](tabspickerstyle.md): A picker style that presents options as segmented tabs.
- [WheelPickerStyle](wheelpickerstyle.md): A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
