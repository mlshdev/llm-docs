> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface/3294572-setreport_impl](https://developer.apple.com/documentation/kernel/iohidinterface/3294572-setreport_impl)

# SetReport_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.1)

## Declaration

```objectivec
kern_return_t SetReport_Impl(IOMemoryDescriptor *report, IOHIDReportType reportType, uint32_t reportID, IOOptionBits options);
```
