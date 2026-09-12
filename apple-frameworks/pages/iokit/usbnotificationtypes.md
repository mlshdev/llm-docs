> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usbnotificationtypes](https://developer.apple.com/documentation/iokit/usbnotificationtypes)

# USBNotificationTypes

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
typedef enum USBNotificationTypes : unsigned int {
    ...
} USBNotificationTypes;
```

<a id="overview"></a>

## Overview

Used to register for USB notifications. These types may be OR'd together if more than one notification is desired. These notification are expected to be acknowledged before the process (e.g. system sleep or system wake) can be continued. See RegisterForNotification and AcknowledgeNotification in IOUSBDeviceInterface and IOUSBInterfaceInterface.

## Topics

### Constants

- [kUSBNotificationPreForcedSuspend](usbnotificationtypes/kusbnotificationpreforcedsuspend.md)
- [kUSBNotificationPostForcedSuspend](usbnotificationtypes/kusbnotificationpostforcedsuspend.md)
- [kUSBNotificationPreForcedResume](usbnotificationtypes/kusbnotificationpreforcedresume.md)
- [kUSBNotificationPostForcedResume](usbnotificationtypes/kusbnotificationpostforcedresume.md)
