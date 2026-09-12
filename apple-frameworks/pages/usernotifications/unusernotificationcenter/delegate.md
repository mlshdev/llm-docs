> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/delegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/delegate)

# delegate (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The notification center’s delegate.

## Declaration

```swift
weak var delegate: (any UNUserNotificationCenterDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to respond to user-selected actions and to process incoming notifications when your app is in the foreground. For example, you might use your delegate to silence notifications when your app is in the foreground.

To guarantee that your app responds to all actionable notifications, you must set the value of this property before your app finishes launching. For an iOS app, this means updating this property in the [application(\_:willFinishLaunchingWithOptions:)](../../uikit/uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) or [application(\_:didFinishLaunchingWithOptions:)](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of the app delegate. Notifications that cause your app to be launched or delivered shortly after these methods finish executing.

For more information about implementing the delegate methods, see [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md).

## See Also

### Processing received notifications

- [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [supportsContentExtensions](supportscontentextensions.md): A Boolean value that indicates whether the device supports notification content extensions.

# delegate (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The notification center’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UNUserNotificationCenterDelegate> delegate;
```

```objectivec
@property (atomic, weak, nullable) id<UNUserNotificationCenterDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use the delegate object to respond to user-selected actions and to process incoming notifications when your app is in the foreground. For example, you might use your delegate to silence notifications when your app is in the foreground.

To guarantee that your app responds to all actionable notifications, you must set the value of this property before your app finishes launching. For an iOS app, this means updating this property in the [application:willFinishLaunchingWithOptions:](../../uikit/uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) or [application:didFinishLaunchingWithOptions:](../../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) method of the app delegate. Notifications that cause your app to be launched or delivered shortly after these methods finish executing.

For more information about implementing the delegate methods, see [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md).

## See Also

### Processing received notifications

- [UNUserNotificationCenterDelegate](../unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
- [supportsContentExtensions](supportscontentextensions.md): A Boolean value that indicates whether the device supports notification content extensions.
