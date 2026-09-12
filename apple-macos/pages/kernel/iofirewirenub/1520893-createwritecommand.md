> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirenub/1520893-createwritecommand](https://developer.apple.com/documentation/kernel/iofirewirenub/1520893-createwritecommand)

# createWriteCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWWriteCommand * createWriteCommand(FWAddress devAddress, IOMemoryDescriptor *hostMem, FWDeviceCallback completion, void *refcon, bool failOnReset);
```
