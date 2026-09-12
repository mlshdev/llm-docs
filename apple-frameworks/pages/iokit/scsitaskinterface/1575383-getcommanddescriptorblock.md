> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575383-getcommanddescriptorblock](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575383-getcommanddescriptorblock)

# GetCommandDescriptorBlock

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to get the task's SCSICommandDescriptorBlock.

## Declaration

```objectivec
IOReturn (*GetCommandDescriptorBlock)(void *task, UInt8 *outCDB);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.
- `outCDB`: Pointer to an array the size of the SCSICommandDescriptorBlock in question. Clients should call GetCommandDescriptorBlockSize first to find out how large an array should be passed in.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSucces or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to get the SCSITasks' SCSICommandDescriptorBlock.
