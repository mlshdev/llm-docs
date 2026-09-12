> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/addaction(_:)](https://developer.apple.com/documentation/uikit/uialertcontroller/addaction(_:))

# addAction(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Attaches an action object to the alert or action sheet.

## Declaration

```swift
func addAction(_ action: UIAlertAction)
```

## Parameters

- `action`: The action object to display as part of the alert. Actions are displayed as buttons in the alert. The action object provides the button text and the action to be performed when that button is tapped.

<a id="Discussion"></a>

## Discussion

If your alert has multiple actions, the order in which you add those actions determines their order in the resulting alert or action sheet.

## See Also

### Configuring the user actions

- [actions](actions.md): The actions that the user can take in response to the alert or action sheet.
- [preferredAction](preferredaction.md): The preferred action for the user to take from an alert.

# addAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Attaches an action object to the alert or action sheet.

## Declaration

```objectivec
- (void) addAction:(UIAlertAction *) action;
```

## Parameters

- `action`: The action object to display as part of the alert. Actions are displayed as buttons in the alert. The action object provides the button text and the action to be performed when that button is tapped.

<a id="Discussion"></a>

## Discussion

If your alert has multiple actions, the order in which you add those actions determines their order in the resulting alert or action sheet.

## See Also

### Configuring the user actions

- [actions](actions.md): The actions that the user can take in response to the alert or action sheet.
- [preferredAction](preferredaction.md): The preferred action for the user to take from an alert.
