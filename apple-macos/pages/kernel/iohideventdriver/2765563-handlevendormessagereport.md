> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventdriver/2765563-handlevendormessagereport](https://developer.apple.com/documentation/kernel/iohideventdriver/2765563-handlevendormessagereport)

# handleVendorMessageReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
void handleVendorMessageReport(AbsoluteTime timeStamp, IOMemoryDescriptor *report, UInt32 reportID, int phase);
```
