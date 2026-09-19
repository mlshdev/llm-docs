> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbisoccompletionaction

# IOUSBIsocCompletionAction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*IOUSBIsocCompletionAction)(void *target, void *parameter, IOReturn status, IOUSBIsocFrame *pFrames);
```

## Parameters

- `target`: The target specified in the IOUSBIsocCompletionn struct.
- `parameter`: The parameter specified in the IOUSBIsocCompletion struct.
- `status`: Completion status.
- `pFrames`: Pointer to the frame list containing the status for each frame transferred.

<a id="discussion"></a>

## Discussion

Function called when Isochronous USB I/O completes.

## See Also

### Callbacks

- [IOUSBCompletionAction](iousbcompletionaction.md)
- [IOUSBCompletionActionWithTimeStamp](iousbcompletionactionwithtimestamp.md)
- [IOUSBLowLatencyIsocCompletionAction](iousblowlatencyisoccompletionaction.md)
