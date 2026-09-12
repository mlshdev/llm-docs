> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle/tabs](https://developer.apple.com/documentation/swiftui/pickerstyle/tabs)

# tabs

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A picker style that presents options as segmented tabs.

## Declaration

```swift
@export(implementation) static var tabs: TabsPickerStyle { get }
```

<a id="discussion"></a>

## Discussion

On macOS, this style produces a segmented picker with a visual treatment that distinguishes tab navigation from value selection. On iOS, tvOS, and visionOS, the visual appearance matches that of the standard standard `.segmented` style. On all supported platforms, VoiceOver announces options as tabs.

```swift
Picker("View", selection: $view) {
    Text("Events").tag(Views.events)
    Text("Reminders").tag(Views.reminders)
}
.pickerStyle(.tabs)
```

To apply this style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](../view/pickerstyle%28__%29.md) modifier.

## See Also

### Getting built-in picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultPickerStyle`. The default picker style, based on the picker’s context.
- [inline](inline.md): Conforms when `Self` is `InlinePickerStyle`. A `PickerStyle` where each option is displayed inline with other views in the current container.
- [menu](menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [navigationLink](navigationlink.md): Conforms when `Self` is `NavigationLinkPickerStyle`. A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [palette](palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [radioGroup](radiogroup.md): Conforms when `Self` is `RadioGroupPickerStyle`. A picker style that presents the options as a group of radio buttons.
- [segmented](segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [wheel](wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
