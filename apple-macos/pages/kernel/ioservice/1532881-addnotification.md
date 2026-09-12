> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532881-addnotification](https://developer.apple.com/documentation/kernel/ioservice/1532881-addnotification)

# addNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.11.4)

## Declaration

```objectivec
static OSPtr<IONotifier> addNotification(const OSSymbol *type, OSDictionary *matching, IOServiceNotificationHandler handler, void *target, void *ref, SInt32 priority);
```
