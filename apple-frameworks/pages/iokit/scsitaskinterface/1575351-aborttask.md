> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/scsitaskinterface/1575351-aborttask](https://developer.apple.com/documentation/iokit/scsitaskinterface/1575351-aborttask)

# AbortTask

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Method to abort the SCSITask.

## Declaration

```objectivec
IOReturn (*AbortTask)(void *task);
```

## Parameters

- `task`: Pointer to an instance of an SCSITaskInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess, kIOReturnUnsupported or kIOReturnError.

<a id="discussion"></a>

## Discussion

This method can be used to abort an SCSITask which is already in progress.
