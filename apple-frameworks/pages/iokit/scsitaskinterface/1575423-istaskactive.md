> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575423-istaskactive](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575423-istaskactive)

# IsTaskActive

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to find out if the task is active or not.

## Declaration

```objectivec
Boolean (*IsTaskActive)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns 0 if the task is not active, non-zero if it is active.

<a id="discussion"></a>

## Discussion

Method to find out if the task is active or not. The task is considered "active" if the SCSITaskState is not kSCSITaskState_NEW nor kSCSITaskState_ENDED.
