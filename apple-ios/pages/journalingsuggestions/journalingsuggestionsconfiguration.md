> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionsconfiguration](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionsconfiguration)

# JournalingSuggestionsConfiguration

**Framework:** Journaling Suggestions  
**Kind:** Class  
**Availability:** iOS 26.0+

The configuration for Journaling Suggestion notifications.

## Declaration

```swift
class JournalingSuggestionsConfiguration
```

## Mentioned In

- [Receiving journaling suggestions system notifications](receiving-journaling-suggestions-from-system-notifications.md)

<a id="overview"></a>

## Overview

Create an instance of this class and refer to [notificationSchedule](journalingsuggestionsconfiguration/notificationschedule-swift.property.md), which provides a read-only view of the Journaling Suggestion notification configuration, as it resides in Settings.

## Topics

### Initializing a configuration

- [init()](journalingsuggestionsconfiguration/init%28%29.md): Creates an empty configuration object.

### Inspecting the notification schedule

- [notificationSchedule](journalingsuggestionsconfiguration/notificationschedule-swift.property.md): The schedule for Journaling Suggestion notifications, as it resides in Settings.
- [JournalingSuggestionsConfiguration.NotificationSchedule](journalingsuggestionsconfiguration/notificationschedule-swift.enum.md): Possible values for the Journaling Suggestions notifications setting.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)

## See Also

### Notifications

- [Receiving journaling suggestions system notifications](receiving-journaling-suggestions-from-system-notifications.md): Register your app to receive journaling suggestions when a person taps a system notification.
- [JournalingSuggestionPresentationToken](journalingsuggestionpresentationtoken.md): A container for a Journaling Suggestion identifier.
