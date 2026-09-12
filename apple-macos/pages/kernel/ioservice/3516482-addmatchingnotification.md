> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3516482-addmatchingnotification](https://developer.apple.com/documentation/kernel/ioservice/3516482-addmatchingnotification)

# addMatchingNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
static IONotifier * addMatchingNotification(const OSSymbol *type, OSDictionary *matching, SInt32 priority, IOServiceMatchingNotificationHandlerBlock handler);
```
