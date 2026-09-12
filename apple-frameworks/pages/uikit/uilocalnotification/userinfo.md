> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/userinfo](https://developer.apple.com/documentation/uikit/uilocalnotification/userinfo)

# userInfo (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A dictionary for passing custom information to the notified app.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

You may add arbitrary key-value pairs to this dictionary. However, the keys and values must be valid [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44); if any are not, an exception is raised.

## See Also

### Configuring other parts of the notification

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number to display as the app’s icon badge.
- [soundName](soundname.md): Deprecated. The name of the file containing the sound to play when an alert is displayed.

# userInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

A dictionary for passing custom information to the notified app.

> For more information, see [UILocalNotification](../uilocalnotification.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

You may add arbitrary key-value pairs to this dictionary. However, the keys and values must be valid [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44); if any are not, an exception is raised.

## See Also

### Configuring other parts of the notification

- [applicationIconBadgeNumber](applicationiconbadgenumber.md): Deprecated. The number to display as the app’s icon badge.
- [soundName](soundname.md): Deprecated. The name of the file containing the sound to play when an alert is displayed.
