> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/popupbuttonpickerstyle](https://developer.apple.com/documentation/swiftui/popupbuttonpickerstyle)

# PopUpButtonPickerStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A picker style that presents the options as a menu when the user presses a button.

> Use [MenuPickerStyle](menupickerstyle.md) instead.

## Declaration

```swift
struct PopUpButtonPickerStyle
```

<a id="overview"></a>

## Overview

Use this style when there are more than five options. Consider using [RadioGroupPickerStyle](radiogrouppickerstyle.md) when there are fewer than five options.

The button itself indicates the selected option. You can include additional controls in the set of options, such as a button to customize the list of options.

To apply this style to a picker, or to a view that contains pickers, use the [pickerStyle(\_:)](view/pickerstyle%28__%29.md) modifier.

<a id="Creating-the-picker-style"></a>

### Creating the picker style

- [init()](popupbuttonpickerstyle/init%28%29.md)

## Topics

### Initializers

- [init()](popupbuttonpickerstyle/init%28%29.md): Deprecated. Creates a pop-up button picker style.

## Relationships

### Conforms To

- [PickerStyle](pickerstyle.md)
