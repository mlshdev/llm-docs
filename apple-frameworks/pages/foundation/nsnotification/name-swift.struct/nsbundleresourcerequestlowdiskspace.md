> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsbundleresourcerequestlowdiskspace](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsbundleresourcerequestlowdiskspace)

# NSBundleResourceRequestLowDiskSpace (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.

> Use Background Assets instead.

## Declaration

```swift
static let NSBundleResourceRequestLowDiskSpace: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

After receiving this notification, the app should release any on-demand resources that are not required. Call [endAccessingResources()](../../nsbundleresourcerequest/endaccessingresources%28%29.md) to release the managed resources. If the app is in the background and the app does not free up enough space, it may be terminated.

> **Note**

>  This notification is generated independently of any other iOS notifications for low disk space.

# NSBundleResourceRequestLowDiskSpaceNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.

> Use Background Assets instead.

## Declaration

```objectivec
extern NSNotificationName const NSBundleResourceRequestLowDiskSpaceNotification;
```

<a id="Discussion"></a>

## Discussion

After receiving this notification, the app should release any on-demand resources that are not required. Call [endAccessingResources](../../nsbundleresourcerequest/endaccessingresources%28%29.md) to release the managed resources. If the app is in the background and the app does not free up enough space, it may be terminated.

> **Note**

>  This notification is generated independently of any other iOS notifications for low disk space.
