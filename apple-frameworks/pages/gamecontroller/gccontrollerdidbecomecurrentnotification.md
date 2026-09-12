> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdidbecomecurrentnotification](https://developer.apple.com/documentation/gamecontroller/gccontrollerdidbecomecurrentnotification)

# GCControllerDidBecomeCurrentNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that posts when a controller becomes the current controller.

## Declaration

```objectivec
extern NSString * const GCControllerDidBecomeCurrentNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the [GCController](gccontroller.md) object that’s current.

The system posts this notification on the main thread.

## See Also

### Handling multiple controllers

- [current](gccontroller/current.md): The most recently used game controller.
- [GCControllerDidStopBeingCurrentNotification](gccontrollerdidstopbeingcurrentnotification.md): A notification that posts when a controller stops being the current controller.
