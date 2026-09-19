> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirepcrspace/1556239-allocateoutputplug

# allocateOutputPlug

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn allocateOutputPlug(void *refcon, IOFireWirePCRCallback func, UInt32 & plug);
```
