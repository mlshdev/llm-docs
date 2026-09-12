> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirenub/1520925-createcompareandswapcommand](https://developer.apple.com/documentation/kernel/iofirewirenub/1520925-createcompareandswapcommand)

# createCompareAndSwapCommand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOFWCompareAndSwapCommand * createCompareAndSwapCommand(FWAddress devAddress, const UInt32 *cmpVal, const UInt32 *newVal, int size, FWDeviceCallback completion, void *refcon, bool failOnReset);
```
