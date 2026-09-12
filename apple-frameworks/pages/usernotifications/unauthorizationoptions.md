> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unauthorizationoptions](https://developer.apple.com/documentation/usernotifications/unauthorizationoptions)

# UNAuthorizationOptions (Swift)

**Framework:** User Notifications  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Options that determine the authorized features of local and remote notifications.

## Declaration

```swift
struct UNAuthorizationOptions
```

## Topics

### Options

- [badge](unauthorizationoptions/badge.md): The ability to update the app’s badge.
- [sound](unauthorizationoptions/sound.md): The ability to play sounds.
- [alert](unauthorizationoptions/alert.md): The ability to display alerts.
- [carPlay](unauthorizationoptions/carplay.md): The ability to display notifications in a CarPlay environment.
- [criticalAlert](unauthorizationoptions/criticalalert.md): The ability to play sounds for critical alerts.
- [providesAppNotificationSettings](unauthorizationoptions/providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [provisional](unauthorizationoptions/provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.

### Initializers

- [init(rawValue:)](unauthorizationoptions/init%28rawvalue_%29.md): Initializes an authorization options constant using the specified raw value.

### Deprecated

- [announcement](unauthorizationoptions/announcement.md): Deprecated. The ability for Siri to automatically read out messages over AirPods.
- [timeSensitive](unauthorizationoptions/timesensitive.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Requesting authorization

- [requestAuthorization(options:completionHandler:)](unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md): Requests a person’s authorization to allow local and remote notifications for your app.

# UNAuthorizationOptions (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Options that determine the authorized features of local and remote notifications.

## Declaration

```objectivec
enum UNAuthorizationOptions : NSUInteger;
```

## Topics

### Options

- [UNAuthorizationOptionBadge](unauthorizationoptions/badge.md): The ability to update the app’s badge.
- [UNAuthorizationOptionSound](unauthorizationoptions/sound.md): The ability to play sounds.
- [UNAuthorizationOptionAlert](unauthorizationoptions/alert.md): The ability to display alerts.
- [UNAuthorizationOptionCarPlay](unauthorizationoptions/carplay.md): The ability to display notifications in a CarPlay environment.
- [UNAuthorizationOptionCriticalAlert](unauthorizationoptions/criticalalert.md): The ability to play sounds for critical alerts.
- [UNAuthorizationOptionProvidesAppNotificationSettings](unauthorizationoptions/providesappnotificationsettings.md): An option indicating the system should display a button for in-app notification settings.
- [UNAuthorizationOptionProvisional](unauthorizationoptions/provisional.md): The ability to post noninterrupting notifications provisionally to the Notification Center.

### No Authorization

- [UNAuthorizationOptionNone](unauthorizationoptionnone.md): No authorization options.

### Deprecated

- [UNAuthorizationOptionAnnouncement](unauthorizationoptions/announcement.md): Deprecated. The ability for Siri to automatically read out messages over AirPods.
- [UNAuthorizationOptionTimeSensitive](unauthorizationoptions/timesensitive.md): Deprecated.

## See Also

### Requesting authorization

- [requestAuthorizationWithOptions:completionHandler:](unusernotificationcenter/requestauthorization%28options_completionhandler_%29.md): Requests a person’s authorization to allow local and remote notifications for your app.
