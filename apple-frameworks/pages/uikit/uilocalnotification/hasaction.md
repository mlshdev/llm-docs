> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/hasaction](https://developer.apple.com/documentation/uikit/uilocalnotification/hasaction)

# hasAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A Boolean value that controls whether the notification shows or hides the alert action.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var hasAction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Assign [false](https://developer.apple.com/documentation/swift/false) to this property to hide the alert button or slider. (This effect requires [alertBody](alertbody.md) to be non-`nil`.) The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.

# hasAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A Boolean value that controls whether the notification shows or hides the alert action.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic) BOOL hasAction;
```

<a id="Discussion"></a>

## Discussion

Assign [false](https://developer.apple.com/documentation/swift/false) to this property to hide the alert button or slider. (This effect requires [alertBody](alertbody.md) to be non-`nil`.) The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.
