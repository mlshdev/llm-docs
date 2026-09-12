> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideodevicenotification](https://developer.apple.com/documentation/iokit/iovideodevicenotification)

# IOVideoDeviceNotification

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
typedef struct IOVideoDeviceNotification {
    ...
} IOVideoDeviceNotification;
```

## Topics

### Instance Properties

- [mNotificationArgument1](iovideodevicenotification/1503991-mnotificationargument1.md): A UInt32 whose usage depends on the the specific kind of notification.
- [mNotificationArgument2](iovideodevicenotification/1503960-mnotificationargument2.md): A UInt32 whose usage depends on the the specific kind of notification.
- [mNotificationArgument3](iovideodevicenotification/1503903-mnotificationargument3.md): A UInt64 whose usage depends on the the specific kind of notification.
- [mNotificationArgument4](iovideodevicenotification/1503923-mnotificationargument4.md): A UInt64 whose usage depends on the the specific kind of notification.
- [mNotificationID](iovideodevicenotification/1503872-mnotificationid.md): A UInt32 that identifies the kind of the notification.
- [mObjectID](iovideodevicenotification/1503906-mobjectid.md): The ID of the object to which the notification pertains.
