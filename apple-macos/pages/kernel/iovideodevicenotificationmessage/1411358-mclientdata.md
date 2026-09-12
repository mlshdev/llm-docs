> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideodevicenotificationmessage/1411358-mclientdata](https://developer.apple.com/documentation/kernel/iovideodevicenotificationmessage/1411358-mclientdata)

# mClientData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The client data that was registered with the mach port.

## Declaration

```objectivec
UInt32 mClientData;
```

## See Also

### Fields

- [mMessageHeader](1411394-mmessageheader.md): The mach message header.
- [mNumberNotifications](1411444-mnumbernotifications.md): The number of IOVideoNotifications in the mNotifications array.
- [mNotifications](1411390-mnotifications.md): A variable length array of IOVideoNotification structures that carry the actual notification data. The number of elements in this array is denoted by mNumberNotifications, but can also be inferred from the message size in the mach message header.
