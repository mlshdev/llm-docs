> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575363-getcommanddescriptorblocksize](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575363-getcommanddescriptorblocksize)

# GetCommandDescriptorBlockSize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the task's SCSICommandDescriptorBlock size.

## Declaration

```objectivec
UInt8 (*GetCommandDescriptorBlockSize)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

UInt8 which is the size of the SCSICommandDescriptorBlock. Valid values are 6, 10, 12, and 16 which have enums defined in SCSITask.h

<a id="discussion"></a>

## Discussion

This method can be used to get the size of the SCSITask's SCSICommandDescriptorBlock.
