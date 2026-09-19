> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/1495504-registerbuffer64

# registerBuffer64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn registerBuffer64(IOAudioStream *audioStream, mach_vm_address_t sourceBuffer, UInt32 bufSizeInBytes, UInt32 bufferSetID);
```
