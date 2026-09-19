> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_busy

# kSCSITaskStatus_BUSY

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kSCSITaskStatus_BUSY = 0x08
```

<a id="discussion"></a>

## Discussion

The task completed with a status of BUSY. The device server might need time to process a request and a delay may be required.
