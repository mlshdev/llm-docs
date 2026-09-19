> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioblockstoragedevice/1568457-reportpollrequirements

# reportPollRequirements

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.11.4)

## Declaration

```objectivec
virtual IOReturn reportPollRequirements(bool *pollRequired, bool *pollIsExpensive);
```
