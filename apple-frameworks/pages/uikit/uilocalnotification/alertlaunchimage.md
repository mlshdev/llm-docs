> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/alertlaunchimage](https://developer.apple.com/documentation/uikit/uilocalnotification/alertlaunchimage)

# alertLaunchImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var alertLaunchImage: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The string is a filename of an image file in the app bundle. This image is a launching image specified for a given notification; when the user taps the action button (for example, “View”) or moves the action slider, the image is used in place of the default launching image. If the value of this property is `nil` (the default), the system either uses the previous snapshot, uses the image identified by the `UILaunchImageFile` key in the app’s `Info.plist` file, or falls back to `Default.png`.

The value of this key has the exact same semantics as `UILaunchImageFile`. For more about this key, see the [Information Property List Key Reference](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009247).

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.

# alertLaunchImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * alertLaunchImage;
```

<a id="Discussion"></a>

## Discussion

The string is a filename of an image file in the app bundle. This image is a launching image specified for a given notification; when the user taps the action button (for example, “View”) or moves the action slider, the image is used in place of the default launching image. If the value of this property is `nil` (the default), the system either uses the previous snapshot, uses the image identified by the `UILaunchImageFile` key in the app’s `Info.plist` file, or falls back to `Default.png`.

The value of this key has the exact same semantics as `UILaunchImageFile`. For more about this key, see the [Information Property List Key Reference](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009247).

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [alertTitle](alerttitle.md): Deprecated. A short description of the reason for the alert.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.
