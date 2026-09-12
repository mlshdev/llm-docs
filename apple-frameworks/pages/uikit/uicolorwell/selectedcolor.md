> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolorwell/selectedcolor](https://developer.apple.com/documentation/uikit/uicolorwell/selectedcolor)

# selectedColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The selected color in the color picker.

## Declaration

```swift
var selectedColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

When a person selects a new color in the color picker, the system generates the control event [valueChanged](../uicontrol/event/valuechanged.md).

This property is KVO-compliant.

## See Also

### Configuring color picker attributes

- [title](title.md): The title for the color picker.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color well.
- [supportsAlpha](supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color well.

# selectedColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The selected color in the color picker.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * selectedColor;
```

<a id="Discussion"></a>

## Discussion

When a person selects a new color in the color picker, the system generates the control event [UIControlEventValueChanged](../uicontrol/event/valuechanged.md).

This property is KVO-compliant.

## See Also

### Configuring color picker attributes

- [title](title.md): The title for the color picker.
- [maximumLinearExposure](maximumlinearexposure.md): The maximum exposure to apply to a color when returned by the color well.
- [supportsAlpha](supportsalpha.md): A Boolean value that determines whether the color picker supports alpha values.
- [supportsEyedropper](supportseyedropper.md): If set to `NO` the eyedropper functionality is not supported for this color well.
