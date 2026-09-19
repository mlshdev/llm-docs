> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/diskarbitration/daapprovalsessionschedulewithrunloop

# DAApprovalSessionScheduleWithRunLoop

**Interface language:** Objective-C

**Framework:** Disk Arbitration  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

## Declaration

```objectivec
extern void DAApprovalSessionScheduleWithRunLoop(DAApprovalSessionRef session, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## See Also

### Functions

- [DAApprovalSessionCreate](daapprovalsessioncreate.md)
- [DAApprovalSessionGetTypeID](daapprovalsessiongettypeid.md)
- [DAApprovalSessionUnscheduleFromRunLoop](daapprovalsessionunschedulefromrunloop.md)
