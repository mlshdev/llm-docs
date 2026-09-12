> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that handles messages about the user’s interaction with a font picker.

## Declaration

```swift
weak var delegate: (any UIFontPickerViewControllerDelegate)? { get set }
```

## See Also

### Responding to font picker interactions

- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [selectedFontDescriptor](selectedfontdescriptor.md): Information about the font family or face selected by the user in the font picker.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that handles messages about the user’s interaction with a font picker.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIFontPickerViewControllerDelegate> delegate;
```

## See Also

### Responding to font picker interactions

- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
- [selectedFontDescriptor](selectedfontdescriptor.md): Information about the font family or face selected by the user in the font picker.
