> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/1545724-setreport](https://developer.apple.com/documentation/kernel/iohidinterface/1545724-setreport)

# setReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOReturn setReport(IOMemoryDescriptor *report, IOHIDReportType reportType, UInt32 reportID, IOOptionBits options);
```
