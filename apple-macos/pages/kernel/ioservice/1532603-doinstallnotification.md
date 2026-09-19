> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/1532603-doinstallnotification

# doInstallNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSPtr<IONotifier> doInstallNotification(const OSSymbol *type, OSDictionary *matching, IOServiceMatchingNotificationHandler handler, void *target, void *ref, SInt32 priority, OSIterator **existing);
```
