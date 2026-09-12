> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontrollerdelegate](https://developer.apple.com/documentation/uikit/uifontpickerviewcontrollerdelegate)

# UIFontPickerViewControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of optional methods for receiving messages about the user’s interaction with the font picker.

## Declaration

```swift
@MainActor protocol UIFontPickerViewControllerDelegate : NSObjectProtocol
```

## Topics

### Receiving font picker interactions

- [fontPickerViewControllerDidCancel(\_:)](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user dismissed the font picker without selecting a font.
- [fontPickerViewControllerDidPickFont(\_:)](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont%28__%29.md): Tells the delegate that the user has selected a font.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextFormattingCoordinator](uitextformattingcoordinator.md)

## See Also

### Font picker

- [UIFontPickerViewController](uifontpickerviewcontroller.md): A view controller that manages the interface for selecting a font that the system provides or the user installs.
- [UIFontPickerViewController.Configuration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.

# UIFontPickerViewControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of optional methods for receiving messages about the user’s interaction with the font picker.

## Declaration

```objectivec
@protocol UIFontPickerViewControllerDelegate <NSObject>
```

## Topics

### Receiving font picker interactions

- [fontPickerViewControllerDidCancel:](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user dismissed the font picker without selecting a font.
- [fontPickerViewControllerDidPickFont:](uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont%28__%29.md): Tells the delegate that the user has selected a font.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextFormattingCoordinator](uitextformattingcoordinator.md)

## See Also

### Font picker

- [UIFontPickerViewController](uifontpickerviewcontroller.md): A view controller that manages the interface for selecting a font that the system provides or the user installs.
- [UIFontPickerViewControllerConfiguration](uifontpickerviewcontroller/configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.
