> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilitylabelforcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilitylabelforcomponent:))

# pickerView(\_:accessibilityLabelForComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a string that identifies the picker view component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, accessibilityLabelForComponent component: Int) -> String?
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a label.

<a id="return-value"></a>

## Return Value

A succinct label, in a localized string, that identifies the picker view component.

<a id="Discussion"></a>

## Discussion

Implement this optional method to ensure that the accessibility element representing the picker view provides an appropriate label for each component. The system prefers the [pickerView(\_:accessibilityAttributedLabelForComponent:)](pickerview%28__accessibilityattributedlabelforcomponent_%29.md) method over this one. For in-depth information on how to create an appropriate label, see [Crafting Useful Labels and Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW6).

## See Also

### Providing descriptive information

- [pickerView(\_:accessibilityAttributedLabelForComponent:)](pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView(\_:accessibilityHintForComponent:)](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView(\_:accessibilityAttributedHintForComponent:)](pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView(\_:accessibilityUserInputLabelsForComponent:)](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView(\_:accessibilityAttributedUserInputLabelsForComponent:)](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)

# pickerView:accessibilityLabelForComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Returns a string that identifies the picker view component.

## Declaration

```objectivec
- (NSString *) pickerView:(UIPickerView *) pickerView accessibilityLabelForComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a label.

<a id="return-value"></a>

## Return Value

A succinct label, in a localized string, that identifies the picker view component.

<a id="Discussion"></a>

## Discussion

Implement this optional method to ensure that the accessibility element representing the picker view provides an appropriate label for each component. The system prefers the [pickerView:accessibilityAttributedLabelForComponent:](pickerview%28__accessibilityattributedlabelforcomponent_%29.md) method over this one. For in-depth information on how to create an appropriate label, see [Crafting Useful Labels and Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW6).

## See Also

### Providing descriptive information

- [pickerView:accessibilityAttributedLabelForComponent:](pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView:accessibilityHintForComponent:](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView:accessibilityAttributedHintForComponent:](pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView:accessibilityUserInputLabelsForComponent:](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView:accessibilityAttributedUserInputLabelsForComponent:](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)
