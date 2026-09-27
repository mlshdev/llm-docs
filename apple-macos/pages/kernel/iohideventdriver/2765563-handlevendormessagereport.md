> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventdriver/2765563-handlevendormessagereport

# handleVendorMessageReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
void handleVendorMessageReport(AbsoluteTime timeStamp, IOMemoryDescriptor *report, UInt32 reportID, int phase);
```
