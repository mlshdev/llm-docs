> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/scsitaskstatus/kscsitaskstatus_protocoltimeoutoccurred](https://developer.apple.com/documentation/kernel/scsitaskstatus/kscsitaskstatus_protocoltimeoutoccurred)

# kSCSITaskStatus_ProtocolTimeoutOccurred

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+

## Declaration

```objectivec
kSCSITaskStatus_ProtocolTimeoutOccurred = 0x02
```

<a id="discussion"></a>

## Discussion

If a task is aborted by the SCSI Protocol Layer due to it exceeding a timeout value specified by the support for the protocol or a related specification, the task status shall be set to kSCSITaskStatus_ProtocolTimeoutOccurred.
