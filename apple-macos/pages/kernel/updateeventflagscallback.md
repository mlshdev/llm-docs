> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/updateeventflagscallback](https://developer.apple.com/documentation/kernel/updateeventflagscallback)

# UpdateEventFlagsCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef void (*UpdateEventFlagsCallback)(OSObject *target, unsigned int flags, OSObject *sender, void *refcon);
```
