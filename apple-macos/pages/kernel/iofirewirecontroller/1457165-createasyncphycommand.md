> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457165-createasyncphycommand](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457165-createasyncphycommand)

# createAsyncPHYCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOFWAsyncPHYCommand * createAsyncPHYCommand(UInt32 generation, UInt32 data1, UInt32 data2, FWAsyncPHYCallback completion, void *refcon, bool failOnReset);
```
