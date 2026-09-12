> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/1545729-getreport](https://developer.apple.com/documentation/kernel/iohidinterface/1545729-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual IOReturn getReport(IOMemoryDescriptor *report, IOHIDReportType reportType, UInt32 reportID, IOOptionBits options);
```
