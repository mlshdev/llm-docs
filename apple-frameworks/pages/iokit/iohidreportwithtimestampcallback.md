> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidreportwithtimestampcallback](https://developer.apple.com/documentation/iokit/iohidreportwithtimestampcallback)

# IOHIDReportWithTimeStampCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.10+

## Declaration

```objectivec
typedef void (*IOHIDReportWithTimeStampCallback)(void *context, IOReturn result, void *sender, IOHIDReportType type, uint32_t reportID, uint8_t *report, CFIndex reportLength, uint64_t timeStamp);
```
