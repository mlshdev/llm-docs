> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategoryoptions/allowannouncement](https://developer.apple.com/documentation/usernotifications/unnotificationcategoryoptions/allowannouncement)

# allowAnnouncement (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.

> Announcement option is ignored

## Declaration

```swift
static var allowAnnouncement: UNNotificationCategoryOptions { get }
```

<a id="Discussion"></a>

## Discussion

When Siri reads an incoming message to the user, Siri reads the message locally on the userʼs device. Siri doesn’t send the message’s contents or sender to Apple servers. For more information about Siri’s on-device processing, visit [Apple’s Privacy Page](https://www.apple.com/privacy/features/).

## See Also

### Customizing a category

- [allowInCarPlay](allowincarplay.md): Allow CarPlay to display notifications of this type.

# UNNotificationCategoryOptionAllowAnnouncement (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 7.0)

An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.

> Announcement option is ignored

## Declaration

```objectivec
UNNotificationCategoryOptionAllowAnnouncement
```

<a id="Discussion"></a>

## Discussion

When Siri reads an incoming message to the user, Siri reads the message locally on the userʼs device. Siri doesn’t send the message’s contents or sender to Apple servers. For more information about Siri’s on-device processing, visit [Apple’s Privacy Page](https://www.apple.com/privacy/features/).

## See Also

### Customizing a category

- [UNNotificationCategoryOptionAllowInCarPlay](allowincarplay.md): Allow CarPlay to display notifications of this type.
