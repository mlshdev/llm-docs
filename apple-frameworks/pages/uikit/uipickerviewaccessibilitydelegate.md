> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewaccessibilitydelegate](https://developer.apple.com/documentation/uikit/uipickerviewaccessibilitydelegate)

# UIPickerViewAccessibilityDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods you can implement to provide accessibility information for individual components of a picker view.

## Declaration

```swift
@MainActor protocol UIPickerViewAccessibilityDelegate : UIPickerViewDelegate
```

## Topics

### Providing descriptive information

- [pickerView(\_:accessibilityLabelForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView(\_:accessibilityAttributedLabelForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView(\_:accessibilityHintForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView(\_:accessibilityAttributedHintForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView(\_:accessibilityUserInputLabelsForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView(\_:accessibilityAttributedUserInputLabelsForComponent:)](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIPickerViewDelegate](uipickerviewdelegate.md)

## See Also

### Elements

- [UIAccessibilityElement](uiaccessibilityelement.md): An element that should be accessible to users with disabilities, but that isn’t accessible by default.
- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for a scroll view.

# UIPickerViewAccessibilityDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods you can implement to provide accessibility information for individual components of a picker view.

## Declaration

```objectivec
@protocol UIPickerViewAccessibilityDelegate <UIPickerViewDelegate>
```

## Topics

### Providing descriptive information

- [pickerView:accessibilityLabelForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilitylabelforcomponent_%29.md): Returns a string that identifies the picker view component.
- [pickerView:accessibilityAttributedLabelForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributedlabelforcomponent_%29.md): Returns an attributed string that identifies the picker view component.
- [pickerView:accessibilityHintForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityhintforcomponent_%29.md): Returns a string that describes the result of performing an action on the component.
- [pickerView:accessibilityAttributedHintForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributedhintforcomponent_%29.md): Returns an attributed string that describes the result of performing an action on the specified component.
- [pickerView:accessibilityUserInputLabelsForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityuserinputlabelsforcomponent_%29.md)
- [pickerView:accessibilityAttributedUserInputLabelsForComponent:](uipickerviewaccessibilitydelegate/pickerview%28__accessibilityattributeduserinputlabelsforcomponent_%29.md)

## Relationships

### Inherits From

- [UIPickerViewDelegate](uipickerviewdelegate.md)

## See Also

### Elements

- [UIAccessibilityElement](uiaccessibilityelement.md): An element that should be accessible to users with disabilities, but that isn’t accessible by default.
- [UIScrollViewAccessibilityDelegate](uiscrollviewaccessibilitydelegate.md): A set of methods you can implement to provide accessibility information for a scroll view.
