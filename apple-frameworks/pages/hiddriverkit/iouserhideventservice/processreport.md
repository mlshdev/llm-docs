> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventservice/processreport](https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/processreport)

# processReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS

## Declaration

```objectivec
virtual kern_return_t processReport(uint64_t timestamp, uint64_t report, uint32_t reportLength, IOHIDReportType type, uint32_t reportID);
```
