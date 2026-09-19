> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewirebus/3516562-createasyncstreamcommand

# createAsyncStreamCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOFWAsyncStreamCommand * createAsyncStreamCommand(UInt32 generation, UInt32 channel, UInt32 sync, UInt32 tag, IOMemoryDescriptor *hostMem, UInt32 size, int speed, FWAsyncStreamCallback completion, void *refcon, bool failOnReset);
```
