> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/1532881-addnotification

# addNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.11.4)

## Declaration

```objectivec
static OSPtr<IONotifier> addNotification(const OSSymbol *type, OSDictionary *matching, IOServiceNotificationHandler handler, void *target, void *ref, SInt32 priority);
```
