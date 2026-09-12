> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575401-gettaskattribute](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575401-gettaskattribute)

# GetTaskAttribute

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the task's attribute.

## Declaration

```objectivec
IOReturn (*GetTaskAttribute)(void *task, SCSITaskAttribute *outAttribute);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `outAttribute`: Pointer to the attribute value stored in the SCSITask.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the SCSITasks' SCSITaskAttribute field. Valid values are defined in SCSITask.h
