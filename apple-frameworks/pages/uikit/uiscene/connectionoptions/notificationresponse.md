> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/notificationresponse](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/notificationresponse)

# notificationResponse (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A person’s response to one of your app’s notifications.

## Declaration

```swift
var notificationResponse: UNNotificationResponse? { get }
```

<a id="Discussion"></a>

## Discussion

When UIKit connects a scene in order to process a notification, it puts the response object in this property. Use the information in this object to configure your scene. If a person selected one of the notification’s actions, perform that action.

# notificationResponse (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A person’s response to one of your app’s notifications.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UNNotificationResponse * notificationResponse;
```

<a id="Discussion"></a>

## Discussion

When UIKit connects a scene in order to process a notification, it puts the response object in this property. Use the information in this object to configure your scene. If a person selected one of the notification’s actions, perform that action.
