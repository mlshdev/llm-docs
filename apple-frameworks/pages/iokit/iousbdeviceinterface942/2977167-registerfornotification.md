> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface942/2977167-registerfornotification](https://developer.apple.com/documentation/iokit/iousbdeviceinterface942/2977167-registerfornotification)

# RegisterForNotification

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.14+

## Declaration

```objectivec
IOReturn (*RegisterForNotification)(void *self, UInt64 notificationMask, IOAsyncCallback2 callback, void *refCon, UInt64 *pRegistrationToken);
```
