> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575355-settaskattribute](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575355-settaskattribute)

# SetTaskAttribute

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to set the task's attribute.

## Declaration

```objectivec
IOReturn (*SetTaskAttribute)(void *task, SCSITaskAttribute inAttribute);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `inAttribute`: The new attribute value to be stored in the SCSITask.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to set the SCSITask's SCSITaskAttribute field. Valid values are defined in SCSITask.h
