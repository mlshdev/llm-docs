> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/2870306-copyeventforclient

# copyEventForClient

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOHIDEvent * copyEventForClient(OSObject *copySpec, IOOptionBits options, void *clientContext);
```
