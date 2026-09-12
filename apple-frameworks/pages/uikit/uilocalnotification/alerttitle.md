> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/alerttitle](https://developer.apple.com/documentation/uikit/uilocalnotification/alerttitle)

# alertTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.2+ (deprecated in 10.0) · iPadOS 8.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A short description of the reason for the alert.

## Declaration

```swift
var alertTitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a short description of the reason for the alert. You may specify a string with the text you want to display or you may specify a string to use as a lookup key in your app’s `Localizable.strings` file. The default value of this property is `nil`.

Title strings should be short, usually only a couple of words describing the reason for the notification. Apple Watch displays the title string as part of the short look notification interface, which has limited space.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.

# alertTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.2+ (deprecated in 10.0) · iPadOS 8.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A short description of the reason for the alert.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * alertTitle;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a short description of the reason for the alert. You may specify a string with the text you want to display or you may specify a string to use as a lookup key in your app’s `Localizable.strings` file. The default value of this property is `nil`.

Title strings should be short, usually only a couple of words describing the reason for the notification. Apple Watch displays the title string as part of the short look notification interface, which has limited space.

## See Also

### Composing the alert

- [alertBody](alertbody.md): Deprecated. The message displayed in the notification alert.
- [alertAction](alertaction.md): Deprecated. The title of the action button or slider.
- [hasAction](hasaction.md): Deprecated. A Boolean value that controls whether the notification shows or hides the alert action.
- [alertLaunchImage](alertlaunchimage.md): Deprecated. Identifies the image used as the launch image when the user taps (or slides) the action button (or slider).
- [category](category.md): Deprecated. The name of a group of actions to display in the alert.
