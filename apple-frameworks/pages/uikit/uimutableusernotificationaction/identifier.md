> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationaction/identifier](https://developer.apple.com/documentation/uikit/uimutableusernotificationaction/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The string that you use internally to identify the action.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```swift
var identifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The system passes this string to the [application(\_:handleActionWithIdentifier:for:completionHandler:)](../uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) or [application(\_:handleActionWithIdentifier:forRemoteNotification:completionHandler:)](../uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) method of the app delegate when the user chooses the action.

## See Also

### Getting the action information

- [title](title.md): Deprecated. The localized string to use as the button title for the action.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The string that you use internally to identify the action.

> For more information, see [UIMutableUserNotificationAction](../uimutableusernotificationaction.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

The system passes this string to the [application:handleActionWithIdentifier:forLocalNotification:completionHandler:](../uiapplicationdelegate/application%28__handleactionwithidentifier_for_completionhandler_%29.md) or [application:handleActionWithIdentifier:forRemoteNotification:completionHandler:](../uiapplicationdelegate/application%28__handleactionwithidentifier_forremotenotification_completionhandler_%29.md) method of the app delegate when the user chooses the action.

## See Also

### Getting the action information

- [title](title.md): Deprecated. The localized string to use as the button title for the action.
