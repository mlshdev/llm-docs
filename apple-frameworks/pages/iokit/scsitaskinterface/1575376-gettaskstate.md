> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575376-gettaskstate](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575376-gettaskstate)

# GetTaskState

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the SCSITaskState from the SCSITask.

## Declaration

```objectivec
IOReturn (*GetTaskState)(void *task, SCSITaskState *outState);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `outState`: Pointer to an SCSITaskState.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the SCSITaskState from the SCSITask.
