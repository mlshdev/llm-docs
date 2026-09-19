> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/completeoutputreport

# CompleteOutputReport

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 20.0+ · macOS

## Declaration

```objectivec
virtual void CompleteOutputReport(OSAction *action, IOReturn status, uint32_t actualByteCount, uint64_t completionTimestamp);
```
