> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/selectedfontdescriptor](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/selectedfontdescriptor)

# selectedFontDescriptor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about the font family or face selected by the user in the font picker.

## Declaration

```swift
var selectedFontDescriptor: UIFontDescriptor? { get set }
```

<a id="Discussion"></a>

## Discussion

This font descriptor does not include a size attribute, so if you want to use this descriptor as a parameter in [init(descriptor:size:)](../uifont/init%28descriptor_size_%29.md), you also need a size parameter greater than `0.0`.

## See Also

### Responding to font picker interactions

- [delegate](delegate.md): The object that handles messages about the user’s interaction with a font picker.
- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.

# selectedFontDescriptor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Information about the font family or face selected by the user in the font picker.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIFontDescriptor * selectedFontDescriptor;
```

<a id="Discussion"></a>

## Discussion

This font descriptor does not include a size attribute, so if you want to use this descriptor as a parameter in [fontWithDescriptor:size:](../uifont/init%28descriptor_size_%29.md), you also need a size parameter greater than `0.0`.

## See Also

### Responding to font picker interactions

- [delegate](delegate.md): The object that handles messages about the user’s interaction with a font picker.
- [UIFontPickerViewControllerDelegate](../uifontpickerviewcontrollerdelegate.md): A set of optional methods for receiving messages about the user’s interaction with the font picker.
