> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationpresentationoptionnone](https://developer.apple.com/documentation/usernotifications/unnotificationpresentationoptionnone)

# UNNotificationPresentationOptionNone

**Interface language:** Objective-C

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

No alert.

## Declaration

```objectivec
static const UNNotificationPresentationOptions UNNotificationPresentationOptionNone;
```

<a id="Discussion"></a>

## Discussion

Specify this constant when you want to silence any user interactions for a notification.

## See Also

### Receiving Notifications

- [userNotificationCenter:willPresentNotification:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__willpresent_withcompletionhandler_%29.md): Asks the delegate how to handle a notification that arrived while the app was running in the foreground.
- [UNNotificationPresentationOptions](unnotificationpresentationoptions.md): Constants indicating how to present a notification in a foreground app.
