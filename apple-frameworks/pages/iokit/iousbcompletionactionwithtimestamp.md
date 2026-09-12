> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbcompletionactionwithtimestamp](https://developer.apple.com/documentation/iokit/iousbcompletionactionwithtimestamp)

# IOUSBCompletionActionWithTimeStamp

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
typedef void (*IOUSBCompletionActionWithTimeStamp)(void *target, void *parameter, IOReturn status, UInt32 bufferSizeRemaining, AbsoluteTime timeStamp);
```

## Parameters

- `target`: The target specified in the IOUSBCompletion struct.
- `parameter`: The parameter specified in the IOUSBCompletion struct.
- `status`: Completion status.
- `bufferSizeRemaining`: Bytes left to be transferred.
- `timeStamp`: Time at which the transaction was processed.

<a id="discussion"></a>

## Discussion

Function called when USB I/O completes.

## See Also

### Callbacks

- [IOUSBCompletionAction](iousbcompletionaction.md)
- [IOUSBIsocCompletionAction](iousbisoccompletionaction.md)
- [IOUSBLowLatencyIsocCompletionAction](iousblowlatencyisoccompletionaction.md)
