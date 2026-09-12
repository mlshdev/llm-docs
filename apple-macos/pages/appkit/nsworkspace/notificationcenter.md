> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/notificationcenter](https://developer.apple.com/documentation/appkit/nsworkspace/notificationcenter)

# notificationCenter (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The notification center for workspace notifications.

## Declaration

```swift
var notificationCenter: NotificationCenter { get }
```

<a id="return-value"></a>

## Return Value

The notification center object associated with the workspace

<a id="Discussion"></a>

## Discussion

This notification center object delivers the workspace-related notifications described in Responding to Environment Notifications.

You can access this object safely from any thread in your app in macOS 10.6 and later.

# notificationCenter (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The notification center for workspace notifications.

## Declaration

```objectivec
@property (strong, readonly) NSNotificationCenter * notificationCenter;
```

<a id="return-value"></a>

## Return Value

The notification center object associated with the workspace

<a id="Discussion"></a>

## Discussion

This notification center object delivers the workspace-related notifications described in Responding to Environment Notifications.

You can access this object safely from any thread in your app in macOS 10.6 and later.
