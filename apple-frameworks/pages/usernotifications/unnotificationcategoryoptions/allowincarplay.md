> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcategoryoptions/allowincarplay](https://developer.apple.com/documentation/usernotifications/unnotificationcategoryoptions/allowincarplay)

# allowInCarPlay (Swift)

**Framework:** User Notifications  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Allow CarPlay to display notifications of this type.

## Declaration

```swift
static var allowInCarPlay: UNNotificationCategoryOptions { get }
```

<a id="Discussion"></a>

## Discussion

Apps must be approved for CarPlay overall and then you must enable CarPlay for the notification types you want displayed. If a category doesn’t explicitly contain this option, notifications of that type aren’t displayed in a CarPlay environment.

## See Also

### Customizing a category

- [allowAnnouncement](allowannouncement.md): Deprecated. An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.

# UNNotificationCategoryOptionAllowInCarPlay (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Allow CarPlay to display notifications of this type.

## Declaration

```objectivec
UNNotificationCategoryOptionAllowInCarPlay
```

<a id="Discussion"></a>

## Discussion

Apps must be approved for CarPlay overall and then you must enable CarPlay for the notification types you want displayed. If a category doesn’t explicitly contain this option, notifications of that type aren’t displayed in a CarPlay environment.

## See Also

### Customizing a category

- [UNNotificationCategoryOptionAllowAnnouncement](allowannouncement.md): Deprecated. An option that grants Siri permission to read incoming messages out loud when the user has a compatible audio output device connected.
