> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskarbitration/daapprovalsessionschedulewithrunloop](https://developer.apple.com/documentation/diskarbitration/daapprovalsessionschedulewithrunloop)

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
