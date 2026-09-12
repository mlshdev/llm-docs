> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionsconfiguration/notificationschedule-swift.enum](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionsconfiguration/notificationschedule-swift.enum)

# JournalingSuggestionsConfiguration.NotificationSchedule

**Framework:** Journaling Suggestions  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Possible values for the Journaling Suggestions notifications setting.

## Declaration

```swift
enum NotificationSchedule
```

<a id="overview"></a>

## Overview

When [notificationSchedule](notificationschedule-swift.property.md) is [JournalingSuggestionsConfiguration.NotificationSchedule.smart](notificationschedule-swift.enum/smart.md), the system personalizes the schedule according to the person’s unique routines. The value is [JournalingSuggestionsConfiguration.NotificationSchedule.custom](notificationschedule-swift.enum/custom.md) if the person chooses a specific schedule in Settings.

An [JournalingSuggestionsConfiguration.NotificationSchedule.off](notificationschedule-swift.enum/off.md) value can mean:

- Journaling Suggestions aren’t enabled in Settings.
- Your app isn’t a preferred journal app in Settings.
- Journaling Suggestions are on but notifications are off in Settings.
- Your app has incomplete notification setup (for example, it’s missing the [JSNotificationURLFormat](https://developer.apple.com/documentation/bundleresources/information-property-list/jsnotificationurlformat) target property).

For more information on notifications, see [Receiving journaling suggestions system notifications](../receiving-journaling-suggestions-from-system-notifications.md).

## Topics

### Identifying a notification schedule

- [JournalingSuggestionsConfiguration.NotificationSchedule.smart](notificationschedule-swift.enum/smart.md): An option that indicates the system personalizes the notification schedule for the person.
- [JournalingSuggestionsConfiguration.NotificationSchedule.custom](notificationschedule-swift.enum/custom.md): An option that indicates the person chooses a specific notification schedule in Settings.
- [JournalingSuggestionsConfiguration.NotificationSchedule.off](notificationschedule-swift.enum/off.md): An option that indicates the app doesn’t receive notifications.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Inspecting the notification schedule

- [notificationSchedule](notificationschedule-swift.property.md): The schedule for Journaling Suggestion notifications, as it resides in Settings.
