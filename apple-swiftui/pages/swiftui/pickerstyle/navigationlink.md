> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pickerstyle/navigationlink](https://developer.apple.com/documentation/swiftui/pickerstyle/navigationlink)

# navigationLink

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A picker style represented by a navigation link that presents the options by pushing a List-style picker view.

## Declaration

```swift
@export(implementation) static var navigationLink: NavigationLinkPickerStyle { get }
```

<a id="discussion"></a>

## Discussion

In navigation stacks, prefer the default [menu](menu.md) style. Consider the navigation link style when you have a large number of options or your design is better expressed by pushing onto a stack.

To apply this style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](../view/pickerstyle%28__%29.md) modifier.

## See Also

### Getting built-in picker styles

- [automatic](automatic.md): Conforms when `Self` is `DefaultPickerStyle`. The default picker style, based on the picker’s context.
- [inline](inline.md): Conforms when `Self` is `InlinePickerStyle`. A `PickerStyle` where each option is displayed inline with other views in the current container.
- [menu](menu.md): Conforms when `Self` is `MenuPickerStyle`. A picker style that presents the options as a menu when the user presses a button, or as a submenu when nested within a larger menu.
- [palette](palette.md): Conforms when `Self` is `PalettePickerStyle`. A picker style that presents the options as a row of compact elements.
- [radioGroup](radiogroup.md): Conforms when `Self` is `RadioGroupPickerStyle`. A picker style that presents the options as a group of radio buttons.
- [segmented](segmented.md): Conforms when `Self` is `SegmentedPickerStyle`. A picker style that presents the options in a segmented control.
- [tabs](tabs.md): Conforms when `Self` is `TabsPickerStyle`. A picker style that presents options as segmented tabs.
- [wheel](wheel.md): Conforms when `Self` is `WheelPickerStyle`. A picker style that presents the options in a scrollable wheel that shows the selected option and a few neighboring options.
