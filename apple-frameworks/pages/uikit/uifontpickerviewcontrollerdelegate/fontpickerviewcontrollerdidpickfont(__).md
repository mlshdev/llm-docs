> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont(_:)](https://developer.apple.com/documentation/uikit/uifontpickerviewcontrollerdelegate/fontpickerviewcontrollerdidpickfont(_:))

# fontPickerViewControllerDidPickFont(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has selected a font.

## Declaration

```swift
optional func fontPickerViewControllerDidPickFont(_ viewController: UIFontPickerViewController)
```

## Parameters

- `viewController`: The controller for the font picker that has the user’s font selection.

<a id="Discussion"></a>

## Discussion

When the user picks a font, you can retrieve information about the user’s selected font from the view controller’s [selectedFontDescriptor](../uifontpickerviewcontroller/selectedfontdescriptor.md).

## See Also

### Receiving font picker interactions

- [fontPickerViewControllerDidCancel(\_:)](fontpickerviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user dismissed the font picker without selecting a font.

# fontPickerViewControllerDidPickFont: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has selected a font.

## Declaration

```objectivec
- (void) fontPickerViewControllerDidPickFont:(UIFontPickerViewController *) viewController;
```

## Parameters

- `viewController`: The controller for the font picker that has the user’s font selection.

<a id="Discussion"></a>

## Discussion

When the user picks a font, you can retrieve information about the user’s selected font from the view controller’s [selectedFontDescriptor](../uifontpickerviewcontroller/selectedfontdescriptor.md).

## See Also

### Receiving font picker interactions

- [fontPickerViewControllerDidCancel:](fontpickerviewcontrollerdidcancel%28__%29.md): Tells the delegate that the user dismissed the font picker without selecting a font.
