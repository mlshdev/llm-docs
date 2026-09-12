> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideotypes_h_user-space/iovideodevicenotificationmessage](https://developer.apple.com/documentation/iokit/iovideotypes_h_user-space/iovideodevicenotificationmessage)

# IOVideoDeviceNotificationMessage

**Interface language:** Objective-C

**Framework:** Kernel

This structure describes a notification from the driver. Note that the message can contain multiple notifications.

## Declaration

```objectivec
struct IOVideoDeviceNotificationMessage {
   mach_msg_header_t mMessageHeader;
   UInt32 mClientData;
   UInt32 mNumberNotifications;
   IOVideoDeviceNotification mNotifications[1];
};
```

## Topics

### Fields

- [mMessageHeader](https://developer.apple.com/documentation/kernel/iovideodevicenotificationmessage/1411394-mmessageheader): The mach message header.
- [mClientData](https://developer.apple.com/documentation/kernel/iovideodevicenotificationmessage/1411358-mclientdata): The client data that was registered with the mach port.
- [mNumberNotifications](https://developer.apple.com/documentation/kernel/iovideodevicenotificationmessage/1411444-mnumbernotifications): The number of IOVideoNotifications in the mNotifications array.
- [mNotifications](https://developer.apple.com/documentation/kernel/iovideodevicenotificationmessage/1411390-mnotifications): A variable length array of IOVideoNotification structures that carry the actual notification data. The number of elements in this array is denoted by mNumberNotifications, but can also be inferred from the message size in the mach message header.
