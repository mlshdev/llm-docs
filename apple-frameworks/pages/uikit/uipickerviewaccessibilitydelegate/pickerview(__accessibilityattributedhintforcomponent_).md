> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilityattributedhintforcomponent:)](https://developer.apple.com/documentation/uikit/uipickerviewaccessibilitydelegate/pickerview(_:accessibilityattributedhintforcomponent:))

# pickerView(\_:accessibilityAttributedHintForComponent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an attributed string that describes the result of performing an action on the specified component.

## Declaration

```swift
optional func pickerView(_ pickerView: UIPickerView, accessibilityAttributedHintForComponent component: Int) -> NSAttributedString?
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a hint.

<a id="return-value"></a>

## Return Value

The localized attributed string that describes the results of performing an action on the specified component.

<a id="Discussion"></a>

## Discussion

Implement this optional method to ensure that the accessibility element representing the picker view provides an appropriate hint for each component. Your attributed string may include the [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md) attribute, which lets you use different language synthesizers for different parts of the string. The system prefers this method over the [pickerView(\_:accessibilityHintForComponent:)](pickerview%28__accessibilityhintforcomponent_%29.md) method.

For in-depth information on how to create an appropriate hint, see [Guidelines for Creating Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW11).

## See Also

### Providing descriptive information

- [pickerView(\_:accessibilityLabelForComponent:)](pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView(\_:accessibilityAttributedLabelForComponent:)](pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView(\_:accessibilityHintForComponent:)](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView(\_:accessibilityUserInputLabelsForComponent:)](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView(\_:accessibilityAttributedUserInputLabelsForComponent:)](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)

# pickerView:accessibilityAttributedHintForComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an attributed string that describes the result of performing an action on the specified component.

## Declaration

```objectivec
- (NSAttributedString *) pickerView:(UIPickerView *) pickerView accessibilityAttributedHintForComponent:(NSInteger) component;
```

## Parameters

- `pickerView`: The picker view object.
- `component`: The component in the picker view that requires a hint.

<a id="return-value"></a>

## Return Value

The localized attributed string that describes the results of performing an action on the specified component.

<a id="Discussion"></a>

## Discussion

Implement this optional method to ensure that the accessibility element representing the picker view provides an appropriate hint for each component. Your attributed string may include the [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md) attribute, which lets you use different language synthesizers for different parts of the string. The system prefers this method over the [pickerView:accessibilityHintForComponent:](pickerview%28__accessibilityhintforcomponent_%29.md) method.

For in-depth information on how to create an appropriate hint, see [Guidelines for Creating Hints](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html#//apple_ref/doc/uid/TP40008785-CH102-SW11).

## See Also

### Providing descriptive information

- [pickerView:accessibilityLabelForComponent:](pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView:accessibilityAttributedLabelForComponent:](pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView:accessibilityHintForComponent:](pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView:accessibilityUserInputLabelsForComponent:](pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView:accessibilityAttributedUserInputLabelsForComponent:](pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)
