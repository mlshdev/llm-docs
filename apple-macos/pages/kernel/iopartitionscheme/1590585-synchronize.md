> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1590585-synchronize](https://developer.apple.com/documentation/kernel/iopartitionscheme/1590585-synchronize)

# synchronize

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn synchronize(IOService *client, UInt64 byteStart, UInt64 byteCount, IOStorageSynchronizeOptions options);
```
