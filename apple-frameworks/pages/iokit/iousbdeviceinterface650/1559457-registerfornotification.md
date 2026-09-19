> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface650/1559457-registerfornotification

# RegisterForNotification

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
IOReturn (*RegisterForNotification)(void *self, UInt64 notificationMask, IOAsyncCallback2 callback, void *refCon, UInt64 *pRegistrationToken);
```
