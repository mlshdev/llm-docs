> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/alertbody](https://developer.apple.com/documentation/uikit/uilocalnotification/alertbody)

# alertBody (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The message displayed in the notification alert.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var alertBody: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a string or, preferably, a localized-string key (using [NSLocalizedString](../../foundation/nslocalizedstring.md)) as the value of the message. If the value of this property is non-`nil`, an alert is displayed. The default value is `nil` (no alert). Printf style escape characters are stripped from the string prior to display; to include a percent symbol (%) in the message, use two percent symbols (%%).

## See Also

### Composing the alert

- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.

# alertBody (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The message displayed in the notification alert.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * alertBody;
```

<a id="Discussion"></a>

## Discussion

Assign a string or, preferably, a localized-string key (using [NSLocalizedString](../../foundation/nslocalizedstring.md)) as the value of the message. If the value of this property is non-`nil`, an alert is displayed. The default value is `nil` (no alert). Printf style escape characters are stripped from the string prior to display; to include a percent symbol (%) in the message, use two percent symbols (%%).

## See Also

### Composing the alert

- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.
