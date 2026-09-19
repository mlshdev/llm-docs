> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengineuserclient/1495522-registerclientbuffer64

# registerClientBuffer64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn registerClientBuffer64(IOAudioStream *audioStream, mach_vm_address_t sourceBuffer, UInt32 bufSizeInBytes, UInt32 bufferSetID);
```
