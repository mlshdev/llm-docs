> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskstatus/kscsitaskstatus_protocoltimeoutoccurred

# kSCSITaskStatus_ProtocolTimeoutOccurred

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_ProtocolTimeoutOccurred = 0x02
```

<a id="discussion"></a>

## Discussion

If a task is aborted by the SCSI Protocol Layer due to it exceeding a timeout value specified by the support for the protocol or a related specification, the task status shall be set to kSCSITaskStatus_ProtocolTimeoutOccurred.
