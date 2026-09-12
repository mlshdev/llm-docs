> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblowlatencyisoccompletionaction](https://developer.apple.com/documentation/iokit/iousblowlatencyisoccompletionaction)

# IOUSBLowLatencyIsocCompletionAction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

## Declaration

```objectivec
typedef void (*IOUSBLowLatencyIsocCompletionAction)(void *target, void *parameter, IOReturn status, IOUSBLowLatencyIsocFrame *pFrames);
```

## Parameters

- `target`: The target specified in the IOUSBLowLatencyIsocCompletion struct.
- `parameter`: The parameter specified in the IOUSBLowLatencyIsocCompletion struct.
- `status`: Completion status.
- `pFrames`: Pointer to the low latency frame list containing the status for each frame transferred.

<a id="discussion"></a>

## Discussion

Function called when Low Latency Isochronous USB I/O completes.

## See Also

### Callbacks

- [IOUSBCompletionAction](iousbcompletionaction.md)
- [IOUSBCompletionActionWithTimeStamp](iousbcompletionactionwithtimestamp.md)
- [IOUSBIsocCompletionAction](iousbisoccompletionaction.md)
