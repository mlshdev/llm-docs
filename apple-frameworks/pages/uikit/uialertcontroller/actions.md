> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontroller/actions](https://developer.apple.com/documentation/uikit/uialertcontroller/actions)

# actions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The actions that the user can take in response to the alert or action sheet.

## Declaration

```swift
var actions: [UIAlertAction] { get }
```

<a id="Discussion"></a>

## Discussion

The actions are in the order in which you added them to the alert controller. This order also corresponds to the order in which they’re displayed in the alert or action sheet. The second action in the array is displayed below the first, the third is displayed below the second, and so on.

## See Also

### Configuring the user actions

- [addAction(\_:)](addaction%28__%29.md): Attaches an action object to the alert or action sheet.
- [preferredAction](preferredaction.md): The preferred action for the user to take from an alert.

# actions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The actions that the user can take in response to the alert or action sheet.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIAlertAction *> * actions;
```

<a id="Discussion"></a>

## Discussion

The actions are in the order in which you added them to the alert controller. This order also corresponds to the order in which they’re displayed in the alert or action sheet. The second action in the array is displayed below the first, the third is displayed below the second, and so on.

## See Also

### Configuring the user actions

- [addAction:](addaction%28__%29.md): Attaches an action object to the alert or action sheet.
- [preferredAction](preferredaction.md): The preferred action for the user to take from an alert.
