> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3516593-getreport](https://developer.apple.com/documentation/kernel/iohidinterface/3516593-getreport)

# getReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 10.15.2)

## Declaration

```objectivec
virtual IOReturn getReport(IOMemoryDescriptor *report, IOHIDReportType reportType, UInt32 reportID, IOOptionBits options, UInt32 completionTimeout, CompletionAction *completion);
```
