> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1456898-serverkeyswitchcallback

# serverKeyswitchCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static bool serverKeyswitchCallback(void *target, void *refCon, IOService *service, IONotifier *notifier);
```
