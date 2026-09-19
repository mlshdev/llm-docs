> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457154-resetstatechange

# resetStateChange

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void resetStateChange(void *refcon, IOReturn status, IOFireWireBus *bus, IOFWBusCommand *fwCmd);
```
