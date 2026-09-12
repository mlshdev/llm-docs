> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidtranslationservice/4077787-handleinterruptreport](https://developer.apple.com/documentation/kernel/iohidtranslationservice/4077787-handleinterruptreport)

# handleInterruptReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
void handleInterruptReport(AbsoluteTime timeStamp, IOMemoryDescriptor *report, IOHIDReportType reportType, UInt32 reportID);
```
