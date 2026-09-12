> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabspickerstyle](https://developer.apple.com/documentation/swiftui/tabspickerstyle)

# TabsPickerStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A picker style that presents options as segmented tabs.

## Declaration

```swift
struct TabsPickerStyle
```

<a id="overview"></a>

## Overview

On macOS, this style produces a segmented picker with a visual treatment that distinguishes tab navigation from value selection. On iOS, tvOS, and visionOS, the visual appearance matches that of the standard standard `.segmented` style. On all supported platforms, VoiceOver announces options as tabs.

```swift
Picker("View", selection: $view) {
    Text("Events").tag(Views.events)
    Text("Reminders").tag(Views.reminders)
}
.pickerStyle(.tabs)
```

To apply this style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](view/pickerstyle%28__%29.md) modifier.

You can also use [tabs](pickerstyle/tabs.md) to construct this style.

## Topics

### Creating the picker style

- [init()](tabspickerstyle/init%28%29.md): Creates a tabs picker style.

## Relationships

### Conforms To

- [PickerStyle](pickerstyle.md)

## See Also

### Supporting types

- [DefaultPickerStyle](defaultpickerstyle.md): The default picker style, based on the picker’s context.
- [InlinePickerStyle](inlinepickerstyle.md): A `PickerStyle` where each option is displayed inline with other views in the current container.
- [MenuPickerStyle](menupickerstyle.md): A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [NavigationLinkPickerStyle](navigationlinkpickerstyle.md): A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [PalettePickerStyle](palettepickerstyle.md): A picker style that presents the options as a row of compact elements.
- [RadioGroupPickerStyle](radiogrouppickerstyle.md): A picker style that presents the options as a group of radio buttons.
- [SegmentedPickerStyle](segmentedpickerstyle.md): A picker style that presents the options in a segmented control.
- [WheelPickerStyle](wheelpickerstyle.md): A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
