> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iovideodevicenotificationmessage/1503948-mnotifications

# mNotifications

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

A variable length array of IOVideoNotification structures that carry the actual notification data. The number of elements in this array is denoted by mNumberNotifications, but can also be inferred from the message size in the mach message header.

## Declaration

```objectivec
IOVideoDeviceNotification mNotifications[1];
```
