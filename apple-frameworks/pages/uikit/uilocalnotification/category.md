> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/category](https://developer.apple.com/documentation/uikit/uilocalnotification/category)

# category (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The name of a group of actions to display in the alert.

## Declaration

```swift
var category: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the category name associated with a registered [UIUserNotificationSettings](../uiusernotificationsettings.md) object. When the alert for the local notification is displayed, the system uses the string you specify to look up the group and retrieve its actions. It then adds a button to the alert for each action defined by the group. When the user taps one of those buttons, the app is woken up (or launched) and given a chance to perform the designated action. If the specified category name does not belong to a registered group of actions, the alert does not display any additional action buttons.

Specifying custom actions is optional. The value of this property is `nil` by default.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).

# category (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The name of a group of actions to display in the alert.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * category;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the category name associated with a registered [UIUserNotificationSettings](../uiusernotificationsettings.md) object. When the alert for the local notification is displayed, the system uses the string you specify to look up the group and retrieve its actions. It then adds a button to the alert for each action defined by the group. When the user taps one of those buttons, the app is woken up (or launched) and given a chance to perform the designated action. If the specified category name does not belong to a registered group of actions, the alert does not display any additional action buttons.

Specifying custom actions is optional. The value of this property is `nil` by default.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
