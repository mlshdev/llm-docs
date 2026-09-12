> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmousedidbecomecurrentnotification](https://developer.apple.com/documentation/gamecontroller/gcmousedidbecomecurrentnotification)

# GCMouseDidBecomeCurrentNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that posts when a mouse becomes the most recent mouse that the user connects.

## Declaration

```objectivec
extern NSString * const GCMouseDidBecomeCurrentNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is a [GCMouse](gcmouse.md) object that represents the current mouse. For example, set the mouse input change handlers when you receive this notification.

The system posts this notification on the main thread.

## See Also

### Handling multiple mouse devices

- [current](gcmouse/current.md): The most recent mouse that the user connects.
- [GCMouseDidStopBeingCurrentNotification](gcmousedidstopbeingcurrentnotification.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.
