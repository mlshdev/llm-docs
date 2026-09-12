> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideotypes_h_user-space/iovideonotification](https://developer.apple.com/documentation/iokit/iovideotypes_h_user-space/iovideonotification)

# IOVideoNotification

**Interface language:** Objective-C

**Framework:** Kernel

This structure contains an individual notification from the driver.

## Declaration

```objectivec
struct IOVideoDeviceNotification {
   UInt32 mObjectID;
   UInt32 mNotificationID;
   UInt32 mNotificationArgument1;
   UInt32 mNotificationArgument2;
   UInt64 mNotificationArgument3;
   UInt64 mNotificationArgument4;
};
```

## Topics

### Fields

- [mObjectID](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411466-mobjectid): The ID of the object to which the notification pertains.
- [mNotificationID](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411383-mnotificationid): A UInt32 that identifies the kind of the notification.
- [mNotificationArgument1](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411421-mnotificationargument1): A UInt32 whose usage depends on the the specific kind of notification.
- [mNotificationArgument2](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411377-mnotificationargument2): A UInt32 whose usage depends on the the specific kind of notification.
- [mNotificationArgument3](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411448-mnotificationargument3): A UInt64 whose usage depends on the the specific kind of notification.
- [mNotificationArgument4](https://developer.apple.com/documentation/kernel/iovideodevicenotification/1411371-mnotificationargument4): A UInt64 whose usage depends on the the specific kind of notification.

## See Also

### Related Documentation

- [IOVideoNotification](iovideonotification.md): This structure contains an individual notification from the driver.
