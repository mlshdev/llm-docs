> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3294562-handlereportprivate](https://developer.apple.com/documentation/kernel/iohidinterface/3294562-handlereportprivate)

# HandleReportPrivate

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
void HandleReportPrivate(AbsoluteTime timestamp, IOMemoryDescriptor *report, IOHIDReportType type, UInt32 reportID, void *ctx);
```
