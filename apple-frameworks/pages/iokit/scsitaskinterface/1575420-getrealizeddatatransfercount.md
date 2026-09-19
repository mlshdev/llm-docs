> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskinterface/1575420-getrealizeddatatransfercount

# GetRealizedDataTransferCount

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the actual transfer count in bytes from the SCSITask.

## Declaration

```objectivec
UInt64 (*GetRealizedDataTransferCount)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns a UInt64 value of bytes transferred.

<a id="discussion"></a>

## Discussion

This method can be used to get the actual transfer count in bytes from the SCSITask.
