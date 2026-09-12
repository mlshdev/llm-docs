> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/alertaction](https://developer.apple.com/documentation/uikit/uilocalnotification/alertaction)

# alertAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The title of the action button or slider.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var alertAction: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a string or, preferably, a localized-string key (using [NSLocalizedString](../../foundation/nslocalizedstring.md)) as the value. The alert action is the title of the right button of the alert or the value of the unlock slider, where the value replaces “unlock” in “slide to unlock”. If you specify `nil`, and [alertBody](alertbody.md) is non-`nil`, “View” (localized to the preferred language) is used as the default value.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.

# alertAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The title of the action button or slider.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * alertAction;
```

<a id="Discussion"></a>

## Discussion

Assign a string or, preferably, a localized-string key (using [NSLocalizedString](../../foundation/nslocalizedstring.md)) as the value. The alert action is the title of the right button of the alert or the value of the unlock slider, where the value replaces “unlock” in “slide to unlock”. If you specify `nil`, and [alertBody](alertbody.md) is non-`nil`, “View” (localized to the preferred language) is used as the default value.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.
