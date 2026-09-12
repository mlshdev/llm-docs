> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostcompletionaction](https://developer.apple.com/documentation/kernel/iousbhostcompletionaction)

# IOUSBHostCompletionAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.11+

The function description for a USB host completion action.

## Declaration

```objectivec
typedef void (*IOUSBHostCompletionAction)(void *owner, void *parameter, IOReturn status, uint32_t bytesTransferred);
```

## See Also

### Actions

- [IOUSBCompletionAction](iousbcompletionaction.md): A function the system calls when the USB input/output request completes.
- [IOUSBCompletion](iousbcompletion.md): The structure that specifies the action to perform when the USB input/output request completes.
- [IOUSBHostBundledCompletion](iousbhostbundledcompletion.md): The structure that specifies the action to perform when a bulk USB input/output request completes.
- [IOUSBHostBundledCompletionAction](iousbhostbundledcompletionaction.md): The function description for a USB host bundled completion action.
- [IOUSBHostCompletion](iousbhostcompletion.md): The structure that specifies the action to perform when the USB input/output request completes.
- [IOUSBHostIsochronousCompletion](iousbhostisochronouscompletion.md): A structure describing the completion callback for an asynchronous isochronous operation.
- [IOUSBHostIsochronousCompletionAction](iousbhostisochronouscompletionaction.md): The function description for a USB host isochronous completion action.
- [IOUSBIsocCompletion](iousbisoccompletion.md): A structure specifying the action to perform when an isochronous USB input/output operation completes.
- [IOUSBIsocCompletionAction](iousbisoccompletionaction.md): The function that executes when the isochronous USB input/output request completes.
- [IOUSBLowLatencyIsocCompletion](iousblowlatencyisoccompletion.md): The function that executes when the low-latency isochronous USB input/output request completes.
- [IOUSBLowLatencyIsocCompletionAction](iousblowlatencyisoccompletionaction.md): The function that excutes when the low-latency isochronous USB input/output request completes.
- [IOUSBCompletionActionWithTimeStamp](iousbcompletionactionwithtimestamp.md): The function that executes when the USB input/output request completes.
- [IOUSBCompletionWithTimeStamp](iousbcompletionwithtimestamp.md): A structure specifying action to perform when the USB input/output request completes.
