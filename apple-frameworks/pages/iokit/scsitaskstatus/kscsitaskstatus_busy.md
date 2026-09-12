> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskstatus/kscsitaskstatus_busy](https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_busy)

# kSCSITaskStatus_BUSY

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_BUSY = 0x08
```

<a id="discussion"></a>

## Discussion

The task completed with a status of BUSY. The device server might need time to process a request and a delay may be required.
