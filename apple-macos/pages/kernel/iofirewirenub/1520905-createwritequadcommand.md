> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirenub/1520905-createwritequadcommand

# createWriteQuadCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWWriteQuadCommand * createWriteQuadCommand(FWAddress devAddress, UInt32 *quads, int numQuads, FWDeviceCallback completion, void *refcon, bool failOnReset);
```
