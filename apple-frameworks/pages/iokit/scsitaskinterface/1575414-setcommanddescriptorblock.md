> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575414-setcommanddescriptorblock](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575414-setcommanddescriptorblock)

# SetCommandDescriptorBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to set the task's SCSICommandDescriptorBlock.

## Declaration

```objectivec
IOReturn (*SetCommandDescriptorBlock)(void *task, UInt8 *inCDB, UInt8 inSize);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `inCDB`: Pointer to an array of values to be stored in the SCSITask's SCSICommandDescriptorBlock.
- `inSize`: The size of the array inCDB. Valid values are 6, 10, 12, and 16 which have enums defined in SCSITask.h.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to set the SCSITasks' SCSICommandDescriptorBlock.
