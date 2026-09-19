> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3516482-addmatchingnotification

# addMatchingNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static IONotifier * addMatchingNotification(const OSSymbol *type, OSDictionary *matching, SInt32 priority, IOServiceMatchingNotificationHandlerBlock handler);
```
