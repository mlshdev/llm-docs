> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2managementorb/1519783-writecompletestatic

# writeCompleteStatic

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void writeCompleteStatic(void *refcon, IOReturn status, IOFireWireNub *device, IOFWCommand *fwCmd);
```
