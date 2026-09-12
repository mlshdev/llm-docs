> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3294577-handlereportgated](https://developer.apple.com/documentation/kernel/iohidinterface/3294577-handlereportgated)

# handleReportGated

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
void handleReportGated(AbsoluteTime timestamp, IOMemoryDescriptor *report, IOHIDReportType type, UInt32 reportID, void *ctx);
```
