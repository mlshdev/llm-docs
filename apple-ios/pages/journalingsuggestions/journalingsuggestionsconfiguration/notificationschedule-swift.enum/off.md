> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionsconfiguration/notificationschedule-swift.enum/off](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionsconfiguration/notificationschedule-swift.enum/off)

# JournalingSuggestionsConfiguration.NotificationSchedule.off

**Framework:** Journaling Suggestions  
**Kind:** Case  
**Availability:** iOS 26.0+

An option that indicates the app doesn’t receive notifications.

## Declaration

```swift
case off
```

## Mentioned In

- [Receiving journaling suggestions system notifications](../../receiving-journaling-suggestions-from-system-notifications.md)

<a id="discussion"></a>

## Discussion

This value can mean one or more possible causes:

- Journaling Suggestions aren’t enabled in Settings.
- Your app isn’t a preferred journal app in Settings.
- Journaling Suggestions are on but notifications are off in Settings.
- Your app has incomplete notification setup (for example, it’s missing the [JSNotificationURLFormat](https://developer.apple.com/documentation/bundleresources/information-property-list/jsnotificationurlformat) target property).

## See Also

### Identifying a notification schedule

- [JournalingSuggestionsConfiguration.NotificationSchedule.smart](smart.md): An option that indicates the system personalizes the notification schedule for the person.
- [JournalingSuggestionsConfiguration.NotificationSchedule.custom](custom.md): An option that indicates the person chooses a specific notification schedule in Settings.
