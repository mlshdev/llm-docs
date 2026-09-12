> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilityattributedlabelforcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilityattributedlabelforcomponent:))

# pickerView(\_:accessibilityAttributedLabelForComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an attributed string that identifies the picker view component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, accessibilityAttributedLabelForComponent component: Int) -> NSAttributedString?
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a label.

<a id="return-value"></a>

## Return Value

The attributed string that identifies the picker view component

<a id="Discussion"></a>

## Discussion

Use this method to provide descriptive information for the components of a picker view. Your attributed string may include the [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md) attribute, which lets you use different language synthesizers for different parts of the string. The system prefers this method over the [pickerView(\_:accessibilityLabelForComponent:)](pickerview%28__accessibilitylabelforcomponent_%29.md) method. For in-depth information on how to create an appropriate descriptive string, see [Crafting Useful Labels and Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW6).

## See Also

### Providing descriptive information

- [pickerView(\_:accessibilityLabelForComponent:)](pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView(\_:accessibilityHintForComponent:)](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView(\_:accessibilityAttributedHintForComponent:)](pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView(\_:accessibilityUserInputLabelsForComponent:)](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView(\_:accessibilityAttributedUserInputLabelsForComponent:)](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)

# pickerView:accessibilityAttributedLabelForComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an attributed string that identifies the picker view component.

## Declaration

```objectivec
- (NSAttributedString *) pickerView:(UIPickerView *) pickerView accessibilityAttributedLabelForComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a label.

<a id="return-value"></a>

## Return Value

The attributed string that identifies the picker view component

<a id="Discussion"></a>

## Discussion

Use this method to provide descriptive information for the components of a picker view. Your attributed string may include the [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md) attribute, which lets you use different language synthesizers for different parts of the string. The system prefers this method over the [pickerView:accessibilityLabelForComponent:](pickerview%28__accessibilitylabelforcomponent_%29.md) method. For in-depth information on how to create an appropriate descriptive string, see [Crafting Useful Labels and Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW6).

## See Also

### Providing descriptive information

- [pickerView:accessibilityLabelForComponent:](pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView:accessibilityHintForComponent:](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView:accessibilityAttributedHintForComponent:](pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView:accessibilityUserInputLabelsForComponent:](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView:accessibilityAttributedUserInputLabelsForComponent:](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)
