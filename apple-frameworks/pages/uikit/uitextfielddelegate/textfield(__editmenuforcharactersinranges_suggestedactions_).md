> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:editmenuforcharactersinranges:suggestedactions:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:editmenuforcharactersinranges:suggestedactions:))

# textField(\_:editMenuForCharactersInRanges:suggestedActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
optional func textField(_ textField: UITextField, editMenuForCharactersInRanges ranges: [NSValue], suggestedActions: [UIMenuElement]) -> UIMenu?
```

## Parameters

- `textField`: The text field requesting the menu.
- `ranges`: The text ranges for which the menu is presented for.
- `suggestedActions`: The actions and commands that the system suggests.

<a id="return-value"></a>

## Return Value

Return a UIMenu describing the desired menu hierarchy. Return @c nil to present the default system menu.

<a id="discussion"></a>

## Discussion

Asks the delegate for the menu to be shown for the specified `ranges`.

# textField:editMenuForCharactersInRanges:suggestedActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
- (UIMenu *) textField:(UITextField *) textField editMenuForCharactersInRanges:(NSArray<NSValue *> *) ranges suggestedActions:(NSArray<UIMenuElement *> *) suggestedActions;
```

## Parameters

- `textField`: The text field requesting the menu.
- `ranges`: The text ranges for which the menu is presented for.
- `suggestedActions`: The actions and commands that the system suggests.

<a id="return-value"></a>

## Return Value

Return a UIMenu describing the desired menu hierarchy. Return @c nil to present the default system menu.

<a id="discussion"></a>

## Discussion

Asks the delegate for the menu to be shown for the specified `ranges`.
