> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/authorizationstatus](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The app’s ability to schedule and receive local and remote notifications.

## Declaration

```swift
var authorizationStatus: UNAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [UNAuthorizationStatus.authorized](../unauthorizationstatus/authorized.md), your app is allowed to schedule and receive local and remote notifications. When authorized, use the [alertSetting](alertsetting.md), [badgeSetting](badgesetting.md), and [soundSetting](soundsetting.md) properties to specify which types of interactions are allowed. When the value of the property is [UNAuthorizationStatus.denied](../unauthorizationstatus/denied.md), the system doesn’t deliver notifications to your app, and the system ignores any attempts to schedule local notifications.

The value of this property is [UNAuthorizationStatus.notDetermined](../unauthorizationstatus/notdetermined.md) if your app has never requested authorization using the [requestAuthorization(options:completionHandler:)](../unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) method.

## See Also

### Getting the Authorization Status

- [UNAuthorizationStatus](../unauthorizationstatus.md): Constants indicating whether the app is allowed to schedule notifications.

# authorizationStatus (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The app’s ability to schedule and receive local and remote notifications.

## Declaration

```objectivec
@property (nonatomic, readonly) UNAuthorizationStatus authorizationStatus;
```

```objectivec
@property (atomic, readonly) UNAuthorizationStatus authorizationStatus;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [UNAuthorizationStatusAuthorized](../unauthorizationstatus/authorized.md), your app is allowed to schedule and receive local and remote notifications. When authorized, use the [alertSetting](alertsetting.md), [badgeSetting](badgesetting.md), and [soundSetting](soundsetting.md) properties to specify which types of interactions are allowed. When the value of the property is [UNAuthorizationStatusDenied](../unauthorizationstatus/denied.md), the system doesn’t deliver notifications to your app, and the system ignores any attempts to schedule local notifications.

The value of this property is [UNAuthorizationStatusNotDetermined](../unauthorizationstatus/notdetermined.md) if your app has never requested authorization using the [requestAuthorizationWithOptions:completionHandler:](../unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md) method.

## See Also

### Getting the Authorization Status

- [UNAuthorizationStatus](../unauthorizationstatus.md): Constants indicating whether the app is allowed to schedule notifications.
