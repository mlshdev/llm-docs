> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbcompletionaction](https://developer.apple.com/documentation/iokit/iousbcompletionaction)

# IOUSBCompletionAction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOUSBCompletionAction)(void *target, void *parameter, IOReturn status, UInt32 bufferSizeRemaining);
```

## Parameters

- `target`: The target specified in the IOUSBCompletion struct.
- `parameter`: The parameter specified in the IOUSBCompletion struct.
- `status`: Completion status.
- `bufferSizeRemaining`: Bytes left to be transferred.

<a id="discussion"></a>

## Discussion

Function called when USB I/O completes.

## See Also

### Callbacks

- [IOUSBCompletionActionWithTimeStamp](iousbcompletionactionwithtimestamp.md)
- [IOUSBIsocCompletionAction](iousbisoccompletionaction.md)
- [IOUSBLowLatencyIsocCompletionAction](iousblowlatencyisoccompletionaction.md)
