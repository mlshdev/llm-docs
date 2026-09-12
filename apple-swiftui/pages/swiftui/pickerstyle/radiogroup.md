> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle/radiogroup](https://developer.apple.com/documentation/swiftui/pickerstyle/radiogroup)

# radioGroup

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 10.15+

A picker style that presents the options as a group of radio buttons.

## Declaration

```swift
@export(implementation) static var radioGroup: RadioGroupPickerStyle { get }
```

<a id="discussion"></a>

## Discussion

Use this style when there are two to five options. Consider using [menu](menu.md) when there are more than five options.

For each option’s label, use sentence-style capitalization without ending punctuation, like a period or colon.

To apply this style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](../view/pickerstyle%28__%29.md) modifier.

## See Also

### Getting built-in picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultPickerStyle`. The default picker style, based on the picker’s context.
- [inline](inline.md): Conforms when `Self` is `InlinePickerStyle`. A `PickerStyle` where each option is displayed inline with other views in the current container.
- [menu](menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [navigationLink](navigationlink.md): Conforms when `Self` is `NavigationLinkPickerStyle`. A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [palette](palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [segmented](segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [tabs](tabs.md): Conforms when `Self` is `TabsPickerStyle`. A picker style that presents options as segmented tabs.
- [wheel](wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
