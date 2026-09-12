> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/preferredaction](https://developer.apple.com/documentation/uikit/uialertcontroller/preferredaction)

# preferredAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred action for the user to take from an alert.

## Declaration

```swift
var preferredAction: UIAlertAction? { get set }
```

<a id="Discussion"></a>

## Discussion

The preferred action is relevant for the [UIAlertController.Style.alert](style/alert.md) style only; it isn’t used by action sheets. When you specify a preferred action, the alert controller highlights the text of that action to give it emphasis. (If the alert also contains a cancel button, the preferred action receives the highlighting instead of the cancel button.) If the iOS device is connected to a physical keyboard, pressing the Return key triggers the preferred action.

The action object you assign to this property must have already been added to the alert controller’s list of actions. Assigning an object to this property before adding it with the [addAction(\_:)](addaction%28__%29.md) method is a programmer error.

The default value of this property is `nil`.

## See Also

### Configuring the user actions

- [addAction(\_:)](addaction%28__%29.md): Attaches an action object to the alert or action sheet.
- [actions](actions.md): The actions that the user can take in response to the alert or action sheet.

# preferredAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred action for the user to take from an alert.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIAlertAction * preferredAction;
```

<a id="Discussion"></a>

## Discussion

The preferred action is relevant for the [UIAlertControllerStyleAlert](style/alert.md) style only; it isn’t used by action sheets. When you specify a preferred action, the alert controller highlights the text of that action to give it emphasis. (If the alert also contains a cancel button, the preferred action receives the highlighting instead of the cancel button.) If the iOS device is connected to a physical keyboard, pressing the Return key triggers the preferred action.

The action object you assign to this property must have already been added to the alert controller’s list of actions. Assigning an object to this property before adding it with the [addAction:](addaction%28__%29.md) method is a programmer error.

The default value of this property is `nil`.

## See Also

### Configuring the user actions

- [addAction:](addaction%28__%29.md): Attaches an action object to the alert or action sheet.
- [actions](actions.md): The actions that the user can take in response to the alert or action sheet.
