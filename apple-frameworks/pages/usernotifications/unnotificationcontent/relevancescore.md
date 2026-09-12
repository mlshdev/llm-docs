> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationcontent/relevancescore](https://developer.apple.com/documentation/usernotifications/unnotificationcontent/relevancescore)

# relevanceScore (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The score the system uses to determine if the notification is the summary’s featured notification.

## Declaration

```swift
var relevanceScore: Double { get }
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

The system uses the `relevanceScore`, a value between `0` and `1`, to sort the notifications from your app. The highest score gets featured in the notification summary.

## See Also

### Reading system configuration

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.

# relevanceScore (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The score the system uses to determine if the notification is the summary’s featured notification.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double relevanceScore;
```

```objectivec
@property (atomic, assign, readonly) double relevanceScore;
```

## Mentioned In

- [Generating a remote notification](../generating-a-remote-notification.md)

<a id="Discussion"></a>

## Discussion

The system uses the `relevanceScore`, a value between `0` and `1`, to sort the notifications from your app. The highest score gets featured in the notification summary.

## See Also

### Reading system configuration

- [sound](sound.md): The sound that plays when the system delivers the notification.
- [interruptionLevel](interruptionlevel.md): The notification’s importance and required delivery timing.
- [UNNotificationInterruptionLevel](../unnotificationinterruptionlevel.md): Constants that indicate the importance and delivery timing of a notification.
- [filterCriteria](filtercriteria.md): The criteria the system evaluates to determine if it displays the notification in the current Focus.
