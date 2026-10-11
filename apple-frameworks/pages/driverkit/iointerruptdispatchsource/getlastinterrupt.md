> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iointerruptdispatchsource/getlastinterrupt

# GetLastInterrupt

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t GetLastInterrupt(uint64_t *count, uint64_t *time);
```
