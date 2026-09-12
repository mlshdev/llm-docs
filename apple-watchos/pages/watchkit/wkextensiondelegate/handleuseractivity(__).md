> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/handleuseractivity(_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleuseractivity(_:))

# handleUserActivity(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Responds to Handoff–related activity from complications and notifications.

## Declaration

```swift
optional func handleUserActivity(_ userInfo: [AnyHashable : Any]?)
```

## Parameters

- `userInfo`: The dictionary containing data about the activity.

<a id="Discussion"></a>

## Discussion

Use this method to respond to Handoff–related activity. WatchKit calls this method when your app launches as a result of a Handoff action. Use the information in the provided `userInfo` dictionary to determine how you want to respond to the action. For example, you might decide to display a specific interface controller.

The default implementation of this method does nothing. When overriding this method, don’t call `super`.

> **Note**

>  If you are creating a SwiftUI app for watchOS 7 or later, use the [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) modifier instead.

<a id="Handling-Activities-from-Complications-and-Notifications"></a>

### Handling Activities from Complications and Notifications

WatchKit calls this method when your app launches from a complication or notification. Update your app’s user interface based on the `userInfo` parameter. Your app should seamlessly continue the interaction from the complication or notification.

When your app launches because the user tapped on a complication, the `userInfo` dictionary contains the [CLKLaunchedTimelineEntryDateKey](https://developer.apple.com/documentation/clockkit/clklaunchedtimelineentrydatekey) key. The value is a Date object that indicates when the complication launched.

## See Also

### Related Documentation

- [updateUserActivity(\_:userInfo:webpageURL:)](../wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.

### Coordinating handoff activity

- [handle(\_:)](handle%28__%29-5pyj1.md): Deprecated. Responds to Handoff–related activity from Siri.

# handleUserActivity: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Responds to Handoff–related activity from complications and notifications.

## Declaration

```objectivec
- (void) handleUserActivity:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: The dictionary containing data about the activity.

<a id="Discussion"></a>

## Discussion

Use this method to respond to Handoff–related activity. WatchKit calls this method when your app launches as a result of a Handoff action. Use the information in the provided `userInfo` dictionary to determine how you want to respond to the action. For example, you might decide to display a specific interface controller.

The default implementation of this method does nothing. When overriding this method, don’t call `super`.

> **Note**

>  If you are creating a SwiftUI app for watchOS 7 or later, use the [onContinueUserActivity(\_:perform:)](https://developer.apple.com/documentation/swiftui/view/oncontinueuseractivity%28_:perform:%29) modifier instead.

<a id="Handling-Activities-from-Complications-and-Notifications"></a>

### Handling Activities from Complications and Notifications

WatchKit calls this method when your app launches from a complication or notification. Update your app’s user interface based on the `userInfo` parameter. Your app should seamlessly continue the interaction from the complication or notification.

When your app launches because the user tapped on a complication, the `userInfo` dictionary contains the [CLKLaunchedTimelineEntryDateKey](https://developer.apple.com/documentation/clockkit/clklaunchedtimelineentrydatekey) key. The value is a Date object that indicates when the complication launched.

## See Also

### Related Documentation

- [updateUserActivity:userInfo:webpageURL:](../wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.

### Coordinating handoff activity

- [handleActivity:](handle%28__%29-5pyj1.md): Deprecated. Responds to Handoff–related activity from Siri.
