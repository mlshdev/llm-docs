> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iovideodevicenotificationmessage](https://developer.apple.com/documentation/iokit/iovideodevicenotificationmessage)

# IOVideoDeviceNotificationMessage

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
typedef struct IOVideoDeviceNotificationMessage {
    ...
} IOVideoDeviceNotificationMessage;
```

## Topics

### Instance Properties

- [mClientData](iovideodevicenotificationmessage/1503868-mclientdata.md): The client data that was registered with the mach port.
- [mMessageHeader](iovideodevicenotificationmessage/1503932-mmessageheader.md): The mach message header.
- [mNotifications](iovideodevicenotificationmessage/1503948-mnotifications.md): A variable length array of IOVideoNotification structures that carry the actual notification data. The number of elements in this array is denoted by mNumberNotifications, but can also be inferred from the message size in the mach message header.
- [mNumberNotifications](iovideodevicenotificationmessage/1503922-mnumbernotifications.md): The number of IOVideoNotifications in the mNotifications array.
