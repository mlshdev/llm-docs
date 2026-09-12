> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle/automatic](https://developer.apple.com/documentation/swiftui/pickerstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The default picker style, based on the picker’s context.

## Declaration

```swift
@export(implementation) static var automatic: DefaultPickerStyle { get }
```

<a id="discussion"></a>

## Discussion

How a picker using the default picker style appears largely depends on the platform and the view type in which it appears. For example, in a standard view, the default picker styles by platform are:

- On iOS and watchOS the default is a wheel.
- On macOS, the default is a pop-up button.
- On tvOS, the default is a segmented control.

The default picker style may also take into account other factors — like whether the picker appears in a container view — when setting the appearance of a picker.

You can override a picker’s style. To apply the default style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](../view/pickerstyle%28__%29.md) modifier.

## See Also

### Getting built-in picker styles

- [inline](inline.md): Conforms when `Self` is `InlinePickerStyle`. A `PickerStyle` where each option is displayed inline with other views in the current container.
- [menu](menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [navigationLink](navigationlink.md): Conforms when `Self` is `NavigationLinkPickerStyle`. A picker style represented by a navigation link that presents the options by pushing a List-style picker view.
- [palette](palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [radioGroup](radiogroup.md): Conforms when `Self` is `RadioGroupPickerStyle`. A picker style that presents the options as a group of radio buttons.
- [segmented](segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [tabs](tabs.md): Conforms when `Self` is `TabsPickerStyle`. A picker style that presents options as segmented tabs.
- [wheel](wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
