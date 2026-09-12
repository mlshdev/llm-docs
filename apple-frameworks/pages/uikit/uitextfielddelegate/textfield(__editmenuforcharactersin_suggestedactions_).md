> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:editmenuforcharactersin:suggestedactions:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:editmenuforcharactersin:suggestedactions:))

# textField(\_:editMenuForCharactersIn:suggestedActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate for the menu to display in the text field, based on the text range and actions the system provides.

## Declaration

```swift
optional func textField(_ textField: UITextField, editMenuForCharactersIn range: NSRange, suggestedActions: [UIMenuElement]) -> UIMenu?
```

## Parameters

- `textField`: The text field requesting the menu.
- `range`: The character range the menu is presenting for.
- `suggestedActions`: The actions and commands the system suggests.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. Return `nil` to present the default system menu.

<a id="Discussion"></a>

## Discussion

The following example returns a menu that includes a “Show in Large Type” action.

```swift
func textField(_ textField: UITextField, editMenuForCharactersIn range: NSRange, suggestedActions: [UIMenuElement]) -> UIMenu? {
    let showLargeAction = UIAction(title: "Show in Large Type", image: UIImage(systemName: "a.magnify")) { action in
            // Include "Show in Large Type" action.
    }

    var actions = suggestedActions
    actions.append(showLargeAction)
    return UIMenu(children: actions)
}
```

# textField:editMenuForCharactersInRange:suggestedActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate for the menu to display in the text field, based on the text range and actions the system provides.

## Declaration

```objectivec
- (UIMenu *) textField:(UITextField *) textField editMenuForCharactersInRange:(NSRange) range suggestedActions:(NSArray<UIMenuElement *> *) suggestedActions;
```

## Parameters

- `textField`: The text field requesting the menu.
- `range`: The character range the menu is presenting for.
- `suggestedActions`: The actions and commands the system suggests.

<a id="return-value"></a>

## Return Value

Returns a menu describing the desired menu hierarchy. Return `nil` to present the default system menu.

<a id="Discussion"></a>

## Discussion

The following example returns a menu that includes a “Show in Large Type” action.

```swift
func textField(_ textField: UITextField, editMenuForCharactersIn range: NSRange, suggestedActions: [UIMenuElement]) -> UIMenu? {
    let showLargeAction = UIAction(title: "Show in Large Type", image: UIImage(systemName: "a.magnify")) { action in
            // Include "Show in Large Type" action.
    }

    var actions = suggestedActions
    actions.append(showLargeAction)
    return UIMenu(children: actions)
}
```
