> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskinterface/1575357-gettaskstatus

# GetTaskStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the SCSITaskStatus from the SCSITask.

## Declaration

```objectivec
IOReturn (*GetTaskStatus)(void *task, SCSITaskStatus *outStatus);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `outStatus`: Pointer to an SCSITaskStatus.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the SCSITaskStatus from the SCSITask.
